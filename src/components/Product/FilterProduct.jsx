import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProduct } from "../../store/filterProductSlice";
import { INITIAL_CHECKBOX_VALUE } from "../../utils/constant";

export const FilterProduct = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product.value);
  const [checkbox, setCheckbox] = useState(INITIAL_CHECKBOX_VALUE);
  let products = product;
  // move to utility function
  const filterProductByRatingPrice = (value, type) => {
    let filterProd = [];
    if (products !== null && products !== undefined) {
      products.filter((items) =>
        type === "rating"
          ? items.rating.rate > value && filterProd.push(items)
          : items.price < value && filterProd.push(items)
      );
    }
    dispatch(filterProduct({ filterByRating: filterProd, isFiltered: true }));
  };

  const handleRatingFilter = (event) => {
    setCheckbox(INITIAL_CHECKBOX_VALUE);
    setCheckbox({ [event.target.value]: event.target.checked });
    switch (event.target.value) {
      case "4rating":
        filterProductByRatingPrice(4, "rating");
        break;
      case "3rating":
        filterProductByRatingPrice(3, "rating");
        break;
      case "2rating":
        filterProductByRatingPrice(2, "rating");
        break;
      case "1rating":
        filterProductByRatingPrice(1, "rating");
        break;
      default:
        break;
    }
  };

  const handlePriceFilter = (event) => {
    setCheckbox(INITIAL_CHECKBOX_VALUE);
    switch (+event.target.value) {
      case 100:
        filterProductByRatingPrice(100, "price");
        break;
      case 200:
        filterProductByRatingPrice(200, "price");
        break;
      case 300:
        filterProductByRatingPrice(300, "price");
        break;
      case 400:
        filterProductByRatingPrice(400, "price");
        break;
      case 500:
        filterProductByRatingPrice(500, "price");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>
        <h6 className="font-bold mb-2">Filter</h6>
        <div className="font-semibold">Price</div>
        <select className="mb-2" onChange={(e) => handlePriceFilter(e)}>
          <option>Select price</option>
          <option value={100}>Below 100</option>
          <option value={200}>Below 200</option>
          <option value={300}>Below 300</option>
          <option value={400}>Below 400</option>
          <option value={500}>Below 500</option>
        </select>

        <div className="font-semibold ">Customer Ratings</div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkbox["4rating"]}
                value="4rating"
                onChange={(e) => handleRatingFilter(e)}
              />
            }
            label={`4★ & above`}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkbox["3rating"]}
                value="3rating"
                onChange={(e) => handleRatingFilter(e)}
              />
            }
            label={`3★ & above`}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkbox["2rating"]}
                value="2rating"
                onChange={(e) => handleRatingFilter(e)}
              />
            }
            label={`2★ & above`}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkbox["1rating"]}
                value="1rating"
                onChange={(e) => handleRatingFilter(e)}
              />
            }
            label={`1★ & above`}
          />
        </div>
      </div>
    </>
  );
};
