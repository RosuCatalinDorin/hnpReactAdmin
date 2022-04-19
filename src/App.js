// routes
// import Router from './routes';
import {Routes, Route, Link} from 'react-router-dom';
/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom"*/
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

import DashboardLayout from "./layouts/dashboard";
import {ProtectedRoute} from "./PrivateRoute";

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
                            <Route path="dashboard/user" element={<DashboardLayout><User/></DashboardLayout>}/>
                            <Route path="dashboard/products" element={<DashboardLayout><Products/></DashboardLayout>}/>
                            <Route path="dashboard/blog" element={<DashboardLayout><Blog/></DashboardLayout>}/>
                        </Route>
                            <Route path="login" element={<LogoOnlyLayout><Login/></LogoOnlyLayout>}/>
                            <Route path="register" element={<LogoOnlyLayout><Register/></LogoOnlyLayout>}/>
                    </Routes>
                </AuthProvider>
            </Provider>
        </ThemeConfig>
);
}
