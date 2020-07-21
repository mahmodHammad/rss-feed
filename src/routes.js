// https://first-wishes.com/bday-wishes?n=heba

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

// core components/views for Admin layout
import FeedPage from "./views/Feed/Feed.js";
import SettingPage from "./views/Setting/Setting.js";
import NotFound from "./views/notfound/NotFound.js";

const dashboardRoutes = [
  {
    path: "/feeds",
    name: "Feeds",
    icon: Dashboard,
    component: FeedPage,
  },
  {
    path: "/setting",
    name: "Setting",
    icon: Person,
    component: SettingPage,
  },
  {
    path: "/notfound",
    name: "notfound",
    icon: Person,
    component: NotFound,
  },
];

export default dashboardRoutes;
