import { useSelector } from "react-redux";
import { searchProduct } from "../../utils/filterProduct";
import { Link } from "react-router-dom";
export const SearchProduct = ({ query, invisiBleSearch }) => {
  const { product } = useSelector((state) => state.product.value);
  let products = searchProduct(product, query);
  return (
    <>
      <div>
        {query
          ? products.map(({ title, id }) => (
              <div key={id} className="mb-2 cursor-pointer hover:bg-sky-50 p-2">
                <Link
                  to={`product_details/${id}`}
                  onClick={() => invisiBleSearch()}
                >
                  {title}
                </Link>
              </div>
            ))
          : null}
      </div>
    </>
  );
};
