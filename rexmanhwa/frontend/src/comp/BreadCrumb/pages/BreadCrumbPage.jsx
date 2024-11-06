import { Outlet } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";

const BreadCrumbPage = () => {
  return (
    <div>
      <div className="breadCrumbComponent">
        <h1 className="text-5xl font-bold text-center p-5 border border-b-2">
          BreadCrumb
        </h1>
        <div>
          <BreadCrumb />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default BreadCrumbPage;
