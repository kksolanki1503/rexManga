import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();

    setData(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#f2f2f2]">
      <h1 className="text-2xl p-4">Products</h1>
      <div className="cardComponent">
        {data.map((data) => {
          return (
            <Link to={`${data.id}`}>
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
                <div className="text-lg text-[#707070]">{data.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default ProductsPage;
