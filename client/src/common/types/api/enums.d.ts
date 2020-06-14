export enum PlanPriceEnum {
  INDI = 'INDI',
  TEAM = 'TEAM',
}

export enum PlanStatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive', // Need to find this one - find in Stripe docs?
}

export enum UserInviteStatusEnum {
  ACTIVE = 'active', // attached by frontent if comes in undefined
  SUBSCRIPTION_EXPIRED = 'expired',
  INVITED = 'invited',
}

export enum UserRoleEnum {
  ADMIN = 'admin',
  MEMBER = 'member',
}

export enum ButtonColorThemes {
  ORANGE = 'ORANGE',
  BLUE = 'BLUE',
  DARK_BLUE = 'DARK_BLUE',
  INHERIT = 'INHERIT',
  WHITE = 'WHITE'
}

export enum ConfirmationOptions {
  CANCEL = 'CANCEL',
  AGREE = 'AGREE',
}

export enum ModalNotificationEnum {
  SIGNUP = 'SIGNUP',
  SIGNIN = 'SIGNIN',
  SUBSCRIPTION_INCOMPLETE = 'SUBSCRIPTION_INCOMPLETE',
  SUBSCRIPTION_EXPIRED = 'SUBSCRIPTION_EXPIRED',
  SUBSCRIPTION_PROCESSING = 'SUBSCRIPTION_PROCESSING',
  SUBSCRIPTION_SUCCESS = 'SUBSCRIPTION_SUCCESS',
  SUBSCRIPTION_FAILED = 'SUBSCRIPTION_FAILED',
}

export enum InviteErrorEnums {
  ERROR_EMAIL_ALREADY_REGISTERED = 'Email address already registered',
}

export enum LoginErrorEnums {
  ERROR_BAD_TOKEN = 'token does not meet maximum length of 6',
  ERROR_INVALID_TOKEN = 'Invalid token',
  ERROR_LOGIN_FAILED = 'Login failed',
  ERROR_UNABLE_TO_RETRIEVE_CUSTOMER = 'Unable to retrieve customer',
  ERROR_UNEXPECTED = 'An unexpected error occurred',
  ERROR_UNAUTHORIZED = 'Unauthorized',
  ERROR_LINK_NO_ACTIVE = 'This link is no longer active.',
}

export enum SubscriptionErrorEnums {
  ERROR_CUSTOMER_NOT_FOUND = 'Customer not found',
  ERROR_UNEXPECTED = 'An unexpected error occurred',
  INTERNAL_ERROR = 'Internal Error',
  NETWORK_ERROR = 'Network Error',
}

export enum CurrenciesEnum {
  EUR = `eur`,
  USD = `usd`,
}

export enum CreditCardTypeEnum {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
  DISCOVER = 'DISCOVER',
  AMERICAN_EXPRESS = 'AMERICAN-EXPRESS',
  DINERS_CLUB = 'DINERS-CLUB',
  JCB = 'JCB',
}

export enum PaymentMethodModalTypeEnum {
  LIST_METHODS = 'LIST_METHODS',
  EDIT_METHOD = 'EDIT_METHOD',
  ADD_METHOD = 'ADD_METHOD',
}

export enum CreditCardFormViewEnum {
  MODAL_VIEW = 'MODAL_VIEW',
  SUBSCRIBE_VIEW = 'SUBSCRIBE_VIEW',
}

export enum CreditCardFormFocusElementsEnum {
  CREDIT_NUMBER = 'CREDIT_NUMBER',
  CCV = 'CCV',
}

export enum PagesCollectionEnum {
  USERS_PAGES = 'usersPagination',
  INVITEES_PAGES = 'inviteesPagination',
}
