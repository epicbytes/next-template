/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface VerificationCodeWrapper {
  code: string;
}

export enum RegistrationVerificationStatus {
  UNVERIFIED = "UNVERIFIED",
  VERIFIED = "VERIFIED",
  FULLY_VERIFIED = "FULLY_VERIFIED",
}

export enum Language {
  EN = "EN",
  RU = "RU",
  FR = "FR",
  DE = "DE",
}

export interface LanguageWrapper {
  newLanguage: Language;
}

export enum FiatCurrency {
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
}

export interface FiatCurrencyWrapper {
  newPrimaryCurrency: FiatCurrency;
}

export enum CryptoCurrency {
  FIAT = "FIAT",
  BTC = "BTC",
  ETH = "ETH",
  LTC = "LTC",
  DAI = "DAI",
  USDT = "USDT",
  USDC = "USDC",
  ADA = "ADA",
  XRP = "XRP",
  DOGE = "DOGE",
  DOT = "DOT",
  UNI = "UNI",
  BCH = "BCH",
  SOL = "SOL",
  LINK = "LINK",
  XLM = "XLM",
  ETC = "ETC",
  VET = "VET",
  AAVE = "AAVE",
  EOS = "EOS",
  LUNA = "LUNA",
  CAKE = "CAKE",
  SHIB = "SHIB",
  ALGO = "ALGO",
  MKR = "MKR",
  ATOM = "ATOM",
  COMP = "COMP",
  AMP = "AMP",
  NEO = "NEO",
  AXS = "AXS",
  MIOTA = "MIOTA",
  DASH = "DASH",
  CHZ = "CHZ",
  XEM = "XEM",
  CEL = "CEL",
  ZEC = "ZEC",
  SUSHI = "SUSHI",
  NEXO = "NEXO",
  KCS = "KCS",
  QTUM = "QTUM",
  ZRX = "ZRX",
}

export interface CustomerExchangeOrderRequest {
  from: CryptoCurrency;
  to: CryptoCurrency;

  /** @min 0 */
  amount: number;
}

export interface CustomerExchangeOrderResponse {
  /** @format uuid */
  id: string;
  from: CryptoCurrency;
  to: CryptoCurrency;
  rate: number;
  amountMinimum: number;
  amountMaximum: number;

  /**
   * in seconds
   * @format int64
   * @min 0
   */
  timeout: number;
}

export interface PhoneValidateRequest {
  phone: string;
  countryCode: string;
}

export interface PhoneValidateResponse {
  status: boolean;
  reason?: string;
}

export interface CustomerRegistrationRequest {
  phone: string;
  email: string;
  password: string;
  referralCode?: string;
  acceptTerms: boolean;
}

export interface CardOrderRequest {
  type: CardType;
  name: string;
  country: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  phoneNumber: string;
}

export enum CardType {
  VIRTUAL_DEBIT = "VIRTUAL_DEBIT",
  PHYSICAL_DEBIT = "PHYSICAL_DEBIT",
}

export interface Card {
  /** @format uuid */
  id: string;
  type: CardType;
  status: "BLOCKED" | "ACTIVE" | "ORDERED" | "DELIVERED" | "DENIED";
  panNumber?: string;
  availableBalance: CurrencyAmount;
}

export type Currency = (FiatCurrency | CryptoCurrency) & { name: string };

export interface CurrencyAmount {
  amount: number;
  currency: Currency;
}

export interface TickerNews {
  title: string;

  /** @format url */
  url: string;
}

export interface TickerQuote {
  currency: CryptoCurrency;

  /** in customer primary fiat currency */
  price: number;

  /** in percentage */
  change: number;
}

export interface TickerResponse {
  quotes: TickerQuote[];
  news: TickerNews[];
}

export interface CustomerRegistrationConstrains {
  phoneRegexp: string;
  phoneHint: string;
  passwordRegexp: string;
  passwordHint: string;
}

export enum CustomerLevel {
  BASIC = "BASIC",
  STANDARD = "STANDARD",
  PREMIUM = "PREMIUM",
  UNLIMITED = "UNLIMITED",
}

export interface CustomerProfile {
  /**
   * @format int64
   * @min 0
   */
  customerId: number;
  displayName: string;

  /** @format email */
  primaryEmail: string;
  primaryFiatCurrency: FiatCurrency;
  theme: UserTheme;
  language: Language;
  level: CustomerLevel;
  contacts?: Record<string, string>;
}

export interface UserTheme {
  light: string;
  dark: string;
  autoSwitch: boolean;
}

