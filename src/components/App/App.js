import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Footer from "../Footer/Footer";
import "./App.css";

const App = () => {
    return (
        <Provider store={appStore}>
            <div className="scrollbar-hidden">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </Provider>
    );
};

export default App;
