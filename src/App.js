import "./App.css";
import React from "react";
import {Route} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import {createUserProfileDocument} from "./firebase/firebase.utils";
import {auth} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(userSnapshot => {
                    this.setState({
                        currentUser: {
                            id: userSnapshot.id,
                            ...userSnapshot.data(),
                        }
                    })
                });

                console.log(this.state)
            } else {
                this.setState({currentUser: null,})
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Route exact path={'/'} component={HomePage}/>
                <Route exact path={'/shop'} component={ShopPage}/>
                <Route exact path={'/signin'} component={SignInAndSignUpPage}/>
            </div>
        );
    }


}

export default App;
