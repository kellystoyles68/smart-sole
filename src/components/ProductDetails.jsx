import { WomenSizes, WomenColors } from "./WomanShoes";
import { MenSizes, MenColors } from "./MenShoes";
import imageStylesData from "./imagesStyles";
import shoesData from "../Data.json";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "./ShoppingCartContext";

import birkenstockLowBend from '../images/birkenstockLowBend.png';
import arizonaSandel from '../images/birkenstock_Arizona.png'
import colehann_oxford from '../images/colehann_oxford.png';
import clarks_tilden_oxford from '../images/clarks_tilden_oxford.png';
import chuck_taylor_all_star_high_street_high_top_sneaker from '../images/chuck-taylor-all-star-high-street-high-top-sneaker.png';
import columbia_norton_hikingboot from '../images/columbia_norton_hikingboot.png';
import merrell_runningshoe from '../images/merrell_runningshoe.png';
import clarks_laurieann from '../images/clarks_laurieann.png';
import clarksMiraFlatTideSandel from '../images/clarksMiraFlatTideSandel.jpeg';
import k_kGenna from '../images/k_kGenna.png';
import K_KHailee from '../images/K_KHailee.png';
import blowfish_chelseabootie from '../images/blowfish_chelseabootie.png';
import converse_CTLift_sneaker from '../images/converse_CTLift_sneaker.png';
import clarkswestlynnLoafer from '../images/clarkswestlynnLoafer.png';
import birkenstock_Arizona from '../images/birkenstock_Arizona.png';
import taxiWinteranklebootie from '../images/taxiWinteranklebootie.png';
import asics_jolt from '../images/asics_jolt.png';
import BOBSBCutesneaker from '../images/BOBSBCutesneaker.png';
import { useNavigate } from 'react-router-dom';




const images = {
  'birkenstock_Arizona.png': arizonaSandel,
  'birkenstockLowBend.png': birkenstockLowBend,
  'colehann_oxford.png': colehann_oxford,
  'clarks_tilden_oxford.png': clarks_tilden_oxford,
  'chuck-taylor-all-star-high-street-high-top-sneaker.png': chuck_taylor_all_star_high_street_high_top_sneaker,
  'columbia_norton_hikingboot.png': columbia_norton_hikingboot,
  'merrell_runningshoe.png': merrell_runningshoe,
  'clarks_laurieann.png': clarks_laurieann,
  'clarksMiraFlatTideSandel.jpeg': clarksMiraFlatTideSandel,
  'k_kGenna.png': k_kGenna,
  'K_KHailee.png': K_KHailee,
  'blowfish_chelseabootie.png': blowfish_chelseabootie,
  'converse_CTLift_sneaker.png': converse_CTLift_sneaker,
  'clarkswestlynnLoafer.png': clarkswestlynnLoafer,
  'birkenstock_Arizona.png': birkenstock_Arizona,
  'taxiWinteranklebootie.png': taxiWinteranklebootie,
  'asics_jolt.png': asics_jolt,
  'BOBSBCutesneaker.png': BOBSBCutesneaker
};
function ProductImage({ src, alt }) {
  if (!src) {
    return <h2>Image not found</h2>;
  }
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: imageStylesData.width,
        height: imageStylesData.height,
        border: imageStylesData.border,
        borderRadius: imageStylesData.borderRadius,
        marginLeft: imageStylesData.marginLeft,
        marginRight: imageStylesData.marginRight,
      }}
    />
  );
}

function ProductDetails({ gender }) {
  // const location = useLocation();
  

  // const { productId } = location.state || {};

  const { addToCart } = useShoppingCart();  
  const { productId } = useParams();

const product = shoesData && Array.isArray(shoesData.product) && productId
  ? shoesData.product.find(item => parseInt(item.productId) === parseInt(productId))
  : undefined;

  if (!product) {
    return <div>Product not found</div>; // This line prevents further execution if product is undefined
  }
  
  console.log(product);
  console.log(product); // See what this outputs

  if (product) {
    const name = product.name;
    const price = product.price;
    console.log(`Product found: ${name}`);
    console.log(`Price: ${price}`);
  } else {
    console.log('Product not found');
  }


  return (
    <div>
      <h2>Shoe Description</h2>
      <div className="product-container">
      <img id="ProductImage" src={images[product?.image?.split('/').pop()]} alt="" />

        <ul className="product-details-list">
        <Dropdown gender={gender} />

          <li key={product.id}>
            Product Id: {productId}
            <br />
            <br />
            Brand: {product.brand}
            <br />
            <br />
            Name: {product.name}
            <br />
            <br />
            Description: {product.description}
            <br />
            <br />
            Price: $ {product.price}
          </li>
          <br />
          <br />
          <button class="buttonStyle" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          
        </ul>
      </div>
    </div>
  );
}

function Dropdown({ gender }) {
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const toggleSizeDropdown = () => setIsSizeOpen(!isSizeOpen);
  const toggleColorDropdown = () => setIsColorOpen(!isColorOpen);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    setIsSizeOpen(false);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setIsColorOpen(false); // Close the dropdown by setting to false
  };

  return (
    <>
      <div className="buttons-container">
        <div>
          <br></br>
          <button class="buttonStyle" onClick={toggleSizeDropdown}>
            Select Size {selectedSize && `: ${selectedSize}`}
          </button>
          {isSizeOpen && (
  <ul className="product-details-list">
    {gender === "men"
      ? MenSizes.map((size) => (
          <div key={size}>
            <input
              type="checkbox"
              id={size}
              name={size}
              value={size}
              onChange={() => handleSizeSelection(size)}
            />
            <label htmlFor={size}>{size}</label>
          </div>
        ))
      : WomenSizes.map((size) => (
          <div key={size}>
            <input
              type="checkbox"
              id={size}
              name={size}
              value={size}
              onChange={() => handleSizeSelection(size)}
            />
            <label htmlFor={size}>{size}</label>
          </div>
        ))}
  </ul>
)}

        </div>
        <div>
          <br></br>
          <button class="buttonStyle2" onClick={toggleColorDropdown}>
            Select Color {selectedColor && `: ${selectedColor}`}
          </button>
          {isColorOpen && (
  <ul className="product-details-list">
    {gender === "men"
      ? MenColors.map((color) => (
          <div key={color}>
            <input
              type="checkbox"
              id={color}
              name={color}
              value={color}
              onChange={() => handleColorSelection(color)}
            />
            <label htmlFor={color}>{color}</label>
          </div>
        ))
      : WomenColors.map((color) => (
          <div key={color}>
            <input
              type="checkbox"
              id={color}
              name={color}
              value={color}
              onChange={() => handleColorSelection(color)}
            />
            <label htmlFor={color}>{color}</label>
          </div>
        ))}
  </ul>
)}

        </div>
      </div>
    </>
  );
}
export default ProductDetails;
