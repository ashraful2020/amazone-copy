import React from "react";
import CurrencyFormat from "react-currency-format";

const Total = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal (0 items): <strong>0.00</strong>
            </p>
            <small>
              <input type="checkbox" /> This Order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        prefix={"$"}
      ></CurrencyFormat>
    </div>
  );
};

export default Total;
