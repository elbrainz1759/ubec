import Starter from "../views/starter/starter.jsx";
// ui components
import Alerts from "../views/ui-components/alert.jsx";
import Badges from "../views/ui-components/badge.jsx";
import Buttons from "../views/ui-components/button.jsx";
import Cards from "../views/ui-components/cards.jsx";
import LayoutComponent from "../views/ui-components/layout.jsx";
import PaginationComponent from "../views/ui-components/pagination.jsx";
import PopoverComponent from "../views/ui-components/popover.jsx";
import TooltipComponent from "../views/ui-components/tooltip.jsx";
import LiveAuctions from "./../views/ui-components/liveAuctions";
import ViewBid from "./../views/ui-components/viewBid";
import MyBid from "./../views/ui-components/myBid";
import ApprovedProjects from "./../views/ui-components/approvedProjects";
import NewProject from "../views/ui-components/newProject";
import CompletedProjects from "./../views/ui-components/completedProjects";
import Companies from "./../views/ui-components/companies";
import ProjectsAdmin from "./../views/ui-components/projectsAdmin";
import Bids from "./../views/ui-components/bids";
import Login from "./../views/ui-components/login";
import Register from "./../views/ui-components/register";

var ThemeRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ti-loop",
    component: Starter,
  },
  {
    path: "/liveAuction",
    name: "Live Auctions",
    icon: "mdi mdi-comment-processing-outline",
    component: LiveAuctions,
  },
  {
    path: "/myBids",
    name: "My Bids",
    icon: "mdi mdi-arrange-send-backward",
    component: MyBid,
  },
  {
    path: "/approvedProjects",
    name: "Approved Projects",
    icon: "mdi mdi-toggle-switch",
    component: ApprovedProjects,
  },
  {
    path: "/completedProjects",
    name: "Completed Projects",
    icon: "mdi mdi-credit-card-multiple",
    component: CompletedProjects,
  },
  {
    path: "/newProject",
    name: "New Project",
    icon: "mdi mdi-apps",
    component: NewProject,
  },
  {
    path: "/companies",
    name: "Company Registration",
    icon: "mdi mdi-priority-high",
    component: Companies,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "mdi mdi-pencil-circle",
    component: ProjectsAdmin,
  },
  {
    path: "/ui-components/tooltip",
    name: "Bids",
    icon: "mdi mdi-image-filter-vintage",
    component: Bids,
  },
  {
    path: "/viewBid",
    name: "View Bid",
    icon: "NA",
    component: ViewBid,
  },
  {
    path: "/login",
    name: "Login",
    icon: "NA",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    icon: "NA",
    component: Register,
  },
  { path: "/", pathTo: "/dashboard", name: "Dashboard", redirect: true },
];
export default ThemeRoutes;
