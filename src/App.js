// routes
// import Router from './routes';
import {Route, Routes} from 'react-router-dom';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import {BaseOptionChartStyle} from './components/charts/BaseOptionChart';
import {AuthProvider} from "./Auth";
// ----------------------------------------------------------------------
import {configureStore} from "./store/configureStore";
import {Provider} from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import DashboardApp from "./pages/DashboardApp";
import Products from './pages/Products';
import Index from './pages/Blog';
import User from './pages/User';
import Company from './pages/Company';
import NotFound from './pages/Page404';
import DashboardLayout from "./layouts/dashboard";
import {ProtectedRoute} from "./PrivateRoute";
import UploadFile from './pages/UploadFile';
import NewPost from './pages/Blog/NewPost';
import ProductDetails from './pages/ProductDetails';
import BlogDetails from './pages/Blog/BlogDetails'

export default function App() {

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
                                   element={<DashboardLayout admin={false}><Index/></DashboardLayout>}/>
                            <Route path="dashboard/uploadFile"
                                   element={<DashboardLayout admin={true}><UploadFile/></DashboardLayout>}/>
                            <Route path="dashboard/addNews"
                                   element={<DashboardLayout admin={true}><NewPost/></DashboardLayout>}/>
                            <Route path="dashboard/blog/item/:id"
                                   element={<DashboardLayout admin={false}><BlogDetails/> </DashboardLayout>}/>
                        </Route>
                        <Route path="login" element={<LogoOnlyLayout><Login/></LogoOnlyLayout>}/>
                        <Route path="register" element={<LogoOnlyLayout><Register/></LogoOnlyLayout>}/>
                        <Route path="detaliiProdus/:id"
                               element={<DashboardLayout admin={false}><ProductDetails/></DashboardLayout>}/>
                        <Route path="404" element={<LogoOnlyLayout><NotFound/></LogoOnlyLayout>}/>
                    </Routes>
                </AuthProvider>
            </Provider>
        </ThemeConfig>
    );
}