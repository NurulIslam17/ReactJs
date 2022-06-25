import React from "react";
import { BrowserRouter} from "react-router-dom";
import Search from './components/Search/Search'

function App() {
  return (
    <BrowserRouter>
      <Search/>
    </BrowserRouter>
  );
}
export default App;
