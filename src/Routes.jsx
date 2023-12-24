import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


const Login = lazy(() => import("../src/Components/Login"))
const Services = lazy(() => import("./Components/Services"))
const Register = lazy(() => import("./Components/GHCServices/Register"))


const LandingPage = lazy(() => import("../src/Components/LandingPage"))
const ButtonColor = lazy(() => import("../src/Components/ButtonColor"))

const TradingGraph = lazy(() => import("./Components/GHCServices/TradingGraph"))
const StockData = lazy(() => import("./Components/GHCServices/StockData"))
const TableView = lazy(() => import("./Components/GHCServices/TableView"))
const ContactUs = lazy(() => import("./Components/GHCServices/ContactUs"))
const Subscriptions = lazy(() => import("./Components/GHCServices/Subscriptions"))
const AboutUs = lazy(() => import("./Components/GHCServices/AboutUs"))
const ProfilePage = lazy(() => import("./Components/GHCServices/ProfilePage"))

const RoutesComponent = () => (
    <Router>
        <Suspense fallback={<center style={{ marginTop: 300 }}><h3>Loading...</h3></center>}>
            <Routes>
                <Route path="/" exact={true} element={<LandingPage />} />
                <Route path="/login" exact={true} element={<Login></Login>} />
                <Route path="/register" exact={true} element={<Register />} />
                <Route path="/services" exact={true} element={<Services />} />
                <Route path="/btn" exact={true} element={<ButtonColor />} />

                <Route path="/tradinggraph" exact={true} element={<TradingGraph />} />
                <Route path="/stockdata" exact={true} element={<StockData />} />
                <Route path="/tableview" exact={true} element={<TableView />} />
                <Route path="/contactus" exact={true} element={<ContactUs />} />
                <Route path="/subscriptions" exact={true} element={<Subscriptions />} />
                <Route path="/aboutus" exact={true} element={<AboutUs />} />
                <Route path="/profilepage" exact={true} element={<ProfilePage />} />


            </Routes>
        </Suspense>
    </Router>
);
export default RoutesComponent;