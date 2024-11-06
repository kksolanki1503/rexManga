import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import Title from "antd/es/typography/Title";
import { FloatButton } from "antd";
import Loading from "../comp/Loading";
import MangaNavigation from "../comp/MangaNavigation/MangaNavigation";
// import Title from "antd/es/skeleton/Title";

const SingleChapter = () => {
  const { mangaId, chapterId } = useParams();
  const [chapterData, setChapterData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const FETCH_CHAPTER = `/api/manga/${mangaId}/${chapterId}`;
    const fetchChapter = async () => {
      try {
        setLoading(true);
        const response = await axios(FETCH_CHAPTER);
        setChapterData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchChapter();
  }, [chapterId]);

  // console.log(chapterData, "chapterData");
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full ">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Title level={2} className="text-center">
        {chapterData?.title}-{chapterData?.currentChapter}
      </Title>
      <MangaNavigation chapterListIds={chapterData?.chapterListIds} />
      <div className="w-full">
        {chapterData?.images?.map((data, index) => {
          return (
            <img
              src={data.image}
              alt={data.title}
              className="w-full mx-auto"
              loading="lazy"
            />
          );
        })}
      </div>
      <MangaNavigation chapterListIds={chapterData?.chapterListIds} />
      <div>
        <FloatButton.BackTop />
      </div>
    </div>
  );
};
export default SingleChapter;
