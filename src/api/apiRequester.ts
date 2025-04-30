import { GlobalsConst } from "@/constant";
import { CommonUtils, ServerUtils } from "@/utils";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import jsCookie from "js-cookie";

export type IParams = {
  [key: string]: string | number | boolean | undefined | any;
};

export type ApiResponse<T> = {
  status: number;
  payload: T;
};

type CustomOptions = Omit<RequestInit, "method" | "signal"> & {
  baseUrl?: string | undefined;
  timeout?: number;
  params?: IParams;
  controller?: AbortController;
  accessToken?: string;
  cache?: RequestCache;
  revalidate?: number | false;
};

const request = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  endpoint: string,
  options?: CustomOptions | undefined
): Promise<ApiResponse<T>> => {
  try {
    const controller = options?.controller ?? new AbortController();
    const timeout = options?.timeout ?? GlobalsConst.TIMEOUT;

    let body = options?.body;
    if (body && !(body instanceof FormData)) {
      body = JSON.stringify(body);
    }

    const baseHeaders: Record<string, string> = {
      ...GlobalsConst.HEADER_DEFAULT,
    };
    if (body instanceof FormData) {
      delete baseHeaders["Content-Type"];
    } else {
      if (method !== "GET") {
        baseHeaders["Content-Type"] = "application/json";
      }
    }

    let accessToken = null;
    let session = null;

    if (options?.accessToken !== undefined) {
      accessToken = options?.accessToken;
    } else if (CommonUtils.isClient()) {
      accessToken = jsCookie.get(GlobalsConst.COOKIE_STORAGE.AccessToken);
    } else {
      session = await ServerUtils.getSessionAction();
      if (session && session.accessToken) {
        accessToken = session.accessToken;
      }
    }

    if (accessToken) {
      baseHeaders.authorization = `Bearer ${accessToken}`;
    }

    const baseUrl = options?.baseUrl ?? process.env.NEXT_PUBLIC_API_URL;
    let fullUrl = endpoint.startsWith("/")
      ? `${baseUrl}${endpoint}`
      : `${baseUrl}/${endpoint}`;
    if (options?.params) {
      fullUrl = CommonUtils.createUrlWithParams(fullUrl, options.params);
    }

    const timeoutId = setTimeout(() => controller.abort(), timeout);
    const res = await fetch(fullUrl, {
      method,
      signal: controller.signal,
      cache: options?.cache ?? (method === "GET" ? "force-cache" : "no-store"),
      ...(typeof options?.revalidate === "number" ||
      options?.revalidate === false
        ? { next: { revalidate: options.revalidate } }
        : {}),
      headers: {
        ...baseHeaders,
        ...options?.headers,
      },
      ...(body && method !== "GET" ? { body } : {}),
      ...options,
    });

    clearTimeout(timeoutId);

    let payload: T;
    const contentType = res.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      payload = await res.json();
    } else {
      payload = (await res.text()) as T;
    }

    const data: ApiResponse<T> = { status: res.status, payload };

    if (!res.ok) {
      if (res.status === GlobalsConst.STT_BAD_REQUEST) {
        // TODO later: do something...
      } else if (res.status === GlobalsConst.STT_FORBIDDEN) {
        // TODO later: do something...
      } else if (res.status === GlobalsConst.STT_UNAUTHORIZED) {
        // TODO later: do something...
      }
    }

    return data;
  } catch (errors) {
    if (isRedirectError(errors)) {
      throw errors;
    }
    return { status: GlobalsConst.STT_INTERNAL_SERVER, payload: errors as T };
  }
};

const apiRequester = {
  async get<T>(
    url: string,
    params?: IParams,
    options?: Omit<CustomOptions, "body" | "params">
  ): Promise<ApiResponse<T>> {
    return request<T>("GET", url, { params, ...options });
  },

  async post<T>(
    url: string,
    body?: any,
    options?: Omit<CustomOptions, "body">
  ): Promise<ApiResponse<T>> {
    return request<T>("POST", url, { body, ...options });
  },

  async put<T>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, "body">
  ): Promise<ApiResponse<T>> {
    return request<T>("PUT", url, { body, ...options });
  },

  async patch<T>(
    url: string,
    body?: any,
    options?: Omit<CustomOptions, "body">
  ): Promise<ApiResponse<T>> {
    return request<T>("PATCH", url, { body, ...options });
  },

  async delete<T>(
    url: string,
    body?: any,
    params?: IParams,
    options?: Omit<CustomOptions, "body" | "params">
  ): Promise<ApiResponse<T>> {
    return request<T>("DELETE", url, { params, body, ...options });
  },
};

export default apiRequester;
