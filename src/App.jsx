import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Mission from "./Components/Mission/Mission";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  var client_id =
    "28129239044-8k33sm43ff8qilml9tej6f3jorm9gnmh.apps.googleusercontent.com";
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={client_id}>
        <BrowserRouter>
          <Navbar />
          <Footer />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </AuthProvider>
  );
}

export default App;
