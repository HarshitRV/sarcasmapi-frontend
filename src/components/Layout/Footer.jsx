import React from "react";

const Footer = props => {
    return (
        <React.Fragment>
            <footer className="text-center mt-3">
                <p className="my-0">
                    <a href="https://github.com/HarshitRV/sarcasm-api" className="text-decoration-none">
                        GitHub
                    </a>
                </p>
                <p className="my-0">
                    <a href="https://twitter.com/hrv_vishwakarma" className="text-decoration-none">
                        Twitter
                    </a>
                </p>
                <p className="my-0">
                    <a href="https://www.linkedin.com/in/harshitrv/" className="text-decoration-none">
                        © HarshitRV {new Date().getFullYear()}
                    </a>
                </p>
            </footer>
        </React.Fragment>
    );
}

export default Footer;