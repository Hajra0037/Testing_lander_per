import React, { useState } from "react";
import { getDisplayDetails } from "konnektive-sdk-nextjs/dist/api/project";

const TokensContext = React.createContext();

export const TokensProvider = ({ children }) => {
  const [tokens, setTokens] = useState();
  console.log("tokens", tokens);

  const getData = async () => {
    const displayData = await getDisplayDetails();
    setTokens(displayData?.tokens);
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <TokensContext.Provider value={tokens}>{children}</TokensContext.Provider>
  );
};

export const useTokens = () => React.useContext(TokensContext);
