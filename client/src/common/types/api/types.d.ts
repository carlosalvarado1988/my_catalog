import {
  CurrenciesEnum,
  PlanPriceEnum,
  PlanStatusEnum,
  UserInviteStatusEnum,
  UserRoleEnum,
  ModalNotificationEnum,
  PaymentMethodModalTypeEnum,
  PagesCollectionEnum,
  ActionStageEnum,
  PaymentMethodEnum,
  DeliveryTypeEnum,
} from "./enums.d";

/**
 * General
 */

// types might change
type Timestamp = string; // format "2020-06-08 20:02:32"
type Currency = number;

// DATABASE DATA MODELS
export type Image = {
  product_image_id: number;
  url: string;
  product_id: number;
};
export type Product = {
  product_id: number;
  product_name: string;
  slug: string;
  price: number;
  stock: number;
  location: string[];
  description: string;
  product_category_id: number;
  images: Image[];
};
export type Category = {
  product_category_id: number;
  name: string;
  slug: string;
  description: string;
  products_count: number;
  products: Product[];
};

export type DayAvailability = {
  [day: string]: {
    from: string;
    to: string;
  };
};
export type PickupDetails = {
  pickup_id: number;
  address: string;
  additional_reference?: string;
  pickup_availability: DayAvailability;
};

export type PickupSettings = {
  [place: string]: PickupDetails;
};

export type DeliverySettings = {
  delivery_zones: DeliveryZone[];
  delivery_cost: number;
};
export type DeliveryZone = {};
export type BusinessSettings = {
  business_setting_id: number;
  pickup_settings: PickupSettings;
  delivery_settings: DeliverySettings;
  payment_methods_available: PaymentMethodEnum[];
  logo: string;
};
export type Business = {
  business_account_id: number;
  name: string;
  slug: string;
  address: string;
  additional_reference: string;
  phone: string;
  description: string;
  date_created: Timestamp;
  date_modified: Timestamp | null;
  categories?: Category[];
  business_settings?: BusinessSettings;
};
export type OrderItem = {
  product_id: number;
  category_slug: string;
  category_name: string;
  product_url: string;
  product_name: string;
  price: number;
  count: number;
  total: number;
};
export type ShoppingCart = {
  business_id: number | null;
  amount: number;
  items?: OrderItem[];
};
export type NavigationTrack = {
  category_slug: string | null;
  product_id: string | null;
};
export type DeliveryOrder = {
  business_id: number | null;
  delivery_type: DeliveryTypeEnum;
  date: string | null;
  time: string | null;
  address: string;
  additional_reference: string;
  customer: string;
  phone: string;
  items_cost: number;
  delivery_type_cost: number;
  payment_method: PaymentMethodEnum;
  total_pay: number;
};
// UI DATA MODELS
export type Token = { jwt: string; expires: Timestamp };
type Pagination = {
  pages?: number; // Total number of pages available
  page?: number; // The page number requested
  returned: number; // Number of items returned in current page
  offset: number; // unique id identifier to split next page
  limit: number; // Max number of items requested (50 is max)
  total: number; // Total number of items available
};
interface Meta {
  pagination?: Pagination | undefined;
  token?: Token | undefined;
}

interface ApiResponse {
  message?: string; // A human readable message for errors or successes (informational)
  status: number; // The response status (ie 200)
  data?: any; //Customer | User[] | PaymentMethod | PaymentMethod[];
  meta?: Meta;
}
interface ResponsePayload {
  business?: Customer;
  message: string; // A human readable message for errors or successes (informational) to be displayed to the customer.
}

export type Notification = {
  show: boolean;
  closeUntilResponse?: boolean;
  stage: ActionStageEnum;
  message: string;
  description?: string;
};

// Shopping Cart //

export type AddItemShoppingCart = {
  product: Product;
  qty: number;
};
// API PAYLOADS //
/**
 * Business
 */
export type GetBusinessPayload = {
  slug;
};

// response into sagas
interface GetInviteesApiResponse extends ApiResponse {
  data: Business;
}
export type ResponseGetInvitees = GetInviteesApiResponse;

// response into redux
interface GetInviteesResponsePayload extends ResponsePayload {
  subscription_id: string;
  users: User[];
  pagination: Pagination | undefined;
}
export type ResponseGetInviteesPayload = GetInviteesResponsePayload;

/**
 * Login
 */
interface LoginApiResponseMeta extends Meta {
  token: Token;
}
export type LoginMeta = LoginApiResponseMeta;

interface LoginApiResponse extends ApiResponse {
  data: Customer;
  meta: LoginMeta;
}
export type ResponseLogin = LoginApiResponse;

export type ResponseLoginPayload = ResponsePayload;

export type SubmitLoginPayload = {
  email?: string; // The customer's email (from the magiclink)
  token?: string; // The unique token from the magiclink
  authToken: string;
};

/**
 * Notifications
 */
export type SubmitOpenModal = {
  type: ModalNotificationEnum; // The type of modal notification
  persist?: boolean; // true if the modal should NOT close when background is clicked or esc is pressed
};

/**
 * SignIn
 */
export type ResponseSignInPayload = ResponsePayload;

export type ResponseSignIn = ApiResponse;

export type SubmitSignInPayload = {
  email: string;
  modalType?: ModalNotificationEnum;
};

/**
 * SignOut
 */
