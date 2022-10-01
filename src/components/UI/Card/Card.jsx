import React from "react";

// Styles
import styles from "./Card.module.css"

const Card = props => {
    return (
        <React.Fragment>
            <div className={`card ${styles["card-sm"]}`}>
                {props.children}
            </div>
        </React.Fragment >
    );
}

export default Card;