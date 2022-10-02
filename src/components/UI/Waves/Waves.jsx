import React from "react";

// CSS
import styles from "./Waves.module.css";

const Waves = () => {
    return (
        <svg className={styles.bottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,176C840,171,960,85,1080,42.7C1200,0,1320,0,1380,0L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    )
}

export default Waves;