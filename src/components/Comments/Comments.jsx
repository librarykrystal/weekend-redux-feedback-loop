import { useState } from "react";
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Comments () {

    const dispatch = useDispatch();
    const history = useHistory();

    const commentsStore = useSelector(store => store.commentsR);

    const [commentsInput, setCommentsInput] = useState(commentsStore);

    const handleSubmit = (event) => {
        console.log('COMMENTS SUBMIT CLICKED');
        event.preventDefault();
        dispatch({
            type: 'SET_COMMENTS',
            payload: commentsInput
          });
        routeToReview();
    }

    const routeToReview = () => {
        history.push('/review');
    }

    return(
        <>
        <h3>Any COMMENTS?</h3>
        <p className="italic">optional</p>

        <form onSubmit={handleSubmit} className="commentsInput">
            <textarea
                value={commentsInput}
                className="textInput"
                type="text"
                rows="10" cols="40"
                // wrap="soft"
                onChange={(event) => setCommentsInput(event.target.value)}
            />
            <br />
            <br />
            <button className="nextBtn" type="submit">NEXT</button>
        </form>
        </>
    )
}

export default Comments;