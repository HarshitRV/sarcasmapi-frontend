import React from "react";

const Spinner = props => {
    return (
        <div className="d-flex align-items-center text-primary">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    )
}

export default Spinner