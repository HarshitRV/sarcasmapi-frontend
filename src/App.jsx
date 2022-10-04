import React from "react";
import Footer from "./components/Layout/Footer";

// CSS
import styles from "./App.module.css";

// Components
import Header from "./components/Layout/Header";
import Sarcasm from "./components/Sarcasm/Sarcasm";
import Waves from "./components/UI/Waves/Waves";

const App = () => {
  return (
    <React.Fragment>
      <main className={`container ${styles.center}`}>
        <Header />

        <Sarcasm
          sarcasm="I am not great at advice can I interst you in sarcastic comment?"
          endpoint="https://sarcasm-api.herokuapp.com/"
        />

      </main>
      <Footer />
      <Waves />
    </React.Fragment>
  );
}

export default App;