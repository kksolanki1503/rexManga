import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";
import { Typography } from "antd";

const SingleManga = () => {
  const { Title, Text } = Typography;
  const { mangaId } = useParams();
  const [mangaData, setMangaData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const MANGA_URL = `/api/manga/${mangaId}`;
    const fetchManga = async () => {
      try {
        const response = await axios.get(MANGA_URL);
        setMangaData(response.data);
        console.log(response, "response");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchManga();
  }, []);
  console.log(mangaId, "params");
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Title level={2}>{mangaData.name}</Title>
      <div className="flex flex-col justify-center w-full gap-8 lg:flex-row">
        <img
          className="rounded max-lg:mx-auto lg:mx-1"
          src={mangaData.imageUrl}
          alt={mangaData.imageUrl}
        />
        <div className="flex flex-col">
          <span>
            <Text strong className="capitalize">
              author :{" "}
            </Text>
            <Text type="secondary">{mangaData.author}</Text>
          </span>
          <span>
            <Text strong className="capitalize">
              status :{" "}
            </Text>
            <Text type="secondary">{mangaData.status}</Text>
          </span>
          <span>
            <Text strong className="capitalize">
              updated :{" "}
            </Text>
            <Text type="secondary">{mangaData.updated}</Text>
          </span>
          <span>
            <Text strong className="capitalize">
              view :{" "}
            </Text>
            <Text type="secondary">{mangaData.view}</Text>
          </span>
          <span>
            <Text strong className="capitalize">
              genres :{" "}
            </Text>
            <Text type="secondary">
              {mangaData?.genres?.map((data) => {
                return `${data}, `;
              })}
            </Text>
          </span>
        </div>
      </div>
      <div className="w-full mt-4 ">
        <Title level={3}>Chapters</Title>
        {mangaData?.chapterList?.map((chapter, index) => {
          return (
            <Link to={`/manga/${mangaId}/${chapter.id}`}>
              <div
                key={chapter.id}
                className="flex items-center justify-start w-full px-2 py-2 mt-1 text-xl font-semibold bg-gray-100 rounded"
              >
                <Text>{chapter.name}</Text>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default SingleManga;
