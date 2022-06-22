import img from "../../../Images/bg.jpg";
import Total from "../Total";
import "./CheckOut.css";
const CheckOut = () => {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ads" src={img} alt="" srcSet="" />
        <div className="checkout-title">
          <h1>Your shopping cart </h1>
        </div>
      </div>
      <div className="checkout-right">
        <div className="checkout-info">
          <Total />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
