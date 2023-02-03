import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

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

    const submitFeedback = (event) => {
        // console.log('FEELSIES TEST:', newFeedback.feelingIn);
        event.preventDefault();
        // sending bundled user input to Redux saga (in index.js), which will POST it to database:
        dispatch({
            type: 'POST_FEEDBACK',
            payload: newFeedback
          });
        routeToSubmitted();
    }

    const routeToSubmitted = () => {
        history.push('/submitted');
    }

    return(
        <>
        <h2>REVIEW</h2>
        <p className="bold">FEELING: {feelingIn}</p>
        <p className="bold">UNDERSTANDING: {understandingIn}</p>
        <p className="bold">SUPPORT: {supportIn}</p>
        <p className="bold-comments" >COMMENTS:</p>
        <p className="comments">{commentsIn}</p>
        <button onClick={submitFeedback}>SUBMIT</button>
        </>
    )
}

export default Review;