import Head from "next/head";
import Image from "next/image";
import VideoSection from "../components/videoSec";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="checkout">
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://next-blog-starter.vercel.app/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://next-blog-starter.vercel.app/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://next-blog-starter.vercel.app/favicon/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://next-blog-starter.vercel.app/favicon/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="https://next-blog-starter.vercel.app/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link
          rel="shortcut icon"
          href="https://next-blog-starter.vercel.app/favicon/favicon.ico"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link
          rel="alternate"
          type="application/rss+xml"
          href="https://next-blog-starter.vercel.app/feed.xml"
        />
        <meta
          name="description"
          content="A statically generated blog example using Next.js and Markdown."
        />
        <meta
          property="og:image"
          content="https://og-image.now.sh/Next.js%20Blog%20Starter%20Example.png?theme=light&amp;md=1&amp;fontSize=100px&amp;images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"
        />
        <title>Next.js Blog Example with Markdown</title>
        <meta name="next-head-count" content="15" />
        <link rel="preload" href="/blog/dea4994d6f04d9490ec7.css" as="style" />
        <link
          rel="stylesheet"
          href="/blog/dea4994d6f04d9490ec7.css"
          data-n-g=""
        />
      </Head>
      <div>
        <div>
          <div className="top-discount-banner">
            <div class="forDesktop">
              <Image
                width={1800}
                height={300}
                layout="responsive"
                alt="stars"
                src="/header-pres-2.jpg"
              />
            </div>

            <div class="forMobile">
              <Image
                width={1000}
                height={300}
                layout="responsive"
                alt="stars"
                src="/header-pres-2.jpg"
              />
            </div>
          </div>
          <div
            className="TopTagline_V3_logoContainer__6CYA6"
            style={{
              backgroundColor: "#1fa3ec",
            }}
          >
            <div className="HeaderSection_V1_icon__SPf0G">
              <div
                dangerouslySetInnerHTML={{
                  __html: `${"HYbrid Watch "}`,
                }}
              ></div>
            </div>
            <div className="TopTagline_V3_logo__1XWDz">
              <div className="TopTagline_V3_tagLine__lFwSp">
                <div>
                  <span className="TopTagline_V3_brandSubtitle__0FKZV">
                    New and Improved 2022 Model
                  </span>
                </div>
              </div>
            </div>
          </div>
          <VideoSection />
          <form
            id="billing-form"
            // onSubmit={handleSubmit(onSubmit)}
          >
            {/* <input
              type={"hidden"}
              data-threeds="cardHolderName"
              value={`${firstName} ${lastName}`}
            />
            <input
              type={"hidden"}
              data-threeds="shippingLine1"
              value={address}
            />
            <input type={"hidden"} data-threeds="shippingCity" value={city} />
            <input type={"hidden"} data-threeds="shippingState" value={state} />
            <input
              type={"hidden"}
              data-threeds="shippingCountry"
              value={"840"}
            />

            <input
              type={"hidden"}
              data-threeds="billingCountry"
              value={"840"}
            />

            <input
              type={"hidden"}
              data-threeds="shippingPostCode"
              value={zipCode}
            /> */}

            <div className="Form_V9_container__ZjdbQ">
              <div className="Form_V9_gridLayout__sAvxF">
                <div className="Form_V9_tableDetails__UkeCx">
                  <div className="TableDetail_V2_productCard__aEJd3">
                    <div className="TableDetail_V2_tableContainer__D69o_">
                      <div
                        className="TableDetail_V2_tableProductDetail__2Ao8A"
                        style={{
                          margin: "0 0 0 0",
                        }}
                      >
                        <div className="TableDetail_V2_sectionHeader__nNbnS">
                          Your Order
                        </div>
                      </div>
                      <div className="TableDetail_V2_tableItemHeader_top__d_SLQ">
                        <div>Item</div>
                        <div>Price ($USD)</div>
                      </div>
                      <div
                        className="TableDetail_V2_tableProductDetail__2Ao8A"
                        style={{
                          marginTop: "4px",
                        }}
                      >
                        <div>
                          <span
                            style={{
                              fontWeight: "600",
                              display: "flex",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: `${tokens?.companyName || ""} &nbsp; $ ${
                                tokens?.step1BasePrice || ""
                              } `,
                            }}
                          ></span>
                        </div>
                        <div>$0</div>
                      </div>
                      <div className="TableDetail_V2_tableProductDetail__2Ao8A">
                        <div>Total Shipping</div>
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          $
                          <CustomReactMarkdown>
                            {tokens?.step1Shipping || ""}
                          </CustomReactMarkdown>
                        </div>
                      </div>
                      <div
                        style={{
                          color: "red",
                          marginBottom: "4px",
                        }}
                        className="TableDetail_V2_tableProductDetail__2Ao8A"
                      >
                        <div>Mastercard Promo</div>
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          -$
                          <CustomReactMarkdown>
                            {tokens?.masterCardPromo || ""}
                          </CustomReactMarkdown>
                        </div>
                      </div>

                      <div className="TableDetail_V2_tableItemHeader__uvqGL">
                        <div>Total:</div>
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          $
                          <CustomReactMarkdown>
                            {tokens?.step1Total || ""}
                          </CustomReactMarkdown>
                        </div>
                      </div>

                      <div className="ProductMedia_V3_container__Wo4qx">
                        <Image
                          width={300}
                          height={300}
                          src="/image.webp"
                          alt="imag"
                          placeholder="blur"
                          blurDataURL="/image.webp"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="Form_V9_formSection__rjTZI">
                    <div className="Form_V9_checkoutContainer__hZx_o false">
                      <div className="Form_V9_formCard__0h4bh Form_V9_formCardShippingInformation__h_AXb">
                        {errors?.phone && (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <p
                              style={{
                                color: "red",
                                fontSize: "16px",
                                margin: " 1rem 0",
                              }}
                            >
                              Error Msg: {errors?.phone?.message}
                            </p>
                          </div>
                        )}
                        {/* <ShippingInfo
                          isBillingAddressSame={isBillingAddressSame}
                          register={register}
                          setValue={setValue}
                          setIsBillingAddressSame={setIsBillingAddressSame}
                        /> */}
                      </div>
                      <div
                        className="Form_V9_formCard__0h4bh undefined false"
                        style={{
                          marginTop: "20px",
                          gridColumn: 2,
                          gridRow: 1 / 4,
                        }}
                      >
                        {/* <PaymentInfo
                          isBillingAddressSame={isBillingAddressSame}
                          register={register}
                          setValue={setValue}
                          setIsE_Shipping={setIsE_Shipping}
                          isE_Shipping={isE_Shipping}
                          submitHandler={() => handleSubmit(onSubmit)}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <Footer />
        </div>
      </div>
    </div>
  );
}
