import { APP_LOGO } from "../../utils/constant";
import { useState } from "react";
import { SearchProduct } from "../Product/SearchProduct";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const { count } = useSelector((state) => state.cart.value);
  const [userQuery, setUserQuery] = useState("");
  const handleInput = (value) => setUserQuery(value);
  const invisiBleSearchResult = () => {
    setUserQuery("");
  };
  return (
    <>
      <div className="w-full flex justify-between border-2 p-4">
        <div>
          <Link to="/">
            <img src={APP_LOGO} alt="searching yard logo" />
          </Link>
        </div>
        <input
          type="text"
          placeholder="Search for products"
          className="w-2/5 border-2 p-1"
          onChange={(e) => handleInput(e.target.value)}
        />
        <Link to="cart">Cart({count}) </Link>
      </div>

      <div
        className={
          !userQuery
            ? "invisible"
            : "absolute border-2 bg-slate-50 ml-64 left-64 w-2/5 -mt-3 p-2 overflow-y-scroll h-80 visible z-10"
        }
      >
        <div>
          <SearchProduct
            query={userQuery}
            invisiBleSearch={invisiBleSearchResult}
          />
        </div>
      </div>
    </>
  );
};
