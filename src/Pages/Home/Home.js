import React,{useEffect,useState} from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
     fetch("./products.json")
       .then((res) => res.json())
       .then((data) => setProducts(data));
   }, []);
   
      // {products.map((product) =><Product product={product}></Product>
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-images"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt=""
          srcSet=""
        />
        <div className="home-row">
          <Product
            title="The lean startup"
            price={19}
            img="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL480_QL65_.jpg"
            rating={4}
          />
          <Product
            title="Apple pencil 2022"
            price={210}
            img="https://m.media-amazon.com/images/I/21SPDoiRuGL._AC_UL480_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            title="Logitech nhr52 200 wireless mechanical keyboard and mouse combo"
            price={340}
            img="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL480_QL65_.jpg"
            rating={5}
          />
          <Product
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
            price={19}
            img="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL480_QL65_.jpg"
            rating={4}
          />
          <Product
            title="Logitech nhr52 200 wireless mechanical keyboard and mouse combo"
            price={340}
            img="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL480_QL65_.jpg"
            rating={5}
          />{" "}
          <Product
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
            price={19}
            img="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL480_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for"
            price={609}
            img="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL480_QL65_.jpg"
            rating={4}
          />
          <Product
            title="Original HP 63XL Black High-yield Ink Cartridge | Works with HP DeskJet 1112, 2130, 3630 Series; HP ENVY 4510, 4520 Series; HP OfficeJet 3830,"
            price={99.98}
            img="https://m.media-amazon.com/images/I/71dknWOvquL._AC_UL480_QL65_.jpg"
            rating={4}
          />
        </div>
        {/* <Product title="" price={19} img="" rating={4} /> */}
      </div>
    </div>
  );
};

export default Home;
