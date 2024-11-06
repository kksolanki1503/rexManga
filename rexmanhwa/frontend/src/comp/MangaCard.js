import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const MangaCard = ({
  loading = false,
  image = "",
  title = "",
  chapter = "",
  view = "",
  description = "",
}) => {
  //   description = description.slice(0, 60) + " ...";
  return (
    <Card
      loading={loading}
      hoverable
      // style={{
      //   width: 240,
      // }}
      className=" w-[150px] md:w-[240px] "
      cover={<img alt={image} src={image} loading="lazy" />}
    >
      <Meta title={title} className="" />

      <div className="line-clamp-2 text-[#8c8c8c]">{description}</div>
      <div className="flex flex-col mt-2 md:flex-row md:justify-between">
        {chapter && (
          <span>
            <b>Ch</b> : {chapter}
          </span>
        )}
        {view && (
          <span>
            <b>View</b> : {view}
          </span>
        )}
      </div>
    </Card>
  );
};
export default MangaCard;
