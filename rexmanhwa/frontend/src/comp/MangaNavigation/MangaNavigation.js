// import { Button, Dropdown } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MangaNavigation = ({ chapterListIds }) => {
  const navigate = useNavigate();
  const { mangaId, chapterId } = useParams();

  const [items, setItems] = useState([]);
  const handleMenuClick = (e) => {
    const futureChapterId = e.key;
    navigate(`/manga/${mangaId}/${futureChapterId}`);
  };

  useEffect(() => {
    if (chapterListIds?.length > 0) {
      let item = chapterListIds?.map((data) => {
        if (data.id === chapterId)
          return {
            label: data.name,
            key: data.id,
            danger: true,
          };

        return {
          label: data.name,
          key: data.id,
        };
      });
      setItems(item);
    }
  }, [chapterListIds]);

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="flex flex-col w-full gap-2 my-2">
      <div className="mx-auto w-fit ">
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              {chapterId}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button type="primary" size="middle">
          Prev
        </Button>
        <Button type="primary" size="middle">
          Next
        </Button>
      </div>
    </div>
  );
};
export default MangaNavigation;
