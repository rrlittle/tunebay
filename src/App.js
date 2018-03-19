import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./css/App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { RootStore } from "./stores/RootStore";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  state = { store: new RootStore() };
  render() {
    const { store } = this.state;
    const { getPage, getNavs } = store;
    return (
      <BrowserRouter>
        <div className="site">
          <Header
            title="TuneBay"
            imageUrl={`${process.env.PUBLIC_URL}/tunebay.png`}
            headers={getNavs()}
          />
          <div className="site-content">
            <Route render={getPage} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
