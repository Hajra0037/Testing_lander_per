import React, { useState } from "react";
import Image from "next/image";
import moment from "moment/moment";
// import { CustomReactMarkdown } from "./CustomReactMarkdown";

// import FooterModel from "./FooterModal";
// import { useTokens } from "../context/TokensContext";
const PaymentInfo = () => {
  // let { register, setValue, setIsE_Shipping, isE_Shipping, submitHandler } =
  //   props;
  // const tokens = useTokens();
  const tokens = {};
  let date = new Date();

  const [type, setType] = useState("");
  return (
    <div
      id="kform_paySourceCard"
      className="info_section info_section1 lst-ckh"
    >
      {/* {type === "termsandConditions" && (
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
      )} */}
      {/* {type === "whatIsThis" && (
        <FooterModel
          title={"cvv"}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        >
          <CustomReactMarkdown>{tokens?.cvv || ""}</CustomReactMarkdown>
          <br />

          <Image
            width={400}
            height={200}
            alt="Easy Returns footer badge"
            src="/cvv.webp"
            placeholder="blur"
            blurDataURL="/cvv.webp"
          />
          <br />
          <div>
            A 3-digit number in reverse italics on the back of your credit card
          </div>
        </FooterModel>
      )} */}
      <div className="Form_V9_sectionHeader__9qBDc">
        <div className="Form_V9_step__YP0Sg">3</div>
        <div className="Form_V9_stepName__Tk75_">Payment Information</div>
      </div>

      <div id="kform_paySourceCard-2" className="row">
        <div id="igov53">
          <div id="i0vblr">
            <div id="kformPaySourceWrap" inputtype="radio"></div>
            <div id="kformNewPaymentType">
              <div className="col-sm-12">
                <div className="secured_logos1">
                  <Image
                    width={349}
                    height={74}
                    alt="Easy Returns footer badge"
                    src="/sp.webp"
                    placeholder="blur"
                    blurDataURL="/sp.webp"
                  />
                </div>
                <br />
                <div
                  className="div2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#fffa51",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    boxSizing: "border-box",
                    columnGap: "15px",
                    fontSize: "14px",
                    fontWeight: 400,
                    fontFamily: "sans-serif",
                    textAlign: "justify",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  <p>
                    <span
                      style={{
                        color: "red",
                        fontWeight: "900",
                      }}
                    >
                      GOOD NEWS:
                    </span>{" "}
                    Get an additional{" "}
                    <span
                      style={{
                        color: "#179B15",
                        fontWeight: "900",
                      }}
                    >
                      30%{" "}
                    </span>
                    discount on shipping when you check out with MasterCard!
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  className=""
                >
                  <Image
                    width={174}
                    height={65}
                    alt="Easy Returns footer badge"
                    src="/ms.webp"
                    placeholder="blur"
                    blurDataURL="/ms.webp"
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    <strong>Credit Card Number:</strong>
                  </label>
                  <input
                    type="tel"
                    name="creditCardNumber"
                    maxlength="16"
                    data-error-message="Please enter a valid credit card number!"
                    placeholder="Credit Card Number"
                    required={true}
                    pattern="^[0-9]{15,16}$"
                    className="required form-control"
                    data-threeds="pan"
                    // onKeyUp={(e) =>
                    //   setValue(
                    //     "cardNumber",
                    //     e.target.value.replace(/[^\d]/, "")
                    //   )
                    // }
                    // {...register("cardNumber")}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <label className="Form_V9_inputLabel__rrIQz">
                  <span className="Form_V9_inputLabelText__AhEkY">
                    Exp. Date:
                  </span>
                  <div className="Form_V9_twoFields__UL1Y7">
                    <select
                      name="card_month"
                      data-threeds="month"
                      className="Form_V9_dropdownField__zqVXX"
                      data-error-message="Please select a valid expiry month!"
                      // {...register("cardMonth")}
                      required={true}
                    >
                      <option value="" disabled="">
                        Month
                      </option>
                      <option value="01">(01) January</option>
                      <option value="02">(02) February</option>
                      <option value="03">(03) March</option>
                      <option value="04">(04) April</option>
                      <option value="05">(05) May</option>
                      <option value="06">(06) June</option>
                      <option value="07">(07) July</option>
                      <option value="08">(08) August</option>
                      <option value="09">(09) September</option>
                      <option value="10">(10) October</option>
                      <option value="11">(11) November</option>
                      <option value="12">(12) December</option>
                    </select>
                    <select
                      name="card_year"
                      className="Form_V9_dropdownField__zqVXX"
                      data-error-message="Please select a valid expiry year!"
                      data-threeds="year"
                      required={true}
                      // {...register("cardYear")}
                    >
                      <option value="" disabled="">
                        Year
                      </option>
                      <option value="22">2022</option>
                      <option value="23">2023</option>
                      <option value="24">2024</option>
                      <option value="25">2025</option>
                      <option value="26">2026</option>
                      <option value="27">2027</option>
                      <option value="28">2028</option>
                      <option value="29">2029</option>
                      <option value="30">2030</option>
                      <option value="31">2031</option>
                      <option value="32">2032</option>
                      <option value="33">2033</option>
                      <option value="34">2034</option>
                      <option value="35">2035</option>
                      <option value="36">2036</option>
                      <option value="37">2037</option>
                      <option value="38">2038</option>
                      <option value="39">2039</option>
                      <option value="40">2040</option>
                      <option value="41">2041</option>
                    </select>
                  </div>
                  <div
                    className="Form_V9_twoFields__UL1Y7"
                    style={{
                      display: "none",
                    }}
                  ></div>
                </label>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    <strong>CVV:</strong>
                  </label>
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="tel"
                        name="CVV"
                        placeholder="CVV"
                        data-validate="cvv"
                        maxlength="4"
                        data-error-message="Please enter a valid CVV!"
                        required={true}
                        // onKeyUp={(e) =>
                        //   setValue("cvv", e.target.value.replace(/[^\d]/, ""))
                        // }
                        // {...register("cvv")}
                        pattern="^[0-9]{3,4}$"
                        // onkeyup="this.value=this.value.replace(/[^\d]/,&#39;&#39;)"
                        className="required form-control neumeric"
                      />
                    </div>

                    <div className="col-sm-6">
                      <a
                        style={{
                          cursor: "pointer",
                        }}
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   setType("whatIsThis");
                        //   onOpen();
                        // }}
                        className="fancybox fancybox.iframe"
                        id="ic9vd9"
                      >
                        What is this?
                      </a>
                    </div>
                  </div>
                  <div id="ibco0k" className="text-center"></div>
                </div>
              </div>
              <div
              // style={{
              //   fontSize: 12,
              //   padding: "10px",
              //   marginTop: "10px",
              //   display: "flex",
              //   alignItems: "center",
              // }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    margin: "10px 0px",
                    textAlign: "center",
                  }}
                >
                  <span>
                    By Clicking Submit, I agree to the{" "}
                    <a
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   setType("termsandConditions");
                      //   onOpen();
                      // }}
                    >
                      terms and conditions
                    </a>{" "}
                    and warrant I have read them.
                  </span>
                </div>
              </div>{" "}
              <br />
              <div
                // onClick={() => submitHandler()}
                className="Form_V9_pulse__gpPSz"
              >
                <button
                  type="submit"
                  className="Checkout_V3_submitButton_v2__zuFJL"
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      "linear-gradient(180deg,#60ba0f 0,#4a8c0d)",
                  }}
                  id="submit-checkout"
                  value="complete checkout"
                  tabIndex="23"
                >
                  ORDER NOW
                </button>
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                <Image
                  width={32}
                  height={31}
                  alt="Easy Returns footer badge"
                  src="/lock.png"
                  blurDataURL="/lock.png"
                />
                <span>This is a 256-Bit Secured SSL Connection</span>
              </div>
              <div
                style={{
                  margin: "1rem 0",
                }}
              >
                <div className="DeliveredBy_V3_container__wMQ5s">
                  <div>
                    <Image
                      width={140}
                      height={35}
                      alt="Easy Returns footer badge"
                      src="/usps.webp"
                      placeholder="blur"
                      blurDataURL="/usps.webp"
                    />
                  </div>
                  <span className="DeliveredBy_V3_yourOrderText__6M_C8">
                    Your order is estimated to ship by &nbsp;
                    <span className="DeliveredBy_V3_yourOrderEmphasized__CGjWU">
                      {moment(date).format("MMM Do YYYY")}
                    </span>
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  width={349}
                  height={33}
                  alt="Easy Returns footer badge"
                  src="/ss.webp"
                  placeholder="blur"
                  blurDataURL="/ss.webp"
                />
              </div>
              <br />
              <br />
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
