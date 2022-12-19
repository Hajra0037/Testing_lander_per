import React from "react";

const TokensContext = React.createContext();

export const TokensProvider = ({ children, tokens }) => {
  return (
    <TokensContext.Provider value={tokens}>{children}</TokensContext.Provider>
  );
};

export const useTokens = () => React.useContext(TokensContext);
