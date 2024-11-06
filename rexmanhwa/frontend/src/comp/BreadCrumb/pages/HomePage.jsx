import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsPage from "./ProductsPage";

const HomePage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    console.log(data);
    setData(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#f2f2f2]">
      <h1 className="text-2xl p-4">Home Page</h1>
      <div className="cardComponent">
        {data.slice(0, 5).map((data) => {
          return (
            <Link to={`products/${data.id}`}>
              <div
                className="bg-white w-full h-full flex flex-col gap-4 p-4 border shadow-md cursor-pointer"
                key={data.id}
              >
                <div className="w-full h-48 ">
                  <img
                    className="w-full h-full  object-contain"
                    src={data.images[0]}
                    alt={data.title}
                  />
                </div>
                <div>
                  <div className="text-lg text-[#707070]">{data.title}</div>
                  <div className="text-lg text-[#707070]">${data.price}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="text-center p-4  flex justify-center items-center ">
        <Link to={"products/"}>
          <div className="border p-2 shadow-sm cursor-pointer hover:bg-black/5 rounded-md">
            See More
          </div>
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
