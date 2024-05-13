import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
