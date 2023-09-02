import React from "react";

const HomePage = React.lazy(() => import("../compnents/HomePage/HomePage"));
const AllDepartments = React.lazy(
  () => import("../compnents/pages/All Departments/AllDepartments")
);
const FeatureProducts = React.lazy(
  () => import("../compnents/pages/FeatureProducts/FeatureProducts")
);
const TopProducts = React.lazy(
  () => import("../compnents/pages/TopProducts/TopProducts")
);
const WishList = React.lazy(
  () => import("../compnents/pages/WishList/WishList")
);
const ContactUs = React.lazy(
  () => import("../compnents/pages/ContactUs/ContactUs")
);

const IndexRoutes = [
  { path: "/", component: HomePage },
  { path: "/all_departments", component: AllDepartments },
  { path: "/feature_Products", component: FeatureProducts },
  { path: "/top_products", component: TopProducts },
  { path: "/wish_list", component: WishList },
  { path: "/contact_us", component: ContactUs },
];

export { IndexRoutes };
