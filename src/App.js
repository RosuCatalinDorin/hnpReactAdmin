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
import DashboardApp from "./pages/DashboardApp/DashboardApp";
import Products from './pages/Products';
import Index from './pages/Blog';
import User from './pages/User';
import Company from './pages/Company';
import NotFound from './pages/Page404';
import DashboardLayoutAuth from "./layouts/dashboard/DashboardAuth";
import {ProtectedRoute} from "./PrivateRoute";
import UploadFile from './pages/UploadFile';
import NewPost from './pages/Blog/NewPost';
import ProductDetails from './pages/ProductDetails';
import BlogDetails from './pages/Blog/BlogDetails'
import DashboardLayoutFree from "./layouts/dashboard/DashboardFree";
import Homepage from "./pages/Homepage";
import Order from './pages/Order/Order';
import OrderDetails from "./pages/Order/OrderDetails";

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
                            <Route path="dashboard/user"
                                   element={<DashboardLayoutAuth admin={true}><User/></DashboardLayoutAuth>}/>
                            <Route path="dashboard/Company"
                                   element={<DashboardLayoutAuth admin={true}><Company/></DashboardLayoutAuth>}/>
                            <Route path="dashboard/uploadFile"
                                   element={<DashboardLayoutAuth admin={true}><UploadFile/></DashboardLayoutAuth>}/>
                            <Route path="dashboard/addNews"
                                   element={<DashboardLayoutAuth admin={true}><NewPost/></DashboardLayoutAuth>}/>
                            <Route path="dashboard/orderDetails/:orderId"
                                   element={<DashboardLayoutAuth admin={true}><OrderDetails/></DashboardLayoutAuth>}/>
                        </Route>
                        <Route index element={<DashboardLayoutFree><Homepage/></DashboardLayoutFree>}/>
                        <Route path="dashboard/homepage"
                               element={<DashboardLayoutFree admin={false}><Homepage/> </DashboardLayoutFree>}/>
                        <Route path="dashboard/app"
                               element={<DashboardLayoutFree><DashboardApp/></DashboardLayoutFree>}/>
                        <Route path="dashboard/products"
                               element={<DashboardLayoutFree admin={true}><Products/></DashboardLayoutFree>}/>

                        <Route path="dashboard/blog"
                               element={<DashboardLayoutFree admin={false}><Index/></DashboardLayoutFree>}/>
                        <Route path="dashboard/blog/item/:id"
                               element={<DashboardLayoutFree admin={false}><BlogDetails/> </DashboardLayoutFree>}/>
                        <Route path="dashboard/cartDetails"
                               element={<DashboardLayoutFree admin={false}><Order/></DashboardLayoutFree>}/>
                        <Route path="detaliiProdus/:name/:id"
                               element={<DashboardLayoutFree admin={false}>
                                   <ProductDetails/>
                               </DashboardLayoutFree>}/>
                        <Route path="login" element={<LogoOnlyLayout><Login/></LogoOnlyLayout>}/>
                        <Route path="register" element={<LogoOnlyLayout><Register/></LogoOnlyLayout>}/>
                        <Route path="404" element={<LogoOnlyLayout><NotFound/></LogoOnlyLayout>}/>
                    </Routes>
                </AuthProvider>
            </Provider>
        </ThemeConfig>
    );
}