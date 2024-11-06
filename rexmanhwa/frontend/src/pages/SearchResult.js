import { useEffect, useState } from "react";
import axios from "../api/axios";
import { toast } from "react-toastify";
import MangaCard from "../comp/MangaCard";
import { Link, useParams } from "react-router-dom";
import CustomPagination from "../comp/Pagination";
import { useStore } from "../hooks/useStore";

const SearchResult = () => {
  const { searchManga, setSearchLoading, allMangaData, setAllMangaData } =
    useStore();
  console.log(searchManga, "searchManga");

  // const [allMangaData, setAllMangaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  const { searchName } = useParams();

  useEffect(() => {
    const SEARCH_URL = `/api/search/${searchName}?page=${currPage}`;

    const fetchManga = async () => {
      try {
        setLoading(true);
        const response = await axios.get(SEARCH_URL);
        setAllMangaData(response.data);
      } catch (error) {
        console.log(error);
        toast.error("error");
      } finally {
        setLoading(false);
      }
    };
    fetchManga();
  }, [currPage, searchName]);

  if (loading) {
    return <div>Loading...</div>;
  }
  // console.log(allMangaData, "allMangaData");
  return (
    <div>
      {/* <div>
        <SearchComponent />
      </div> */}
      <div className=" MangaContainer">
        {allMangaData?.mangaList?.map((manga, index) => {
          return (
            <div className="mx-auto ">
              <Link to={`/manga/${manga?.id}`} className="w-fit">
                <MangaCard
                  loading={loading}
                  key={manga?.id}
                  image={manga.image}
                  title={manga.title}
                  chapter={manga.chapter}
                  view={manga.view}
                  description={manga.description}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <CustomPagination
          currPage={currPage}
          setCurrPage={setCurrPage}
          totalPage={allMangaData?.metaData?.totalPages}
        />
      </div>
    </div>
  );
};
export default SearchResult;
