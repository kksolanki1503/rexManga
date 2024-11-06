import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getData = async () => {
    // const locationData = location.pathname.split("/").filter((x) => x)[1];

    let temp = await fetch(`https://dummyjson.com/products/${id}`);
    temp = await temp.json();
    console.log(temp);
    setData(temp);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="bg-[#f2f2f2]">
        <h1 className="text-2xl p-4">ProductDetailPage</h1>
        <div className="">
          <div className="flex gap-4">
            <div className="bg-white flex-1">
              <div className="h-[400px]">
                <img
                  className="w-full h-full object-contain"
                  src={data.thumbnail}
                />
              </div>

              <div className="flex gap-4 p-2">
                {data.images?.map((image, index) => {
                  return (
                    <div className="" key={index}>
                      {" "}
                      <img
                        className="w-full h-full p-2 border-2 "
                        src={image}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-white flex-1 p-4">
              <h1 className="text-2xl pb-4 font-bold text-[#b3b3b3]">
                {data.brand}
              </h1>
              <h1 className="text-2xl">{data.title}</h1>
              <p>{data.description}</p>
              <div className="text-gray-600 py-2">${data.price} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailPage;
