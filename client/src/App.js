import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NavBar from "./components/home/NavBar";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import { TemplateProvider } from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import ItemPage from "./components/itempage/Itempage";
import { Box } from "@material-ui/core";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
            <Box style={{ marginTop: 55 }}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/item/:id" element={<ItemPage />} />
              </Routes>
            </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
