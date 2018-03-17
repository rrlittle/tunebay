import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./css/App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchPage } from "./components/SearchPage";
import { SearchesStore } from "./stores/SearchesStore";

class App extends Component {
  render() {
    return (
      <div className="site">
        <Header title="TuneBay" imageUrl="" headers={[]} />
        <div className="site-content">
          <SearchPage searchesStore={new SearchesStore()} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
