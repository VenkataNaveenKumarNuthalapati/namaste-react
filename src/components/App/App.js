import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "./App.css";
import Footer from "../Footer/Footer";

const App = () => {
    return (
        <Provider store={appStore}>
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </Provider>
    );
};

export default App;
