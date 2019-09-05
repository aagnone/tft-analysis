import React from "react";
import BoardContextProvider from "./context/BoardContext";
import ChampionContextProvider from "./context/Champions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CompBuilder from "./pages/CompBuilder";

const App = () => {
  return (
    <div>
      <Router>
        <ChampionContextProvider>
          <BoardContextProvider>
            <Route path="/" component={CompBuilder} />
          </BoardContextProvider>
        </ChampionContextProvider>
      </Router>
    </div>
  );
};

export default App;
