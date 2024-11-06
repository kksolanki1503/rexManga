import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import BodyLayout from "../Layout/Layout"; // Make sure this is a valid React component
import Home from "../pages/Home";
import SingleManga from "../pages/SingleManga";
import SingleChapter from "../pages/SingleChapter";
import SearchResult from "../pages/SearchResult";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BodyLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/manga/:mangaId" element={<SingleManga />} />
      <Route path="/manga/:mangaId/:chapterId" element={<SingleChapter />} />
      <Route path="/search/:searchName" element={<SearchResult />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
