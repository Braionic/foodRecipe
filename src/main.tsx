import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout.tsx";
import Homepage from "./screens/Homepage.tsx";
import About from "./screens/About.tsx";
import Context from "./component/Context.tsx";
import RecipeDetails from "./screens/RecipeDetails.tsx";
import Favourites from "./screens/Favourites.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />}></Route>
            <Route path="/:id" element={<RecipeDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourites" element={<Favourites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context>
  </React.StrictMode>
);
