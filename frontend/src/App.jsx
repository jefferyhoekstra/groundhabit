// IMPORT
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Hero from "./components/Hero/Hero";
import SocialApp from "./components/SocialApp/SocialApp";
import Form from "./components/Form/Form";
import AppLayout from "./AppLayout";

// IMAGE

// CSS
import "./App.css";

// FUNCTION
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={AppLayout}></Route>
        </Routes>
      </Router>
    </>
  );
}
