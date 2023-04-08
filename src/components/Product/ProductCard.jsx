import { addToCart } from "../../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [countValue, setCountValue] = useState(1);
  const { cart } = useSelector((state) => state.cart.value);
  let {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  } = product;

  const handleCart = (items) => {
    setCountValue((prev) => (prev = prev + 1));
    dispatch(addToCart({ cart: [...cart, items], count: countValue }));
  };

  return (
    <>
      <div className="flex w-full mb-10 border-b-2 p-3 hover:shadow-md cursor-pointer">
        <div className="w-2/12">
          <img src={image} alt="product images" />
        </div>

        <div className="w-8/12 ml-10">
          <Link to={`/product_details/${id}`}>
            <h1 className="font-bold hover:text-lg">{title}</h1>
          </Link>
          <p className="font-thin">{description}</p>
          <p>Category - {category}</p>
          <h4>
            ★ {rate} rating by {count} users
          </h4>
        </div>
        <div className="ml-1">
          <h1 className="font-bold mb-5 text-2xl">₹ {price}</h1>
          <Button
            variant="contained"
            color="warning"
            onClick={() => handleCart(product)}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </>
  );
};
