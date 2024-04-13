import "./product.scss";
import chanel from "./../../assets/images/chanel n5.png";

const Product = ({ item }) => {
  return (
    <a target="_blank" href={item.link}>
      <div className="product">
        <img src={item.img} alt="chanel" />
        <h1>{item.name}</h1>
        <span>Key Note: {item.keyNotes}</span>
        <span>Brand: {item.brand}</span>
        <span>Special Occasions: {item.gender}</span>
      </div>
    </a>
  );
};

export default Product;
