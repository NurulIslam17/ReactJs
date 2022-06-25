import React from "react";
import { BrowserRouter} from "react-router-dom";
import MenuBar from "./components/Router//MenuBar";
import RouteCom from "./components/Router/RouteComp";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <RouteCom />
    </BrowserRouter>
  );
}
export default App;
