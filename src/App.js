import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-daisyui";
import Navigation from "./Components/Navigation/Navigation";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import { useContext } from "react";
import { MyThemeContext } from "./Contexts/ThemeCntext/ThemeChangeContext";

function App() {
  const { lightMode } = useContext(MyThemeContext);

  return (
    <div className={lightMode ? "App" : "App-dark"}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
