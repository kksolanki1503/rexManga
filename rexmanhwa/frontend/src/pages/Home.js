import { useEffect, useState } from "react";
import axios from "../api/axios";
import { toast } from "react-toastify";
import MangaCard from "../comp/MangaCard";
import { Link } from "react-router-dom";
import CustomPagination from "../comp/Pagination";
import { useStore } from "../hooks/useStore";
import Loading from "../comp/Loading";
import { Typography } from "antd";
const { Text } = Typography;
const Home = () => {
  const { searchManga, allMangaData, setAllMangaData } = useStore();
  // console.log(searchManga, "searchManga");

  // const [allMangaData, setAllMangaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  const [newestManga, setNewestManga] = useState([]);
  const [topViewManga, setTopViewManga] = useState([]);

  useEffect(() => {
    const FETCH_MANGA_URL = `/api/mangaList?page=${currPage}`;
    const fetchManga = async () => {
      try {
        setLoading(true);
        const response = await axios.get(FETCH_MANGA_URL);
        setAllMangaData(response.data);
      } catch (error) {
        console.log(error);
        toast.error("error");
      } finally {
        setLoading(false);
      }
    };
    fetchManga();
  }, [currPage]);

  // useEffect(() => {
  //   const fetchnnewsetManga = async () => {
  //     const FETCH_MANGA_NEWEST_URL = `/api/mangaList?type=newest`;
  //     try {
  //       // setLoading(true);
  //       const response = await axios.get(FETCH_MANGA_NEWEST_URL);
  //       setNewestManga(response.data.mangaList);
  //       // console.log(response.data.mangaList);
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("error");
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };
  //   const fetchTopViewManga = async () => {
  //     const FETCH_MANGA_TOPVIEW_URL = `/api/mangaList?type=topview`;
  //     try {
  //       // setLoading(true);
  //       const response = await axios.get(FETCH_MANGA_TOPVIEW_URL);
  //       setTopViewManga(response.data.mangaList);
  //       // console.log(response.data.mangaList);
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("error");
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };

  //   fetchnnewsetManga();
  //   fetchTopViewManga();
  // }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full ">
        <Loading />
      </div>
    );
  }
  // console.log(allMangaData, "allMangaData");
  return (
    <div>
      {/* <div>
        <SearchComponent />
      </div> */}
      <div className="MangaContainer">
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
      {/* <div className="flex flex-col gap-4 mt-5">
        <div>
          <Typography.Title level={3} style={{ margin: 10 }}>
            Newest
          </Typography.Title>
          <div className="overflow-hidden ">
            <div className="flex flex-row gap-4 overflow-x-scroll">
              {" "}
              {newestManga?.map((manga, index) => {
                return (
                  <Link to={`/manga/${manga?.id}`} className="">
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
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <Typography.Title level={3} style={{ margin: 10 }}>
            Top Read
          </Typography.Title>
          <div className="overflow-hidden ">
            <div className="flex flex-row gap-4 overflow-x-scroll">
              {topViewManga?.map((manga, index) => {
                return (
                  <Link to={`/manga/${manga?.id}`} className="">
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
                );
              })}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Home;
