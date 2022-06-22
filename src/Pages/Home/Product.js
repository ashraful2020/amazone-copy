import { useStateValue } from "../Context/StateProvider";
import "./Product.css";
const Product = ({ id, title, price, img, rating }) => {
  let uniqueId= price+rating+1+5+rating+price+0+price+rating+0;

  const [{basket}, dispatch] = useStateValue(); 
  const addToBasket = () => { 
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id: uniqueId, title, price, img, rating },
    });
  };
  return (
    <div className="product-container">
      <img src={img} alt="" srcSet="" />
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
};

export default Product;
