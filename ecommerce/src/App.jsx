// import HomePage from "./compnents/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AllDepartments from "./compnents/pages/All Departments/AllDepartments";
// import FeatureProducts from "./compnents/pages/FeatureProducts/FeatureProducts";
// import TopProducts from "./compnents/pages/TopProducts/TopProducts";
// import WishList from "./compnents/pages/WishList/WishList";
// import ContactUs from "./compnents/pages/ContactUs/ContactUs";
// import Teeeest from "./compnents/pages/Teeeeest";
import { Box } from "@chakra-ui/react";
import {IndexRoutes} from './routes/Routes';
import MiddlewareRoute from "./compnents/MiddlewareRoute";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/All Departments" element={<AllDepartments />} />
    //     <Route path="/Feature Products" element={<FeatureProducts />} />
    //     <Route path="/Top Products" element={<TopProducts />} />
    //     <Route path="/Wish List" element={<WishList />} />
    //     <Route path="/Contact Us" element={<ContactUs />} />
    //     <Route path="/Contact Us" element={<Teeeest/>} />
    //   </Routes>
    // </Router>

    <Box>
      <Router>
        <Routes>
          {IndexRoutes.map((prop, index) =>(
            <Route path={prop.path} key={index} element={<MiddlewareRoute {...prop}/>}/>
          ))}
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
