import LoginPage from "../components/pages/login/LoginPage";
import NavItemModel from "../models/NavItemModel";

const UsersRouteElements: NavItemModel[] = [
    {
        text: 'Acceder',
        path: 'login',
        page: <LoginPage />
    }
];

export default UsersRouteElements;