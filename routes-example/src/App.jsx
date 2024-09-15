import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout from "./components/HostLayout"
import HostVans from "./pages/Host//HostVans"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPrice"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import HostVanDetails from "./pages/Host/HostVanDetails"
import NotFound from "./pages/NotFound"



// import HostVanLayout from "./components/HostVanLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />
        <Route path="host" element={<HostLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetails />} >
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>

        </Route>
        <Route path="*" element={<NotFound />} />

      </Route>

  )
);


import './App.css'
import "./server"



function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
