import React from "react";
import Footer from "./components/Layout/Footer";

// Components
import Header from "./components/Layout/Header";
import Sarcasm from "./components/Sarcasm/Sarcasm";

const App = () => {
  return (
    <React.Fragment>
      <main className="container">
      <Header />
    
        <Sarcasm 
          sarcasm="I am not great at advice can I interst you in sarcastic comment?"
          endpoint="https://sarcasmapi.onrender.com/"
        />
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;