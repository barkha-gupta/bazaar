import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/sonner";

import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/product.tsx";
import { CartProvider } from "./context/Cart.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <App />
          <Toaster />
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
