import { useState } from "react";
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Understanding () {

    const dispatch = useDispatch();
    const history = useHistory();

    const understandingStore = useSelector(store => store.understandingR);

    const [understandingInput, setUnderstandingInput] = useState(0);

    // Warning default is false,
    // changes to true if user attempts to continue without making selection:
    const [blankWarning, setBlankWarning] = useState(false);

    const handleSubmit = (event) => {
        // console.log('UNDERSTANDING SUBMIT CLICKED');
        event.preventDefault();
        // if no selection has been made, trigger the warning and do NOT route user anywhere:
        if(understandingInput == 0 && understandingStore == 0){
            console.log('NO ZEROES ALLOWED!');
            setBlankWarning(true);
        // if selection was previously made, and is not being changed, send user to review page:
        } else if (understandingInput == 0 && understandingStore != 0){
            console.log('FINE, KEEP YOUR PRE-EXISTING UNDERSTANDING!');
            routeToReview();
        // if user is updating a previous selection, dispatch it to reducer and send user to review page:
        } else if (understandingInput != 0 && understandingStore != 0){
            console.log('THANKS FOR UPDATING YOUR UNDERSTANDING!');
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: understandingInput
              });
            routeToReview();
        // if a selection is made for the first time, dispatch it to the reducer and route user to next step:
        } else {
            console.log('THANKS FOR SHARING YOUR UNDERSTANDING!');
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

    const routeToReview = () => {
        history.push('/review');
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