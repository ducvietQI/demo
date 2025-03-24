export const IS_DEV = process.env.NODE_ENV !== "production";

export const NEXT_PUBLIC_MAIN_URL: string =
  process.env.NEXT_PUBLIC_MAIN_URL || "$NEXT_PUBLIC_MAIN_URL";
