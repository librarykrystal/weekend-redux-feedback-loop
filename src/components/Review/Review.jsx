import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from "react";

function Review () {

    const dispatch = useDispatch();
    const history = useHistory();

    // retrieving all user entries from the Redux store:
    const feelingIn = useSelector(store => store.feelingR);
    const understandingIn = useSelector(store => store.understandingR);
    const supportIn = useSelector(store => store.supportR);
    const commentsIn = useSelector(store => store.commentsR);

    // bundling store data into object to be sent to saga/reducer:
    const newFeedback = {feelingIn, understandingIn, supportIn, commentsIn};

    // Warning default is false,
    // changes to true if user attempts to continue with any missing input:
    const [blankWarning, setBlankWarning] = useState(false);

    const submitFeedback = (event) => {
        // console.log('FEELSIES TEST:', newFeedback.feelingIn);
        event.preventDefault();
        // redundancy checking if any of the ratings were not completed (left at 0).
        // If any incomplete, triggers conditional render and does not submit to database:
        if(feelingIn == 0 || understandingIn == 0 || supportIn == 0){
            console.log('NO ZEROES ALLOWED!');
            setBlankWarning(true);
        } else {
            // sending bundled user input to Redux saga (in index.js), which will POST it to database:
            dispatch({
                type: 'POST_FEEDBACK',
                payload: newFeedback
              });
            routeToSubmitted();
        }
    }

    const routeToSubmitted = () => {
        history.push('/submitted');
    }

    const routeToFeeling = () => {
        history.push('/');
    }

    const routeToUnderstanding = () => {
        history.push('/understanding');
    }

    const routeToSupport = () => {
        history.push('/support');
    }

    const routeToComments = () => {
        history.push('/comments');
    }

    return(
        <div className="reviewContainer">
        <h2>REVIEW</h2>
        <div className="reviewItem">
            <p className="bold">FEELING: {feelingIn}</p>
            <button className="editBtn" onClick={routeToFeeling}>EDIT</button>
        </div>
        <div className="reviewItem">
            <p className="bold">UNDERSTANDING: {understandingIn}</p>
            <button className="editBtn" onClick={routeToUnderstanding}>EDIT</button>
        </div>
        <div className="reviewItem">
            <p className="bold">SUPPORT: {supportIn}</p>
            <button className="editBtn" onClick={routeToSupport}>EDIT</button>
        </div>

        {/* Conditional render -
        blankWarning is only truthy if user has attempted to submit with missing input(s) */}
        { blankWarning && <p className="noEntry">Please complete all sections above to continue.</p>}

        <div className="reviewItem">
            <p className="bold-comments" >COMMENTS:</p>
            <p className="comments">{commentsIn}</p>
            <button className="editBtn" onClick={routeToComments}>EDIT</button>
        </div>
        <button className="submitBtn" onClick={submitFeedback}>SUBMIT FEEDBACK</button>
        </div>
    )
}

export default Review;