import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { Message } from "../Error/Message";
import { addToCart } from "../../store/cartSlice";
export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart.value);
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [error, setError] = useState(false);
  const [countValue, setCountValue] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_PRODUCT_URL}/products/${id}`)
      .then(({ data }) => {
        if (!data) {
          setError(true);
          setLoading(false);
        } else {
          setProductDetails(data);
          setError(false);
          setLoading(false);
        }
      })
      .catch(() => setError(true), setLoading(false));
  }, [id]);

  const handleCart = (items) => {
    setCountValue((prev) => (prev = prev + 1));
    dispatch(addToCart({ cart: [...cart, items], count: countValue }));
  };

    return (
      <>
        {loading ? (
          <Loading />
        ) : error ? (
          <Message message="😬 Ohh No , Not Found !" />
        ) : (
          <div className="flex w-full mb-10 border-b-2 p-3">
            <div className="w-3/12">
              <img src={productDetails?.image} alt="product images" />
            </div>
            <div className="w-8/12 ml-10">
              <h1 className="font-bold text-3xl mb-3">
                {productDetails?.title}
              </h1>
              <p className="font-thin mb-3">{productDetails?.description}</p>
              <p className="mb-3">Category - {productDetails?.category}</p>
              <h4 className="mb-3">
                ★ {productDetails?.rating?.rate} rating by{" "}
                {productDetails?.rating?.count} users
              </h4>
              <div className="mb-8">
                <h1 className="font-bold text-3xl">
                  ₹ {productDetails?.price}
                </h1>
              </div>
              <div>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => handleCart(productDetails)}
                  >
                    ADD TO CART
                  </Button>
                  <Button variant="contained" color="error">
                    BUY NOW
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        )}
      </>
    );
};