export type SubmitSignOutPayload = { show_message?: boolean } | void;

export type ResponseSignOutPayload = boolean;

/**
 * Payment
 */

export type PaymentMethod = {
  id: string; // The unique identifier for this payment method.
  default: boolean; // true if this is the default card
  card: CreditCard; // The credit card info (safe to display)
  billing_details: BillingDetails;
  customer_id?: string; // The unique identifier for customer
  expired?: boolean; // true or false, based on CreditCard exp_month and exp_year
};

export type CreditCard = {
  brand: string; // The type of payment (VISA, MASTERCARD)
  country: string; // The country the card originates in.
  exp_month: number; // The two digit month that the card expires in.
  exp_year: number; // The four digit year the card expires in.
  last4: string; // The last four digits of the card as an identifier.
};

export type BillingDetails = {
  address: BillingAddress;
  email?: string; // The customer's email address
};

export type BillingAddress = {
  postal_code: string; // The customer's postal code (zipcode)
};

/**
 * Payment Method
 */

export type SubmitOrderPayload = {
  default: boolean; // true if this is the default card
  card: CreditCardInfo; // The credit card info (safe to display)
  billing_details: BillingDetails;
};

export type EditPaymentMethodPayload = {
  id: string; // The unique identifier for this payment method.
  default: boolean; // true if this is the default card
  card: CreditCardInfo; // The credit card info (safe to display)
  billing_details: BillingDetails;
};

export interface PaymentMethodResponsePayload extends ResponsePayload {
  payment_method: PaymentMethod;
}
export type ResponsePaymentMethodPayload = PaymentMethodResponsePayload;

interface PaymentMethodResponse extends ApiResponse {
  data: PaymentMethod;
}
export type ResponsePaymentMethod = PaymentMethodResponse;

interface PaymentMethodsResponsePayload extends ResponsePayload {
  payment_methods: PaymentMethod[];
}
export type ResponseOrderPayload = PaymentMethodsResponsePayload;
interface PaymentMethodsResponse extends ApiResponse {
  data: PaymentMethod[];
}
export type ResponsePaymentMethods = PaymentMethodsResponse;

/**
 * Account
 */

export type Account = {
  account_name?: string; // The customer's name
  currency?: CurrenciesEnum; // The currency type for the customer (ie USD)
  email?: string; // The customer's email address
  nickname?: string; // A nickname for the customer
  payment_methods?: PaymentMethod[]; // Array of customer's payment info
  role: UserRoleEnum; // The customer's role in their subscriptions
  subscriptions: Subscription[]; // A list of the customer's subscriptions
};

/**
 * Subscription
 */

export type GetSubscriptionPayload = {
  buildPagination: boolean;
};
export type ResponseSubscriptionPayload = ResponsePayload;

interface SubscriptionApiResponse extends ApiResponse {
  data: Customer;
}
export type ResponseSubscription = SubscriptionApiResponse;

export type SubmitSubscriptionPayload = {
  quantity: number; // The number of licenses in this subscription
  postal_code: string; // The customer's postal code (zipcode)
  credit_card_info: CreditCardInfo;
};

export type ResponseGetSubscription = SubscriptionApiResponse;

// Primary Change
// export type ResponsePrimaryChangePayload = ResponsePayload

// export type ResponsePrimaryChange = LambdaSubscriptionResponse

// export type SubmitPrimaryChangePayload = {
//   primary_user_email: string
//   subscription_id: string
// }

// Role Change
// export type ResponseRoleChangePayload = ResponsePayload

// export type ResponseRoleChange = LambdaSubscriptionResponse

// export type SubmitRoleChangePayload = {
//   role: UserRoleEnum
//   subscription_id: string
//   user_email: string
// }

/**
 * User
 */

// Delete user
interface DeleteUserResponsePayload extends ResponsePayload {
  subscription_id: string;
  users: User[];
}
export type ResponseDeleteUserPayload = DeleteUserResponsePayload;

export type ResponseDeleteUser = ApiResponse;

export type DeleteUserPayload = {
  email: string;
  subscriptionId: string;
  userId: number;
  quantity: number;
};

// Get users
interface GetUsersResponsePayload extends ResponsePayload {
  subscription_id: string;
  users: User[];
  pagination: Pagination | undefined;
}
export type ResponseGetUsersPayload = GetUsersResponsePayload;

interface GetUsersApiResponse extends ApiResponse {
  data: User[];
}
export type ResponseGetUsers = GetUsersApiResponse;

export type GetUsersPayload = {
  subscription_id: string;
  pagination: PaginationPayload;
};

export type SetNewIndexPagePayload = {
  subscription_id: string;
  collection: PagesCollectionEnum;
  new_preloaded_index_page: number;
};

export type Pages = {
  current_page_index: number;
  total: number;
  pages: Page[];
  total_pages: number;
  limit: number;
};

export type Page = {
  cursor: number;
  returned: number;
  users: User[];
  dirty: boolean;
};

export type CreditCardInfo = {
  number?: string; // A valid credit card number // RETURN REQUIRED
  exp_month?: number; // The expiration month of the credit card (two digits)
  exp_year?: number; // The expiration year of the credit card (four digits)
  expiry?: string; // The expiration of the credit card (ie 12/70)
  cvc?: string; // The cvc code of the credit card // RETURN REQUIRED
};
