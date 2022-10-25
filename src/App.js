import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-daisyui";
import Navigation from "./Components/Navigation/Navigation";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
