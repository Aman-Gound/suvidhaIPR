import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import FAQ from "./Components/FAQ";
import ContactForm from "./Components/ContactForm";
import Copyrightservices from "./Routescomponents/Copyrightservices";
import Howitworks from "./Routescomponents/Howitworks";
import PatentServices from "./Routescomponents/PatentServices";
import Whysuvidha from "./Routescomponents/Whysuvidha";
import TrackStatus from "./Routescomponents/TrackStatus";
import WhatsAppButton from "./Components/Whatsapp";
import Footer from "./Components/Footer";
const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
const ErrorPage = () => (
  <main className="p-8 text-center">
    <h1 className="text-2xl font-bold">Page not found</h1>
    <p className="mt-2">The page you requested does not exist.</p>
  </main>
);

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/howitworks",
        element: <Howitworks />,
      },
      {
        path: "/copyrightservices",
        element: <Copyrightservices />,
      },
      {
        path: "/patentservices",
        element: <PatentServices />,
      },
      {
        path: "/whysuvidha",
        element: <Whysuvidha />,
      },

      {
        path: "/faqs",
        element: <FAQ />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
      {
        path: "/trackstatus",
        element: <TrackStatus />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={Approuter} />;

export default App;
