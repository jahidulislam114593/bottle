import PropTypes from "prop-types";
import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price, stock } = bottle;
  return (
    <div className="bottle">
      <h3>{name}</h3>
      <img src={img}></img>
      <p>Price: ${price}</p>
      <p>Stock:{stock}</p>
      <button
        onClick={() => handleAddToCart(bottle)}
        style={{ marginBottom: "10px" }}
      >
        Buy Now
      </button>
    </div>
  );
};
Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
export default Bottle;
