export type User = {
  email: string;
  username: string;
  uid: string;
};

export type UserData = {
  displayName: string;
  email: string;
  uid: string;
  apiKey?: string;
  createdAt?: string;
  emailVerified?: boolean;
  isAnonymous?: boolean;
  lastLoginAt?: string;
  providerData?: object;
  stsTokenManager?: object;
};
