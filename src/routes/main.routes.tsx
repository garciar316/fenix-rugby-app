import AboutPage from "../components/pages/about/AboutPage";
import ContactPage from "../components/pages/contact/ContactPage";
import HomePage from "../components/pages/home/HomePage";
import NavItemModel from "../models/NavItemModel";

const RouteElements: NavItemModel[] = [
    {
        text: 'Inicio',
        path: 'fenix-rugby-app',
        page: <HomePage />
    },
    {
        text: 'Nosotros',
        path: 'fenix-rugby-app/nosotros',
        page: <AboutPage />
    },
    {
        text: 'Contacto',
        path: 'fenix-rugby-app/contacto',
        page: <ContactPage />
    }
];

export default RouteElements;