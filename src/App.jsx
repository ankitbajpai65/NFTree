import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider, useAuth } from "./Contexts/AuthContext";

function App() {
  var client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;
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