export interface CustomerWallet {
  /** @format uuid */
  walletId: string;
  currency: CryptoCurrency;
  locked: boolean;
  stub?: boolean;
  icon?: string;
  address?: string;
  availableBalance: number;
  availableBalanceInDefaultCurrency: number;
  availableBalanceInBTC: number;
}

export interface ExchangeRate {
  base: Currency;
  counter: Currency;
  rate: number;
}

export interface Pageable {
  /** @format int32 */
  page: number;

  /** @format int32 */
  size: number;
}

export interface WalletHistoryOperation {
  status: WalletOperationStatus;
  type: WalletOperationType;

  /** @format date-time */
  date: string;
  txId?: string;
  details: WalletHistoryOperationDetails;
}

export type WalletHistoryOperationDetails =
  | WalletHistoryOperationExchangeDetails
  | WalletHistoryOperationReceiveWalletInternalDetails;

export interface WalletHistoryOperationExchangeDetails {
  from: Currency;
  to: Currency;
  fromAmount: number;
  toAmount: number;
  rate: ExchangeRate;
}

export interface WalletHistoryOperationList {
  /** @format uuid */
  walletId: string;
  items: WalletHistoryOperation[];
  page: Pageable;

  /** @format int64 */
  totalItems: number;

  /** @format int32 */
  totalPages: number;
}

export interface WalletHistoryOperationReceiveWalletInternalDetails {
  fromCustomerName: string;
  fromAddress: string;
  amount: number;
}

export enum WalletOperationStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  CANCELED = "CANCELED",
}

export enum WalletOperationType {
  RECEIVE_WALLET_INTERNAL = "RECEIVE_WALLET_INTERNAL",
  RECEIVE_WALLET_EXTERNAL = "RECEIVE_WALLET_EXTERNAL",
  EXCHANGE = "EXCHANGE",
}

export interface CryptoExchangePair {
  from: CryptoCurrency;
  to: CryptoCurrency;
  rate: number;
  amountMinimum: number;
  amountMaximum: number;

  /**
   * in seconds
   * @format int64
   * @min 0
   */
  timeout: number;
}

export interface CustomerExchangeRates {
  pairs: CryptoExchangePair[];
}

export interface CryptoCurrencyAmount {
  amount: number;
  currency: CryptoCurrency;
}

export interface CustomerBalance {
  totalInFiat: FiatCurrencyAmount;
  crypto: CryptoCurrencyAmount;
  fiat: FiatCurrencyAmount;
  card: FiatCurrencyAmount;
}

export interface FiatCurrencyAmount {
  amount: number;
  currency: FiatCurrency;
}

export interface Country {
  iso2?: string;
  iso3: string;
  title: string;
}

export interface CountryList {
  currentCountry: Country;
  available: Country[];
  forbidden: Country[];
  highRisk: Country[];
}

export interface CardList {
  items: Card[];
  page: Pageable;

  /** @format int64 */
  totalItems: number;

  /** @format int32 */
  totalPages: number;
}

export interface WalletHistoryParams {
  /** @format int32 */
  page?: number;

  /** @format int32 */
  size?: number;

  /** @format uuid */
  walletId: string;
}

export interface ListParams {
  /** @format int32 */
  page?: number;

  /** @format int32 */
  size?: number;
}

export interface LoginCreatePayload {
  username?: string;
  password?: string;
}

