import {Route} from "../models/route";
import RatesPage from "../pages/RatesPage";
import ConverterPage from "../pages/ConverterPage";

export const publicRoutes: Route[] = [
    {path: '/', component: ConverterPage, name: "Home"},
    {path: '/rates', component: RatesPage, name: "Posts"},
];