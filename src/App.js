import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import VenderForm from "./scenes/form/venderform";
import Navbar from "./scenes/global/Navbar";
import Product from "./scenes/product/product";
import CreateProduct from "./scenes/product/createProduct";
import VenderProfile from "./scenes/form/venderprofile";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Navbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
              <Route path="/create" element={<CreateProduct />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/changepassword" element={<Form />} />
              <Route path="/venderprofile" element={<VenderProfile />} />
              <Route path="/venderform" element={<VenderForm />} />
              <Route path="/invoices" element={<Invoices />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
