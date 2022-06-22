import img from "../../../Images/bg.jpg";
import { useStateValue } from "../../Context/StateProvider";
import Total from "../Total";
import "./CheckOut.css";
import CheckoutProduct from "./CheckoutProduct";
const CheckOut = () => {
  
const [{ basket }] = useStateValue();
console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ads" src={img} alt="" srcSet="" />
        <div className="checkout-title">
          <h1>Your shopping cart </h1>
        </div>
        <div className="checkout-products">
          {
            basket.map((product)=><CheckoutProduct product={product}>

            </CheckoutProduct>)
          }
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
