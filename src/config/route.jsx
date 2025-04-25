import RootLayout from "../layout/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import Career_view from "../pages/Career/Career_view";
import HeroSectionView from "../pages/hero_section/hero_section.view";
import Success_view from "../pages/SuccessStories/Success_view";
import Aboutus_view from "../pages/AboutUs/Aboutus_view";
import Our_view from "../pages/OurAffiliates/Our_view";
import Certificate_view from "../pages/Certificate/Certificate_view";
import Leadership_view from "../pages/LeadershipTeam/Leadership_view";
import Contact_view from "../pages/ContactUs/Contact_view";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "hero",
        element: <HeroSectionView />,
      },
      {
        path: "core.webp",
        element: <HeroSectionView />,
      },

      {
        path: "career",
        element: <Career_view />,
      },

      {
        path: "about",
        element: <Aboutus_view />,
      },

      {
        path: "our",
        element: <Our_view />,
      },
      {
        path: "SuccessStories",
        element: <Success_view />,
      },
      {
        path: "Certificate",
        element: <Certificate_view />,
      },
      {
        path: "LeadershipTeam",
        element: <Leadership_view />,
      },
      {
        path: "contact",
        element: <Contact_view />,
      },
    ],
  },
]);
