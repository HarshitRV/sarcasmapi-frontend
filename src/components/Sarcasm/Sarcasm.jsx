import React, {
    useState,
    useCallback,
    useEffect
} from "react";

// Components
import Spinner from "../UI/Spinners/Spinner";
import Card from "../UI/Card/Card";
import ClipBoard from "../UI/SVG/Clipboard";

const Sarcasm = props => {
    const [comment, setComment] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const refreshHandler = useCallback(async () => {
        setError(null);
        setLoading(true);
        try {
            console.log("loading...")
            const res = await fetch(props.endpoint);
            const data = await res.json();
            setComment(data.sarcasm);
        } catch (err) {
            console.log("Something went wrong!")
            console.log(err);
            setError(err.message);
        }
        setLoading(false);
    }, [props.endpoint])

    useEffect(() => {
        refreshHandler();
    }, [refreshHandler])


    let content;
    if (comment.length > 0) {
        content = <p id="sarcasm" className="card-text text-dark fw-semibold">{comment}</p>;
    }

    if (error) {
        content = error;
    }

    if (isLoading) {
        content = <Spinner />
    }
    return (
        <React.Fragment>
            <Card>
                <div className="card-header">
                    <a className="fw-bold text-decoration-none" href={props.endpoint}>
                        {props.endpoint}
                    </a>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        {content}
                        {!error && !isLoading && <ClipBoard />}
                    </div>
                    <button onClick={refreshHandler} className="btn btn-primary mt-1 w-10">
                        Refresh
                    </button>
                </div>
            </Card>
        </React.Fragment>
    );
}

export default Sarcasm;