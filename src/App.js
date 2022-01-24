import "./App.css";
import {Route} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
    return (
        <div>
            <Header/>
            <Route exact path={'/'} component={HomePage}/>
            <Route exact path={'/shop'} component={ShopPage}/>
            <Route exact path={'/signin'} component={SignInAndSignUpPage}/>
        </div>
    );
}

export default App;
