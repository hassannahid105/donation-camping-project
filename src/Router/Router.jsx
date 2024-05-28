import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import DonationDetails from "../component/DonationDetails/DonationDetails";
import Home from "../pages/Home/Home";
import DonationPage from "../pages/DonationPage/DonationPage";
import Statistics from "../pages/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donations.json"),
      },
      {
        path: "/donation",
        element: <DonationPage></DonationPage>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },

      {
        path: "/donationcard/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("/donations.json"),
      },
    ],
  },
]);
export default router;
