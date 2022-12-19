const ShippingInfo = () => {
  // let { register, isBillingAddressSame, setIsBillingAddressSame, setValue } =
  //   props;
  return (
    <div className="form-css">
      <div id="formfields" className="info_section info_section1 sc-chk">
        <div className="Form_V9_sectionHeader__9qBDc">
          <div className="Form_V9_step__YP0Sg">1</div>
          <div className="Form_V9_stepName__Tk75_">Shipping Information</div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                <strong>First Name:</strong>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required={true}
                data-validate="email"
                // {...register("firstName")}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                <strong>Last Name:</strong>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                data-validate="lastName"
                data-error-message="Please enter your last name!"
                required={true}
                // {...register("lastName")}
                className=" form-control"
              />
            </div>
          </div>
          <div id="email_div" className="col-sm-12">
            <div className="form-group">
              <label className="control-label">
                <strong>Email Address:</strong>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                data-validate="email"
                data-error-message="Please enter a valid email address!"
                required={true}
                // {...register("email")}
                className=" form-control"
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <label id="ima0i" className="control-label">
                <strong>Phone Number:</strong>
              </label>
              <input
                type="tel"
                maxlength="10"
                minlength={"10"}
                name="phone"
                placeholder="Phone Number"
                data-validate="phone"
                data-error-message="Please enter a valid phone number!"
                required={true}
                // onKeyUp={(e) =>
                //   setValue("phone", e.target.value.replace(/[^\d]/, ""))
                // }
                // {...register("phone")}
                pattern="^[0-9]{10,10}$"
                className="form-control neumeric"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label>
                <strong>Address:</strong>
              </label>
              <input
                type="text"
                name="shippingAddress1"
                placeholder="Your Address"
                data-error-message="Please enter your address!"
                required={true}
                className="form-control"
                // {...register("address")}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <strong>Zip Code:</strong>
              <input
                type="tel"
                name="shippingZip"
                placeholder="Zip Code"
                data-error-message="Please enter a valid zip code!"
                required={true}
                maxlength="5"
                // onKeyUp={(e) =>
                //   setValue("zipCode", e.target.value.replace(/[^\d]/, ""))
                // }
                className="form-control only-numbers required zip-change"
                // {...register("zipCode")}
                pattern="^[0-9]{5,5}$"
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <label>
                <strong>City:</strong>
              </label>
              <input
                type="text"
                name="shippingCity"
                id="fields_city"
                placeholder="Your City"
                data-error-message="Please enter your city!"
                required={true}
                className="required form-control"
                // {...register("city")}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <strong>State:</strong>
              <select
                name="shippingState"
                type="text"
                id="fields_state"
                placeholder="Your State"
                className="form-control"
                data-error-message="Please select your state!"
                // {...register("state")}
              >
                <option value="">Select State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
          </div>
          <div className="col-sm-12"></div>
        </div>
        <div id="idsdvo">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
            className="col-xs-12 checkbox same_as_billing"
          >
            <input
              type="checkbox"
              id="billing"
              name="billing"
              // value={isBillingAddressSame}
              alt="Billing Same as Shipping Address"
              className="fieldToggle"
              // checked={isBillingAddressSame}
              // onChange={(e) => {
              //   setIsBillingAddressSame(e.target.checked);
              // }}
              style={{
                margin: "0px 8px",
              }}
            />
            <label id="i4qw42">
              {" "}
              Is your billing address same as shipping address?
            </label>
          </div>
        </div>
        <br />

        <div
          id="billing-info"
          className="billing-info"
          // style={{
          //   display: isBillingAddressSame && "none",
          // }}
        >
          <div
            id="billing_address_form"
            // style={{
            //   display: isBillingAddressSame && "none",
            // }}
          >
            <div className="Form_V9_sectionHeader__9qBDc">
              <div className="Form_V9_step__YP0Sg">2</div>
              <div className="Form_V9_stepName__Tk75_">Billing Information</div>
            </div>
            <br />
            <div className="form-group">
              <strong>Billing First Name:</strong>
              <input
                type="text"
                className="form-control"
                name="billingFirstName"
                placeholder="Billing First Name"
                data-error-message="Please enter your billing first name!"
              />
            </div>

            <div className="form-group">
              <strong>Billing Last Name:</strong>
              <input
                type="text"
                className="form-control"
                name="billingLastName"
                // {...register("billingLastName")}
                placeholder="Billing Last Name"
                data-error-message="Please enter your billing last name!"
              />
            </div>

            <div className="form-group">
              <strong>Billing Address:</strong>
              <input
                type="text"
                className="form-control"
                name="billingAddress1"
                placeholder="Billing Address"
                // {...register("billingAddress")}
                data-error-message="Please enter your billing address!"
              />
            </div>

            <div className="form-group">
              <strong>Billing Zip Code: </strong>
              <div>
                <input
                  type="tel"
                  maxlength="5"
                  className="form-control"
                  name="billingZip"
                  // {...register("billingZipCode")}
                  // onKeyUp={(e) =>
                  //   setValue(
                  //     "billingZipCode",
                  //     e.target.value.replace(/[^\d]/, "")
                  //   )
                  // }
                  placeholder="Billing Zip Code"
                  data-error-message="Please enter a valid billing zip code!"
                  pattern="^[0-9]{5,5}$"
                  // onkeyup="javascript: this.value = this.value.replace(/[^0-9]/g, &#39;&#39;)"
                />
              </div>
            </div>
            <div className="form-group">
              <strong>Billing City:</strong>
              <input
                type="text"
                className="form-control"
                name="billingCity"
                placeholder="Billing City"
                // {...register("billingCity")}
                data-error-message="Please enter your billing city!"
              />
            </div>

            <div className="form-group">
              <strong>Billing State: </strong>
              <div>
                <select
                  name="shippingState"
                  type="text"
                  id="fields_state"
                  placeholder="Billing State"
                  className="form-control"
                  data-error-message="Please select your billing state!"
                  // {...register("billingState")}
                >
                  <option value="">Select State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ShippingInfo;
