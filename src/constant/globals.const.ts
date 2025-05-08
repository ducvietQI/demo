export const TIMEOUT = 1800000;

export const HEADER_DEFAULT = {
  "Access-Control-Allow-Origin": "*",
};

// HTTP Status
export const STT_OK = 200;
export const STT_CREATED = 201;
export const STT_BAD_REQUEST = 400;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_NOT_FOUND = 404;
export const STT_INTERNAL_SERVER = 500;
export const STT_NOT_MODIFIED = 304;

export const DEFAULT_SIZE = 9;
export const DEFAULT_PAGE = 1;

export const COOKIE_STORAGE = {
  User: "user",
  AccessToken: "accessToken",
  RefreshToken: "refreshToken",
  Domain: "domain",
  ExpiredTime: "expiredTime",
};
