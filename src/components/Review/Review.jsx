import { useSelector, useDispatch } from 'react-redux';

function Review () {

    const dispatch = useDispatch();

    const feelingIn = useSelector(store => store.feelingR);
    const understandingIn = useSelector(store => store.understandingR);
    const supportIn = useSelector(store => store.supportR);
    const commentsIn = useSelector(store => store.commentsR);

    const newFeedback = {feelingIn, understandingIn, supportIn, commentsIn};

    const submitFeedback = (event) => {
        console.log('SUBMIT CLICKED');
        console.log('FEELS DATA TEST:', newFeedback.feelingIn);
        event.preventDefault();
        dispatch({
            type: 'POST_FEEDBACK',
            payload: newFeedback
          });
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