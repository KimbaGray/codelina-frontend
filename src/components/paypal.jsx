import React, { Component } from "react";
class PayPal extends Component {
  state = {};
  render() {
    return (
      <div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="business" value="" />
          <input type="hidden" name="cmd" value="_xclick" />
          <input type="hidden" name="item_name" value="" />
          <input type="hidden" name="amount" id="amount" value="47" />
          <input
            type="hidden"
            name="currency_code"
            id="currency_code"
            value="GBP"
          />
          <input type="hidden" name="custom" id="custom" value="" />
          <input type="hidden" name="rm" value="2" />
          <input type="hidden" name="on0" id="on0" value="" />
          <input type="hidden" name="os0" id="os0" value="0" />
          <input type="hidden" name="on1" id="on1" value="" />
          <input type="hidden" name="os1" id="os1" value="0" />
          <input type="hidden" name="return" id="return" value="" />
          <input type="hidden" name="notify_url" id="notify_url" value="" />
          <input
            type="image"
            name="submit"
            border="0"
            src="https://www.paypal.com/en_US/i/btn/btn_buynow_LG.gif"
            alt="PayPal - The safer, easier way to pay online"
          />
          <img
            alt="Paypal"
            border="0"
            width="1"
            height="1"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          />
        </form>
      </div>
    );
  }
}

export default PayPal;
