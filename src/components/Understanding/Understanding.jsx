import { useState } from "react";
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Understanding () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understandingInput, setUnderstandingInput] = useState(0);

    // Warning default is false,
    // changes to true if user attempts to continue without making selection:
    const [blankWarning, setBlankWarning] = useState(false);

    const handleSubmit = (event) => {
        // console.log('UNDERSTANDING SUBMIT CLICKED');
        event.preventDefault();
        // if no selection was made, trigger the warning (and do NOT send user to next step):
        if(understandingInput == 0){
            console.log('NO ZEROES ALLOWED!');
            setBlankWarning(true);
        // if a selection WAS made, dispatch it to the reducer and route user to next step:
        } else {
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understandingInput
          });
        routeToSupport();
        }
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
                // required   // prevents if stmt from checking warning boolean in handleSubmit
                className="numberInput"
                type="number" min={1} max={5}
                onChange={(event) => setUnderstandingInput(event.target.value)}
            />
            <br />
            {/* Conditional render -
            blankWarning is only truthy if user has attempted to continue without making selection */}
            { blankWarning && <p className="noEntry">Please make a selection to continue.</p>}
            <br />
            <button type="submit">NEXT</button>
        </form>
        </>
    )
}

export default Understanding;