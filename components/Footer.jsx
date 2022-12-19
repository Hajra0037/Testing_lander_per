import React, { useState } from "react";
import FooterModel from "./FooterModal";

import { useTokens } from "../components/context/TokensContext";

const Footer = ({ isUpsell = false }) => {
  const [type, setType] = useState("");
  const [isOpen, setOpen] = useState(false);

  const tokens = useTokens();

  return (
    <>
      {type === "termsandConditions" ? (
        <FooterModel
          title={"Terms and Conditions "}
          isOpen={isOpen}
          onOpen={() => {
            setOpen(!isOpen);
          }}
          onClose={() => {
            setOpen(!isOpen);
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: tokens?.terms_and_conditions || "terms and cond",
            }}
          ></div>
        </FooterModel>
      ) : type === "contactUs" ? (
        <FooterModel
          title={"Contact"}
          isOpen={isOpen}
          onOpen={() => {
            setOpen(!isOpen);
          }}
          onClose={() => {
            setOpen(!isOpen);
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: tokens?.contact_us || " contact us",
            }}
          ></div>
        </FooterModel>
      ) : (
        <FooterModel
          title={"Privacy policy"}
          isOpen={isOpen}
          onOpen={() => {
            setOpen(!isOpen);
          }}
          onClose={() => {
            setOpen(!isOpen);
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: tokens?.privacy_policy || "privacy policy",
            }}
          ></div>
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
                  setOpen(!isOpen);
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
                  setOpen(!isOpen);
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
                  setOpen(!isOpen);
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
