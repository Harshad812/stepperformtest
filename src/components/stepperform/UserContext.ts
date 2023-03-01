import { createContext } from "react";

export interface UserInformationType {
  firstName: string;
  middleName: string;
  lastName: string;
  mobile: string;
  email: string;
  birthday: string;
  age: string;
  bloodGroup: string;
  height: string;
  weight: string;
  gender: string;
  maritalStatus: string;
}

export interface AddressDetailsType {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface UserType {
  userDetails?: UserInformationType;
  addressDetails?: AddressDetailsType;
}

export interface UserContextType {
  user: UserType | undefined;
  setUser: (user: any) => void;
  handleNext: () => void;
  handleBack: () => void;
  handleSkip: () => void;
  handleReset: () => void;
}

export const UserContext = createContext<Partial<UserContextType>>({});
