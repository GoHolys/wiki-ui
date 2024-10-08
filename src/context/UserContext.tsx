import React, { createContext, useState, ReactNode } from "react";

interface UserInfo {
  email?: string;
  language?: string;
  subject?: string;
}

interface UserContextType {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

const defaultState: UserContextType = {
  userInfo: { email: "", language: "", subject: "" },
  setUserInfo: () => {},
};

export const UserContext = createContext<UserContextType>(defaultState);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
