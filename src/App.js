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
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import Products from './pages/Products';
import NotFound from './pages/Page404';
import DashboardLayoutFree from "./layouts/dashboard/DashboardFree";

export default function App() {

    return (
        <ThemeConfig>
            <Provider store={configureStore}>
                <AuthProvider>
                    <ScrollToTop/>
                    <GlobalStyles/>
                    <BaseOptionChartStyle/>
                    <Routes>
                        {/*         <Route element={<ProtectedRoute/>}>
                            <Route index element={<DashboardLayoutAuth><DashboardApp/></DashboardLayoutAuth>}/>
                            <Route path="dashboard/app"
                                   element={<DashboardLayoutAuth><DashboardApp/></DashboardLayoutAuth>}/>
                            <Route path="dashboard/user"
                                   element={<DashboardLayoutAuth admin={true}><User/></DashboardLayoutAuth>}/>
                            <Route path="dashboard/Company"
                                   element={<DashboardLayoutAuth admin={true}><Company/></DashboardLayoutAuth>}/>
                            <Route path="dashboard/uploadFile"
                                   element={<DashboardLayoutAuth admin={true}><UploadFile/></DashboardLayoutAuth>}/>
                            <Route path="dashboard/addNews"
                                   element={<DashboardLayoutAuth admin={true}><NewPost/></DashboardLayoutAuth>}/>
                        </Route>*/}
                        <Route path="dashboard/products"
                               element={<DashboardLayoutFree admin={true}><Products/></DashboardLayoutFree>}/>
                        {/*      <Route path="dashboard/homepage"
                               element={<DashboardLayoutFree admin={false}><Homepage/> </DashboardLayoutFree>}/>
                        <Route path="dashboard/blog"
                               element={<DashboardLayoutFree admin={false}><Index/></DashboardLayoutFree>}/>*/}
                        {/* <Route path="dashboard/blog/item/:id"
                               element={<DashboardLayoutFree admin={false}><BlogDetails/> </DashboardLayoutFree>}/>*/}
                        {/*                        <Route path="detaliiProdus/:id"
                               element={<DashboardLayoutFree admin={false}>
                                   <ProductDetails/>
                               </DashboardLayoutFree>}/>
                        <Route path="login" element={<LogoOnlyLayout><Login/></LogoOnlyLayout>}/>
                        <Route path="register" element={<LogoOnlyLayout><Register/></LogoOnlyLayout>}/>*/}
                        <Route path="*" element={<LogoOnlyLayout><NotFound/></LogoOnlyLayout>}/>
                    </Routes>
                </AuthProvider>
            </Provider>
        </ThemeConfig>
    );
}