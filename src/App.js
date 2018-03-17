import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./css/App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchPage } from "./components/SearchPage";
import { SearchesStore } from "./stores/SearchesStore";

const thumb1 = "https://i.ytimg.com/vi/R8XAlSp838Y/default.jpg";

const searches = [
  {
    id: 1,
    query: "Dog wrestling",
    results: [
      { id: "eUkSTnUK_T0", active: false, thumbnail: thumb1, title: "FOOBAR3" },
      {
        id: "2g811Eo7K8U",
        active: true,
        thumbnail: thumb1,
        title: "FOOBAR2"
      },
      { id: "P_SlAzsXa7E", active: false, thumbnail: thumb1, title: "FOOBAR4" }
    ],
    activeResult: "eUkSTnUK_T0"
  }
];

class App extends Component {
  render() {
    return (
      <div className="site">
        <Header title="TuneBay" imageUrl="" headers={[]} />
        <div className="site-content">
          <SearchPage searchesStore={new SearchesStore(searches)} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
