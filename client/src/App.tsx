import { useRoutes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AdminProductList from "./pages/admin/product/List";
import AdminProductAdd from "./pages/admin/product/Add";
import AdminProductEdit from "./pages/admin/product/Edit";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ClientLayout from "./layouts/ClientLayout";
import Cart from "./pages/Cart";
import Homepage from "./Homepage";
import AdminCategoriesList from "./pages/admin/categories/List";
import AdminCategories from "./pages/admin/categories/Add";
const routeConfig = [
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path:"categories/list",
        element:<AdminCategoriesList/>
      },
      {
        path:"categories/add",
        element:<AdminCategories/>
      },
      {
        path:"product/categories/list",
        element:<AdminCategoriesList/>
      },
      {
        path: "product/list",
        element: <AdminProductList />,
      },
      {
        path: "product/add",
        element: <AdminProductAdd />,
      },
      {
        path: "product/edit/:id",
        element: <AdminProductEdit />,
      },
    ],
  },
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "homepage",
        element: <Homepage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
