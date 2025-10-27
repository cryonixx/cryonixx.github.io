import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Landing from "./pages/Landing";
import Bands from "./pages/Bands";
import HomePageTest from "./pages/HomePageTest";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/bandsILike", element: <Bands /> },
    // {path:"/home", element: <HomePage/>},
    { path: "/home", element: <HomePageTest /> },
    { path: "*", element: <NotFound /> },
]);
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
