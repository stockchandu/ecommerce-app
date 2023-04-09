import { Loading } from "../Loading/Loading";
import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct, getProduct, errProduct } from "../../store/productSlice";
import { Message } from "../Error/Message";
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

  useEffect(() => {
    dispatch(loadProduct({ loading: true }));
    axios
      .get(`${process.env.REACT_APP_PRODUCT_URL}/products`)
      .then(
        ({ data }) => dispatch(getProduct({ product: data })),
        dispatch(loadProduct({ loading: false })),
        dispatch(errProduct({ err: false }))
      )
      .catch(
        () => dispatch(errProduct({ err: true })),
        dispatch(loadProduct({ loading: false }))
      );
  }, []);
    return (
      <>
        <div>
          {loading ? (
            <Loading />
          ) : err ? (
            <Message message="😬 Ohh No , Not Found !" />
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
      </>
    );
};