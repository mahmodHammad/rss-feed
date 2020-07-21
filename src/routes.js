// https://first-wishes.com/bday-wishes?n=heba

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

// core components/views for Admin layout
import FeedPage from "./views/Feed/Feed.js";
import SettingPage from "./views/Setting/Setting.js";

const dashboardRoutes = [
  {
    path: "/feeds",
    name: "Feeds",
    icon: Dashboard,
    component: FeedPage,
    layout: "/feed",
  },
  {
    path: "/setting",
    name: "Setting",
    icon: Person,
    component: SettingPage,
    layout: "/setting",
  },

];

export default dashboardRoutes;
