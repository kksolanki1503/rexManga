import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const path = location.pathname.split("/").filter((x) => x);
  let breadCrumbPath = "";
  const isStart = path.length === 0;
  return (
    <div className="p-4">
      {isStart ? "" : <Link to={"/"}>Home</Link>}
      {path.map((name, index) => {
        breadCrumbPath += `/${name}`;
        const isLast = path.length - 1 === index;

        return isLast ? (
          <span> / {name}</span>
        ) : (
          <span>
            / <Link to={breadCrumbPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};
export default BreadCrumb;
