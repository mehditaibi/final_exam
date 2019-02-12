import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import SignInPage from "./SignInPage";
import { User, Session } from "../requests";
import AuctionIndexPage from "./AuctionIndexPage";
import AuctionShowPage from "./AuctionShowPage";
import AuctionNewPage from "./AuctionNewPage";

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: null,
            loading: true
        };
        this.getCurrentUser = this.getCurrentUser.bind(this);
        this.destroySession = this.destroySession.bind(this);
    }

    destroySession() {
        this.setState({
          currentUser: null
        });
    
        Session.destroy();
    }

    getCurrentUser() {
        User.current().then(data => {
          const { current_user: currentUser } = data;
    
          if (currentUser) {
            this.setState({ currentUser });
          }
          this.setState({ loading: false });
        });
    }

    componentDidMount() {
        this.getCurrentUser();
    }

    render(){
        const { currentUser, loading } = this.state;
        return(
            <BrowserRouter>
                <div>
                    <NavBar currentUser={currentUser} onSignOut={this.destroySession}/>
                    {loading ? (
                    <main></main>
                    ) : (
                    <Switch>
                        <Route path="/auctions/new" exact component={AuctionNewPage} />
                        <Route path="/auctions/:id" exact component={AuctionShowPage} />
                        <Route path="/sign_in" render={routeProps => (
                            <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />)}
                        />
                        <Route path="/auctions" exact component={AuctionIndexPage} />
                        <Route path="/" exact component={HomePage} />
                    </Switch> 
                    )}
                </div>
            </BrowserRouter>
        )
    }
}

export default App; 