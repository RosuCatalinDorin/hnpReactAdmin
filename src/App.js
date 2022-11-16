// routes
// import Router from './routes';
import {Routes, Route} from 'react-router-dom';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import {BaseOptionChartStyle} from './components/charts/BaseOptionChart';
import {AuthProvider, useAuth} from "./Auth";
// ----------------------------------------------------------------------
import {configureStore} from "./store/configureStore";
import {Provider} from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import DashboardApp from "./pages/DashboardApp";
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import Company from './pages/Company';
import NotFound from './pages/Page404';
import DashboardLayout from "./layouts/dashboard";
import {ProtectedRoute} from "./PrivateRoute";
import UploadFile from './pages/UploadFile';
import ProductDetails from './pages/ProductDetails';
import Acasa from "./pages/Home";
export default function App()
{

    return (
        <ThemeConfig>
            <Provider store={configureStore}>
                <AuthProvider>
                    <ScrollToTop/>
                    <GlobalStyles/>
                    <BaseOptionChartStyle/>
                    <Routes>
                        <Route element={<ProtectedRoute/>}>
                            <Route index element={<DashboardLayout><DashboardApp/></DashboardLayout>}/>
                            <Route path="dashboard/app"
                                   element={<DashboardLayout><DashboardApp/></DashboardLayout>}/>
                            <Route path="dashboard/user"
                                   element={<DashboardLayout admin={true}><User/></DashboardLayout>}/>
                            <Route path="dashboard/Company"
                                   element={<DashboardLayout admin={true}><Company/></DashboardLayout>}/>
                            <Route path="dashboard/products"
                                   element={<DashboardLayout admin={true}><Products/></DashboardLayout>}/>
                            <Route path="dashboard/blog"
                                   element={<DashboardLayout admin={true}><Blog/></DashboardLayout>}/>
                            <Route path="dashboard/uploadFile"
                                   element={<DashboardLayout admin={true}><UploadFile/></DashboardLayout>}/>
                            <Route path="dashboard/home"
                                   element={<DashboardLayout admin={true}><Acasa/></DashboardLayout>}/>
                        </Route>
                        <Route path="login" element={<LogoOnlyLayout><Login/></LogoOnlyLayout>}/>
                            <Route path="register" element={<LogoOnlyLayout><Register/></LogoOnlyLayout>}/>
                            <Route path="detaliiProdus/:id" element={<DashboardLayout admin={false}><ProductDetails/></DashboardLayout>}/>
                            <Route path="404" element={<LogoOnlyLayout><NotFound/></LogoOnlyLayout>}/>
                    </Routes>
                </AuthProvider>
            </Provider>
        </ThemeConfig>
);
}