export namespace SecurityOperation {
  /**
   * No description
   * @tags Security operation
   * @name VerifyPhone
   * @request PUT:/register/{id}/verify/phone
   * @response `200` `RegistrationVerificationStatus` OK
   * @response `303` `RegistrationVerificationStatus` Client registration completed successfully
   * @response `400` `RegistrationVerificationStatus` Invalid verification code entered
   */
  export namespace VerifyPhone {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = VerificationCodeWrapper;
    export type RequestHeaders = {};
    export type ResponseBody = RegistrationVerificationStatus;
  }
  /**
   * No description
   * @tags Security operation
   * @name VerifyEmail
   * @request PUT:/register/{id}/verify/email
   * @response `200` `RegistrationVerificationStatus` OK
   * @response `303` `RegistrationVerificationStatus` Client registration completed successfully
   * @response `400` `RegistrationVerificationStatus` Invalid verification code entered
   */
  export namespace VerifyEmail {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = VerificationCodeWrapper;
    export type RequestHeaders = {};
    export type ResponseBody = RegistrationVerificationStatus;
  }
  /**
   * No description
   * @tags Security operation
   * @name RegisterConstraints
   * @request GET:/register
   * @response `200` `CustomerRegistrationConstrains` OK
   */
  export namespace RegisterConstraints {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CustomerRegistrationConstrains;
  }
  /**
   * No description
   * @tags Security operation
   * @name Register
   * @request POST:/register
   * @response `200` `string` OK
   */
  export namespace Register {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerRegistrationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @tags Security operation
   * @name Countries
   * @request GET:/countries
   * @response `200` `CountryList` OK
   */
  export namespace Countries {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CountryList;
  }
  /**
   * No description
   * @tags Security operation
   * @name LoginCreate
   * @request POST:/login
   * @response `200` `{ refreshToken?: string }`
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  export namespace LoginCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = { refreshToken?: string };
  }
  /**
   * No description
   * @tags Security operation
   * @name LogoutList
   * @request GET:/logout
   * @secure
   * @response `200` `void` OK
   */
  export namespace LogoutList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace CustomerInformation {
  /**
   * No description
   * @tags Customer information
   * @name ChangeLanguage
   * @request PUT:/customer/profile/change/language
   * @secure
   * @response `200` `boolean` OK
   */
  export namespace ChangeLanguage {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LanguageWrapper;
    export type RequestHeaders = {};
    export type ResponseBody = boolean;
  }
  /**
   * No description
   * @tags Customer information
   * @name ChangeFiatCurrency
   * @request PUT:/customer/profile/change/fiat-currency
   * @secure
   * @response `200` `boolean` OK
   */
  export namespace ChangeFiatCurrency {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FiatCurrencyWrapper;
    export type RequestHeaders = {};
    export type ResponseBody = boolean;
  }
  /**
   * No description
   * @tags Customer information
   * @name Profile
   * @request GET:/customer
   * @secure
   * @response `200` `CustomerProfile` OK
   */
  export namespace Profile {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CustomerProfile;
  }
  /**
   * No description
   * @tags Customer information
   * @name Wallets
   * @request GET:/customer/wallets
   * @secure
   * @response `200` `(CustomerWallet)[]` OK
   */
  export namespace Wallets {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CustomerWallet[];
  }
  /**
   * No description
   * @tags Customer information
   * @name Wallet
   * @request GET:/customer/wallet/{walletId}
   * @secure
   * @response `200` `CustomerWallet` OK
   */
  export namespace Wallet {
    export type RequestParams = { walletId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CustomerWallet;
  }
  /**
   * No description
   * @tags Customer information
   * @name WalletHistory
   * @request GET:/customer/wallet/{walletId}/history
   * @secure
   * @response `200` `WalletHistoryOperationList` OK
   */
  export namespace WalletHistory {
    export type RequestParams = { walletId: string };
    export type RequestQuery = { page?: number; size?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletHistoryOperationList;
  }
  /**
   * No description
   * @tags Customer information
   * @name Balance
   * @request GET:/customer/balance
   * @secure
   * @response `200` `CustomerBalance` OK
   */
  export namespace Balance {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CustomerBalance;
  }
}

export namespace ExchangeOperations {
  /**
   * No description
   * @tags exchange operations
   * @name UpdateDraft
   * @request PUT:/customer/exchange/order/{orderId}
   * @secure
   * @response `200` `CustomerExchangeOrderResponse` OK
   */
  export namespace UpdateDraft {
    export type RequestParams = { orderId: string };
    export type RequestQuery = {};
    export type RequestBody = CustomerExchangeOrderRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CustomerExchangeOrderResponse;
  }
  /**
   * No description
   * @tags exchange operations
   * @name Prepare
   * @request PUT:/customer/exchange/order/{orderId}/prepare
   * @secure
   * @response `200` `CustomerExchangeOrderResponse` OK
   */
  export namespace Prepare {
    export type RequestParams = { orderId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CustomerExchangeOrderResponse;
  }
  /**
   * No description
   * @tags exchange operations
   * @name Confirm
   * @request PUT:/customer/exchange/order/{orderId}/confirm
   * @secure
   * @response `200` `boolean` OK
   */
  export namespace Confirm {
    export type RequestParams = { orderId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = boolean;
  }
  /**
   * No description
   * @tags exchange operations
   * @name CreateDraft
   * @request POST:/customer/exchange/order/draft
   * @secure
   * @response `200` `CustomerExchangeOrderResponse` OK
   */
  export namespace CreateDraft {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerExchangeOrderRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CustomerExchangeOrderResponse;
  }
  /**
   * No description
   * @tags exchange operations
   * @name Pairs
   * @request GET:/customer/exchange/pairs
   * @secure
   * @response `200` `CustomerExchangeRates` OK
   */
  export namespace Pairs {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CustomerExchangeRates;
  }
  /**
   * No description
   * @tags exchange operations
   * @name Pair
   * @request GET:/customer/exchange/pair/{base}/{counter}
   * @secure
   * @response `200` `CryptoExchangePair` OK
   */
  export namespace Pair {
    export type RequestParams = { base: CryptoCurrency; counter: CryptoCurrency };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CryptoExchangePair;
  }
}

export namespace Validators {
  /**
   * No description
   * @tags Validators
   * @name Phone
   * @request POST:/validators/phone
   * @response `200` `PhoneValidateResponse` OK
   */
  export namespace Phone {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PhoneValidateRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PhoneValidateResponse;
  }
}

export namespace CardOperations {
  /**
   * No description
   * @tags Card operations
   * @name RequestNew
   * @request POST:/card/order
   * @secure
   * @response `200` `Card` OK
   */
  export namespace RequestNew {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CardOrderRequest;
    export type RequestHeaders = {};
    export type ResponseBody = Card;
  }
  /**
   * No description
   * @tags Card operations
   * @name List
   * @request GET:/cards
   * @secure
   * @response `200` `CardList` OK
   */
  export namespace List {
    export type RequestParams = {};
    export type RequestQuery = { page?: number; size?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CardList;
  }
}

export namespace Tickers {
  /**
   * No description
   * @tags tickers
   * @name Tickers
   * @request GET:/tickers
   * @secure
   * @response `200` `TickerResponse` OK
   */
  export namespace Tickers {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TickerResponse;
  }
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "https://customer-service.dev2.fiatum.tech",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title OpenAPI definition
 * @version 0.1 (build 2)
 * @baseUrl https://customer-service.dev2.fiatum.tech
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  securityOperation = {
    /**
     * No description
     *
     * @tags Security operation
     * @name VerifyPhone
     * @request PUT:/register/{id}/verify/phone
     * @response `200` `RegistrationVerificationStatus` OK
     * @response `303` `RegistrationVerificationStatus` Client registration completed successfully
     * @response `400` `RegistrationVerificationStatus` Invalid verification code entered
     */
    verifyPhone: (id: string, data: VerificationCodeWrapper, params: RequestParams = {}) =>
      this.request<RegistrationVerificationStatus, RegistrationVerificationStatus>({
        path: `/register/${id}/verify/phone`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Security operation
     * @name VerifyEmail
     * @request PUT:/register/{id}/verify/email
     * @response `200` `RegistrationVerificationStatus` OK
     * @response `303` `RegistrationVerificationStatus` Client registration completed successfully
     * @response `400` `RegistrationVerificationStatus` Invalid verification code entered
     */
    verifyEmail: (id: string, data: VerificationCodeWrapper, params: RequestParams = {}) =>
      this.request<RegistrationVerificationStatus, RegistrationVerificationStatus>({
        path: `/register/${id}/verify/email`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Security operation
     * @name RegisterConstraints
     * @request GET:/register
     * @response `200` `CustomerRegistrationConstrains` OK
     */
    registerConstraints: (params: RequestParams = {}) =>
      this.request<CustomerRegistrationConstrains, any>({
        path: `/register`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Security operation
     * @name Register
     * @request POST:/register
     * @response `200` `string` OK
     */
    register: (data: CustomerRegistrationRequest, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Security operation
     * @name Countries
     * @request GET:/countries
     * @response `200` `CountryList` OK
     */
    countries: (params: RequestParams = {}) =>
      this.request<CountryList, any>({
        path: `/countries`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Security operation
     * @name LoginCreate
     * @request POST:/login
     * @response `200` `{ refreshToken?: string }`
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    loginCreate: (data: LoginCreatePayload, params: RequestParams = {}) =>
      this.request<{ refreshToken?: string }, void>({
        path: `/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Security operation
     * @name LogoutList
     * @request GET:/logout
     * @secure
     * @response `200` `void` OK
     */
    logoutList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/logout`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  customerInformation = {
    /**
     * No description
     *
     * @tags Customer information
     * @name ChangeLanguage
     * @request PUT:/customer/profile/change/language
     * @secure
     * @response `200` `boolean` OK
     */
    changeLanguage: (data: LanguageWrapper, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/customer/profile/change/language`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer information
     * @name ChangeFiatCurrency
     * @request PUT:/customer/profile/change/fiat-currency
     * @secure
     * @response `200` `boolean` OK
     */
    changeFiatCurrency: (data: FiatCurrencyWrapper, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/customer/profile/change/fiat-currency`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer information
     * @name Profile
     * @request GET:/customer
     * @secure
     * @response `200` `CustomerProfile` OK
     */
    profile: (params: RequestParams = {}) =>
      this.request<CustomerProfile, any>({
        path: `/customer`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer information
     * @name Wallets
     * @request GET:/customer/wallets
     * @secure
     * @response `200` `(CustomerWallet)[]` OK
     */
    wallets: (params: RequestParams = {}) =>
      this.request<CustomerWallet[], any>({
        path: `/customer/wallets`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer information
     * @name Wallet
     * @request GET:/customer/wallet/{walletId}
     * @secure
     * @response `200` `CustomerWallet` OK
     */
    wallet: (walletId: string, params: RequestParams = {}) =>
      this.request<CustomerWallet, any>({
        path: `/customer/wallet/${walletId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer information
     * @name WalletHistory
     * @request GET:/customer/wallet/{walletId}/history
     * @secure
     * @response `200` `WalletHistoryOperationList` OK
     */
    walletHistory: ({ walletId, ...query }: WalletHistoryParams, params: RequestParams = {}) =>
      this.request<WalletHistoryOperationList, any>({
        path: `/customer/wallet/${walletId}/history`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer information
     * @name Balance
     * @request GET:/customer/balance
     * @secure
     * @response `200` `CustomerBalance` OK
     */
    balance: (params: RequestParams = {}) =>
      this.request<CustomerBalance, any>({
        path: `/customer/balance`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  exchangeOperations = {
    /**
     * No description
     *
     * @tags exchange operations
     * @name UpdateDraft
     * @request PUT:/customer/exchange/order/{orderId}
     * @secure
     * @response `200` `CustomerExchangeOrderResponse` OK
     */
    updateDraft: (orderId: string, data: CustomerExchangeOrderRequest, params: RequestParams = {}) =>
      this.request<CustomerExchangeOrderResponse, any>({
        path: `/customer/exchange/order/${orderId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags exchange operations
     * @name Prepare
     * @request PUT:/customer/exchange/order/{orderId}/prepare
     * @secure
     * @response `200` `CustomerExchangeOrderResponse` OK
     */
    prepare: (orderId: string, params: RequestParams = {}) =>
      this.request<CustomerExchangeOrderResponse, any>({
        path: `/customer/exchange/order/${orderId}/prepare`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags exchange operations
     * @name Confirm
     * @request PUT:/customer/exchange/order/{orderId}/confirm
     * @secure
     * @response `200` `boolean` OK
     */
    confirm: (orderId: string, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/customer/exchange/order/${orderId}/confirm`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags exchange operations
     * @name CreateDraft
     * @request POST:/customer/exchange/order/draft
     * @secure
     * @response `200` `CustomerExchangeOrderResponse` OK
     */
    createDraft: (data: CustomerExchangeOrderRequest, params: RequestParams = {}) =>
      this.request<CustomerExchangeOrderResponse, any>({
        path: `/customer/exchange/order/draft`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags exchange operations
     * @name Pairs
     * @request GET:/customer/exchange/pairs
     * @secure
     * @response `200` `CustomerExchangeRates` OK
     */
    pairs: (params: RequestParams = {}) =>
      this.request<CustomerExchangeRates, any>({
        path: `/customer/exchange/pairs`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags exchange operations
     * @name Pair
     * @request GET:/customer/exchange/pair/{base}/{counter}
     * @secure
     * @response `200` `CryptoExchangePair` OK
     */
    pair: (base: CryptoCurrency, counter: CryptoCurrency, params: RequestParams = {}) =>
      this.request<CryptoExchangePair, any>({
        path: `/customer/exchange/pair/${base}/${counter}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  validators = {
    /**
     * No description
     *
     * @tags Validators
     * @name Phone
     * @request POST:/validators/phone
     * @response `200` `PhoneValidateResponse` OK
     */
    phone: (data: PhoneValidateRequest, params: RequestParams = {}) =>
      this.request<PhoneValidateResponse, any>({
        path: `/validators/phone`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  cardOperations = {
    /**
     * No description
     *
     * @tags Card operations
     * @name RequestNew
     * @request POST:/card/order
     * @secure
     * @response `200` `Card` OK
     */
    requestNew: (data: CardOrderRequest, params: RequestParams = {}) =>
      this.request<Card, any>({
        path: `/card/order`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card operations
     * @name List
     * @request GET:/cards
     * @secure
     * @response `200` `CardList` OK
     */
    list: (query: ListParams, params: RequestParams = {}) =>
      this.request<CardList, any>({
        path: `/cards`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  tickers = {
    /**
     * No description
     *
     * @tags tickers
     * @name Tickers
     * @request GET:/tickers
     * @secure
     * @response `200` `TickerResponse` OK
     */
    tickers: (params: RequestParams = {}) =>
      this.request<TickerResponse, any>({
        path: `/tickers`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}
