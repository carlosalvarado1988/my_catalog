import { OrderItem } from "./types/api/types";

export function getTotalAmountShoopingCart(items: OrderItem[]): number {
  return items?.map((i) => i.total).reduce((a, b) => a + b, 0);
}

// import { unix } from "moment";

// export const convertTimestampToDate = (value?: number) =>
//   value ? unix(value).format("MM/DD/YYYY") : "";

// /**
//  * convertNumberToCurrency
//  *
//  * Converts a passed currency value to a formatted expression of the currency
//  * for the pass country (type).
//  * ie - 1000, USD is converted to $10.00
//  *
//  * More supported currency types may be found at https://stripe.com/docs/currencies
//  *
//  * @param value The currency value
//  * @param type The country the currency is from.
//  */
// export const convertNumberToCurrency = (
//   value?: number,
//   type?: CurrenciesEnum,
// ) => {
//   let formatter: Intl.NumberFormat
//   value = value || 0
//   switch (type) {
//     case CurrenciesEnum.EUR:
//       formatter = new Intl.NumberFormat(`de-DE`, {
//         style: `currency`,
//         currency: `EUR`,
//       })
//       return formatter.format(value / 100)
//     case CurrenciesEnum.USD:
//       formatter = new Intl.NumberFormat(`en-US`, {
//         style: `currency`,
//         currency: `USD`,
//       })
//       return formatter.format(value / 100)
//     default:
//       return value
//   }
// }

export function getPageNoQuery(): string {
  // Get full URL
  const currURL: string = window.location.href; // Get current address
  // Get the URL between what's after '/' and befor '?'
  // 1. Get URL after'/'
  const afterDomain: string = currURL.substring(currURL.lastIndexOf("/") + 1);
  // 2. Get the part before '?'
  const beforeQueryString: string = afterDomain.split("?")[0];

  return beforeQueryString;
}

export function removeQueries(): boolean {
  window.history.replaceState({}, document.title, `/${getPageNoQuery()}`);
  return true;
}

// export const validEmailFormat = (email: string): boolean => {
//   const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   const isValid = regex.test(email);
//   return isValid;
// };

// export const validateCreditCardExpirationDate = (
//   dateString: string
// ): boolean => {
//   if (dateString.length === 5) {
//     const [month, year] = dateString.split("/");
//     if (Number(month) > 12) return false;
//     const currentDate = new Date();
//     const twentyFromNow = new Date();
//     twentyFromNow.setFullYear(currentDate.getFullYear() + 20);
//     const CcDate = new Date(
//       Number("20" + year),
//       Number(month) - 1,
//       currentDate.getDate(),
//       23,
//       59,
//       59
//     );
//     if (currentDate <= CcDate && CcDate < twentyFromNow) {
//       return true;
//     } else return false;
//   } else return false;
// };

// export const validateZipCode = (zip: string) =>
//   /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/.test(zip);

// export const validateCvc = (cvc: string, cardType: string) => {
//   switch (cardType.toUpperCase()) {
//     case CreditCardTypeEnum.VISA:
//     case CreditCardTypeEnum.MASTERCARD:
//     case CreditCardTypeEnum.DISCOVER:
//     case CreditCardTypeEnum.DINERS_CLUB:
//     case CreditCardTypeEnum.JCB:
//       return /^[0-9]{3}$/.test(cvc);
//     case CreditCardTypeEnum.AMERICAN_EXPRESS:
//       return /^[0-9]{4}$/.test(cvc);
//     default:
//       return /^[0-9]{3,4}$/.test(cvc);
//   }
//   // https://en.wikipedia.org/wiki/Card_security_code
// };

// export const valueIsNumeric = (value: string) =>
//   !isNaN(Number(value.slice(-1)));

// export const matchLastCharacter = (value: string, character: string) =>
//   value.slice(-1) === character;

// export const getElementColor = (
//   colorParam?: ButtonColorThemes,
//   hover?: boolean
// ) => {
//   const { BLUE, INHERIT, ORANGE, DARK_BLUE } = ButtonColorThemes;
//   switch (colorParam) {
//     case ORANGE:
//       return !hover ? COLORS.ORANGE : COLORS.ORANGE_DARK;
//     case BLUE:
//       return !hover ? COLORS.BLUE : COLORS.BLUE_DARK;
//     case DARK_BLUE:
//       return !hover ? COLORS.BLUE_DARK_X : COLORS.BLUE_DARK;
//     case INHERIT:
//       return !hover ? `inherit` : COLORS.GRAY;
//     default:
//       return !hover ? COLORS.ORANGE : COLORS.ORANGE_DARK;
//   }
// };

// export const orderByDefaultFirst = (
//   paymentMethods?: any[] | DeepReadonlyArray<PaymentMethod>
// ) => {
//   if (!paymentMethods) return [];
//   return orderBy(paymentMethods, "default", "desc");
// };

// export const getExpirationDateFromString = (expiration: string) => {
//   const month = expiration.split("/")[0];
//   const year = "20".concat(expiration.split("/")[1]);
//   return { month: Number(month), year: Number(year) };
// };

// export const convertExpirationDateToString = (
//   exp_month: Number,
//   exp_year: Number
// ) => {
//   const month = exp_month > 9 ? exp_month : `0${exp_month}`;
//   const year = exp_year.toString().substr(2);
//   return `${month}/${year}`;
// };

// export const maskCardNumber = (last4: Number) => {
//   return `${"•".repeat(12)}${last4}`;
// };

// export const maskCVC = (cardBrand: string) => {
//   const isAmericanexpress = cardBrand.toLowerCase() === "amex";
//   const digits = isAmericanexpress ? 4 : 3;
//   return "•".repeat(digits);
// };
