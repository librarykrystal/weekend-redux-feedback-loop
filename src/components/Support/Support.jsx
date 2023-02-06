import { useState } from "react";
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Support () {

    const dispatch = useDispatch();
    const history = useHistory();

    const supportStore = useSelector(store => store.supportR);

    const [supportInput, setSupportInput] = useState(0);

    // Warning default is false,
    // changes to true if user attempts to continue without making selection:
    const [blankWarning, setBlankWarning] = useState(false);

    const handleSubmit = (event) => {
        // console.log('FEELING SUBMIT CLICKED');
        event.preventDefault();
        // if no selection has been made, trigger the warning and do NOT route user anywhere:
        if(supportInput == 0 && supportStore == 0){
            console.log('NO ZEROES ALLOWED!');
            setBlankWarning(true);
        // if selection was previously made, and is not being changed, send user to review page:
        } else if (supportInput == 0 && supportStore != 0){
            console.log('FINE, KEEP YOUR PRE-EXISTING SUPPORT!');
            routeToReview();
        // if user is updating a previous selection, dispatch it to reducer and send user to review page:
        } else if (supportInput != 0 && supportStore != 0){
            console.log('THANKS FOR UPDATING YOUR SUPPORT!');
            dispatch({
                type: 'SET_SUPPORT',
                payload: supportInput
              });
            routeToReview();
        // if a selection is made for the first time, dispatch it to the reducer and route user to next step:
        } else {
            console.log('THANKS FOR SHARING YOUR SUPPORT!');
            dispatch({
                type: 'SET_SUPPORT',
                payload: supportInput
            });
            routeToComments();
        }
    }
    
    const routeToComments = () => {
        history.push('/comments');
    }

    const routeToReview = () => {
        history.push('/review');
    }

    return(
        <>
        <h3>How SUPPORTED do you feel?</h3>
        <p>5 is great, like you have flying buttresses.</p>
        <p>1 is bad, like you're flying by the seat of your pants.</p>
        <form onSubmit={handleSubmit} className="supportInput">
            <input
                // required   // prevents if stmt from checking warning boolean in handleSubmit
                className="numberInput"
                type="number" min={1} max={5}
                onChange={(event) => setSupportInput(event.target.value)}
            />
            <br />
            {/* Conditional render -
            blankWarning is only truthy if user has attempted to continue without making selection */}
            { blankWarning && <p className="noEntry">Please make a selection to continue.</p>}
            <br />
            <button className="nextBtn" type="submit">NEXT</button>
        </form>
        </>
    )
}

export default Support;