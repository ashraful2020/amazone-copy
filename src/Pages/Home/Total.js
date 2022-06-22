import CurrencyFormat from "react-currency-format";
import './Total.css'
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
      />
      <button type="submit">
        Proceed to checkout 
      </button>
    </div>
  );
};

export default Total;
