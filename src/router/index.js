import Discover from "@/pages/discover";
import Friend from "@/pages/friend";
import Mine from "@/pages/mine";
import Login from "components/login";
import CreatorsCenter from "components/creators-center";

const h2Style = "  pl-36 pt-2 text-sm  text-slate-600";
function Service() {
  return (
    <h2 className={h2Style}>
      Himusic provides services to users around the world.
    </h2>
  );
}

function Privacy() {
  return (
    <h2 className={h2Style}>
      {" "}
      We are committed to providing a safe environment and protecting our users'
      privacy.{" "}
    </h2>
  );
}
function Contact() {
  return (
    <h2 className={h2Style}>
      You can submit your feedback in any of these ways: <br />
      Email: support@himusic.com <br />
      Write to us: <br />
      Feedback Team, 999 Happy Street, <br />
      Los Angeles, CA, USA
    </h2>
  );
}
function Company() {
  return (
    <h2 className={h2Style}>
      With Himusic, it's easy to find the right music or podcast for every
      moment. <br />
      There are millions of tracks and episodes you can enjoy whether you're
      behind the wheel, working out, partying or relaxing. <br />
      Choose what you want to listen to, or waiting for your surprise.
    </h2>
  );
}

const routes = [
  { path: "/", element: <Discover /> },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: "/friend",
    element: <Friend />,
  },
  { path: "/login", element: <Login /> },
  {
    path: "/creators",
    element: <CreatorsCenter />,
  },
  {
    path: "/footer/*",
    element: <Discover />,
    routes: [
      {
        path: "/service",
        element: <Service />,
      },
      { path: "/privacy", element: <Privacy /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/company", element: <Company /> },
    ],
  },
];

export default routes;
