import Discover from "@/pages/discover";
import Friend from "@/pages/friend";
import Mine from "@/pages/mine";
import Login from "components/login";
import CreatorsCenter from "components/creators-center";

const routes = [
  { path: "/", element: <Discover/> },
  {
    path: "/mine",
    element: <Mine/>,
  },
  {
    path: "/friend",
    element: <Friend/>,
  },
  {path:"/login",
    element:<Login/>
  },
  {
    path:"/creators",
    element:<CreatorsCenter/>
  }
];

export default routes;
