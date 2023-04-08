import { SideBar } from "../Sidebar/SideBar";
import { ProductList } from "../Product/ProductList";
export const Body = () => {
  return (
    <div className="flex w-full p-3">
      <div className="w-1/5 border-2 p-3 mr-2 h-fit">
        <SideBar />
      </div>
      <div className="w-full h-fit border-2 p-3">
        <ProductList />
      </div>
    </div>
  );
};
