import { Routes, Route } from "react-router-dom";
import { faBooks, faHome, faUsers } from "@fortawesome/pro-regular-svg-icons";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Page404 from "../views/errors/Page404";
import PageRequestPermission from "../views/errors/PageRequestPermission";

import PageLogin from "../views/public/PageLogin/PageLogin";

import PageEditProfile from "../views/private/PageEditProfile/PageEditProfile";
import PageDashboard from "../views/private/PageDashboard/PageDashboard";

import PageRegister from "../views/public/PageRegister/PageRegister";
import PageCategoryForm from "../views/private/PageInventory/PageCategoryForm";
import PageUser from "../views/private/PageUser/PageUser";

import PageInventory from "../views/public/PageInventory/PageInventory";
import PageRoles from "../views/private/PageUser/components/AllUsercomponents/PageRoles";
import PageAllUser from "../views/private/PageUser/components/AllUsercomponents/PageAllUser";


export default function RouteList() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PublicRoute
                        title="LOGIN"
                        pageId="PageLogin"
                        component={PageInventory}
                    />
                }
            />
            <Route
                path="/login"
                element={
                    <PublicRoute
                        title="LOGIN"
                        pageId="PageLogin"
                        component={PageLogin}
                    />
                }
            />
 
            <Route
                path="/signup"
                element={
                    <PublicRoute
                        title="LOGIN"
                        pageId="PageLogin"
                        component={PageRegister}
                    />
                }
            />

            <Route
                path="/edit-profile"
                element={
                    <PrivateRoute
                        moduleName="Edit Profile"
                        title="User"
                        subtitle="VIEW / EDIT"
                        pageId="PageUserProfile"
                        pageHeaderIcon={faUsers}
                        breadcrumb={[
                            {
                                name: "Dashboard",
                                link: "/dashboard",
                            },
                            {
                                name: "Edit Profile",
                            },
                        ]}
                        component={PageEditProfile}
                    />
                }
            />

            <Route
                path="/dashboard"
                element={
                    <PrivateRoute
                        // moduleCode="M-01"
                        moduleName="Home"
                        title="Home"
                        subtitle="ADMIN"
                        pageId="PageHome"
                        pageHeaderIcon={faHome}
                        breadcrumb={[
                            {
                                name: "Home",
                            },
                        ]}
                        component={PageDashboard}
                    />
                }
            />

            {/* users */}
            <Route
                path="/inventory/category"
                element={
                    <PrivateRoute
                        // moduleCode="M-02"
                        moduleName="Inventory Category"
                        title="Category"
                        subtitle="VIEW / EDIT"
                        pageId="Category"
                        pageHeaderIcon={faUsers}
                        breadcrumb={[
                            {
                                name: "Inventory",
                                link: "/dashboard",
                            },
                            {
                                name: "Users",
                            },
                            {
                                name: "Current",
                            },
                        ]}
                        component={PageCategoryForm}
                    />
                }
            />

            <Route
                path="/users/users"
                element={
                    <PrivateRoute
                        // moduleCode="M-02"
                        moduleName="User"
                        title="User"
                        subtitle="VIEW / EDIT"
                        pageId="User"
                        pageHeaderIcon={faUsers}
                        breadcrumb={[
                            {
                                name: "Inventory",
                                link: "/dashboard",
                            },
                            {
                                name: "Users",
                            },
                            {
                                name: "Users",
                            },
                        ]}
                        component={PageAllUser}
                    />
                }
            />
            <Route
                path="/users/roles"
                element={
                    <PrivateRoute
                        // moduleCode="M-02"
                        moduleName="User"
                        title="User"
                        subtitle="VIEW / EDIT"
                        pageId="User"
                        pageHeaderIcon={faUsers}
                        breadcrumb={[
                            {
                                name: "Inventory",
                                link: "/dashboard",
                            },
                            {
                                name: "Users",
                            },
                            {
                                name: "Roles",
                            },
                        ]}
                        component={PageRoles}
                    />
                }
            />

            {/* end permission */}

            <Route
                path="/request-permission"
                element={<PageRequestPermission />}
            />

            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
