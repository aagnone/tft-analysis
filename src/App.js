import React from "react";
import BoardContextProvider from "./context/BoardContext";
import ChampionContextProvider from "./context/Champions";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CompBuilder from "./pages/CompBuilder";
import Comps from "./pages/Comps";
import Home from './pages/Home'
import Footer from "./components/Footer";
import MatchAnalysis from "./pages/MatchAnalysis";
import AddSectionRevised from './components/AddSectionRevised'

const App = () => {
  return (
    <div>
      <Router>
        <ChampionContextProvider>
          <BoardContextProvider>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/builder">Builder</Link>
              <Link to="/analysis">Analysis</Link>
              <Link to="/comps">Comps</Link>
              <Link to="/guides">Guides</Link>
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/builder" component={CompBuilder} />
              <Route path="/analysis" component={MatchAnalysis} />
              <Route path="/comps" component={Comps} />
              <Route path="/guides" component={Home} />
            </Switch>
            <AddSectionRevised />
          </BoardContextProvider>
        </ChampionContextProvider>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
