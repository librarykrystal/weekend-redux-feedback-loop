import { useState } from "react";
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Understanding () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understandingInput, setUnderstandingInput] = useState(NaN);

    const handleSubmit = (event) => {
        console.log('UNDERSTANDING SUBMIT CLICKED');
        event.preventDefault();
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understandingInput
          });
        routeToSupport();
    }

    const routeToSupport = () => {
        history.push('/support');
    }

    return(
        <>
        <h3>Please rate your UNDERSTANDING.</h3>
        <p>5 is great, like you're Einstein.</p>
        <p>1 is bad, like you're a koala named Einstein.</p>
        <form onSubmit={handleSubmit} className="understandingInput">
            <input
                required
                className="numberInput"
                type="number" min={1} max={5}
                onChange={(event) => setUnderstandingInput(event.target.value)}
            />
            <br />
            <br />
            <button type="submit">NEXT</button>
        </form>
        </>
    )
}

export default Understanding;