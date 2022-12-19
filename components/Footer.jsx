import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import FooterModel from "./FooterModal";
import Image from "next/image";
import { useTokens } from "../components/context/TokensContext";
import { CustomReactMarkdown } from "./CustomReactMarkdown";

const Footer = ({ isUpsell = false }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [type, setType] = useState("");

  const tokens = useTokens();

  return (
    <>
      {type === "termsandConditions" ? (
        <FooterModel
          title={"Terms and Conditions "}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        >
          <CustomReactMarkdown>
            {tokens?.terms_and_conditions || ""}
          </CustomReactMarkdown>
        </FooterModel>
      ) : type === "contactUs" ? (
        <FooterModel
          title={"Contact"}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        >
          <CustomReactMarkdown>{tokens?.contact_us || ""}</CustomReactMarkdown>
        </FooterModel>
      ) : (
        <FooterModel
          title={"Privacy policy"}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        >
          <CustomReactMarkdown>
            {tokens?.privacy_policy || ""}
          </CustomReactMarkdown>
        </FooterModel>
      )}

      <div className="FooterProduct_V1_footer__4soA5">
        <div className="contentWrap">
          <div className="frt-txt">
            <span
              style={{
                cursor: "pointer",
              }}
            >
              <a
                style={{
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setType("termsandConditions");
                  onOpen();
                }}
              >
                Terms &amp; Conditions{" "}
              </a>{" "}
              /
            </span>
            <div>
              <a
                style={{
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setType("privacyPolicy");
                  onOpen();
                }}
              >
                Privacy Policy
              </a>{" "}
              /
            </div>
            <div>
              <a
                style={{
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setType("contactUs");
                  onOpen();
                }}
              >
                Contact Us
              </a>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
              dangerouslySetInnerHTML={{
                __html: `2022 Copyright &nbsp;  ${
                  tokens?.companyName || "AimFit Smart Watch"
                } . All Rights Reserved`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
