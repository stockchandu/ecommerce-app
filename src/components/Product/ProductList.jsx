import CircularProgress from "@mui/material/CircularProgress";
import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct, getProduct, errProduct } from "../../store/productSlice";
export const ProductList = () => {
  const dispatch = useDispatch();
  const {
    product: {
      value: { loading, product, err },
    },
    filterProduct: {
      value: { filterByRating, isFiltered },
    },
  } = useSelector((state) => state);
  // create a custom hook and move
  useEffect(() => {
    dispatch(loadProduct({ loading: true }));
    axios
      .get(`${process.env.REACT_APP_PRODUCT_URL}/products`)
      .then(
        ({ data }) => dispatch(getProduct({ product: data })),
        dispatch(loadProduct({ loading: false }))
      )
      .catch(
        () => dispatch(errProduct({ err: true })),
        dispatch(loadProduct({ loading: false }))
      );
  }, []);
  try {
    return (
      <>
        <div>
          {loading ? (
            <div className="w-full h-96 flex justify-center items-center z-10">
              <CircularProgress />
            </div>
          ) : isFiltered ? (
            filterByRating?.map((items) => (
              <ProductCard product={items} key={items.id} />
            ))
          ) : (
            product?.map((items) => (
              <ProductCard product={items} key={items.id} />
            ))
          )}
        </div>
        {err ? (
          <h1 className="text-center font-semibold">Something went wrong</h1>
        ) : (
          ""
        )}
      </>
    );
  } catch (error) {
    return <div>Something went wrong while rendering </div>;
  }
};
