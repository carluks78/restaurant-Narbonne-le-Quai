import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Restaurant } from "./pages/Restaurant";
import { Menu } from "./pages/Menu";
import { Reservation } from "./pages/Reservation";
import { Gallery } from "./pages/Gallery";
import { Reviews } from "./pages/Reviews";
import { Contact } from "./pages/Contact";
import { VisiterNarbonne } from "./pages/VisiterNarbonne";
import { Events } from "./pages/Events";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "restaurant", Component: Restaurant },
      { path: "menu", Component: Menu },
      { path: "reservation", Component: Reservation },
      { path: "galerie", Component: Gallery },
      { path: "avis", Component: Reviews },
      { path: "visiter-narbonne", Component: VisiterNarbonne },
      { path: "events", Component: Events },
      { path: "contact", Component: Contact },
    ],
  },
]);
