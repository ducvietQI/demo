export const createUrlWithParams = (
  baseUrl: string,
  params: { [key: string]: string | number | boolean }
): string => {
  const url = new URL(baseUrl);

  if (params) {
    Object.keys(params).forEach((key) => {
      if (
        params[key] !== undefined &&
        params[key] !== null &&
        params[key] !== ""
      ) {
        url.searchParams.append(key, params[key].toString());
      }
    });
  }
  return url.toString();
};

export const isClient = () => typeof window !== "undefined";
