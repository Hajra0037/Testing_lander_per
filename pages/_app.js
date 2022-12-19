import React, { useEffect, useState } from "react";
import "../styles/home.scss";
import "../styles/form.scss";
import "bootstrap/dist/css/bootstrap.css";
import { initialize_SF_Konnektive_NextJS_SDK } from "konnektive-sdk-nextjs";
import { getDisplayDetails } from "konnektive-sdk-nextjs/dist/api/project";
import { TokensProvider } from "../components/context/TokensContext";

export default function App({ Component, pageProps }) {
  const [tokens, setTokens] = useState();

  const getData = async () => {
    const displayData = await getDisplayDetails();
    setTokens(displayData?.tokens);
  };

  useEffect(() => {
    initialize_SF_Konnektive_NextJS_SDK({
      projectApiKey: process.env.NEXT_PUBLIC_PROJECT_API_KEY,
      apiURL: process.env.NEXT_PUBLIC_API_URL,
      encryptionKey: process.env.NEXT_PUBLIC_ENC_KEY,
      googleMapApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
      threeDSApiKey: process.env.NEXT_PUBLIC_3DS_API_KEY,
      threeDSApiURL: process.env.NEXT_PUBLIC_3DS_URL,

      isInitial3dsEnabled: false,
      isRebill3dsEnabled: true,
    });
    getData();
  }, []);
  return (
    <TokensProvider tokens={tokens}>
      <Component {...pageProps} />
    </TokensProvider>
  );
}
