import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Message } from "../Error/Message";
import { useNavigate } from "react-router-dom";
export const ProductCart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart.value);
  const calculateProductPrice = () => {
    let totalPrice = 0;
    cart?.map(({ price }) => {
      totalPrice = totalPrice + price;
    });
    return totalPrice;
  };

  const handlePayment = () => {
    navigate("/payment-page");
  };

  return (
    <>
      {cart.length === 0 ? (
        <Message message="No items in the cart 🧺" />
      ) : (
        <div>
          <div className="flex w-full p-3 h-1/6 overflow-y-scroll">
            <div className="w-4/6 border-2  p-3 mr-2 h-fit ">
              <div className="text-lg font-bold">My Product</div>
              {cart?.map((ele) => {
                return (
                  <>
                    <div key={ele.id}>
                      <div className="flex w-full mb-10 border-b-2 p-3 hover:shadow-md cursor-pointer">
                        <div className="w-2/12">
                          <img src={ele.image} alt="product images" />
                        </div>

                        <div className="w-8/12 ml-10">
                          <h1 className="font-bold hover:text-lg">
                            {ele.title}
                          </h1>
                          <h1 className=" mb-5">
                            <span className="mr-5 line-through">₹ 3999</span>₹{" "}
                            {ele.price}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="w-1/3 h-fit border-2 p-3">
              <div>Price Details</div>
              <div className="mb-5">
                Price({cart.length} items) -{" "}
                {calculateProductPrice().toFixed(2)}{" "}
              </div>
              <div>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handlePayment}
                >
                  CHECKOUT NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
