const NOT_HAVE_VALUE_LABEL = "--";
import slugify from "slugify";

/**
 * Format number
 *
 * @param {number} number - The number to format
 * @param {number} [maximumFractionDigits = 3] -The length of decimal
 * @param {string} [fallbackLabel = NOT_HAVE_VALUE_LABEL] - Default string will returned when number is the empty string
 * @param {object} [localeOption = {}] - To customized method toLocaleString
 * @param {number} [minimumFractionDigits = 0] - The min length of decimal
 *
 * @return {string} The value of format number
 *
 */
export const formatNumber = (
  number: number,
  maximumFractionDigits = 3,
  fallbackLabel = NOT_HAVE_VALUE_LABEL,
  localeOption = {},
  minimumFractionDigits = 0
) => {
  try {
    if (!number && number !== 0) return fallbackLabel;
    const num = Number(number);
    return num.toLocaleString("vi-VN", {
      maximumFractionDigits,
      minimumFractionDigits,
      ...localeOption,
    });
  } catch (error) {
    return number;
  }
};

export const formatNameSpace = (
  pathname?: string,
  id?: number | string
): string => {
  let formattedPathname = slugify(pathname || "", {
    locale: "vi",
    lower: true,
    remove: /[!@#$%^&*(),.?":{}|<>_+\-=\[\]\\;'`~\/]/g,
  });

  if (id) {
    formattedPathname += `-${id}`;
  }

  return formattedPathname;
};
