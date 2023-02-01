import "./App.css";
import { Route } from "react-router-dom";
import React from "react";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import PokemonDetail from "./components/PokemonDetail";
import CreatePokemon from "./components/CreatePokemon";


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Route exact path={"/"} component={LandingPage} />
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/pokemons/:id"} component={PokemonDetail} />
        <Route exact path={"/createPokemon"} component={CreatePokemon} />
      </div>
    </React.Fragment>
  );
}

export default App;
