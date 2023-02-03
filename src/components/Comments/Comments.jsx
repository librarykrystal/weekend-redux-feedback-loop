import { useState } from "react";
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Comments () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [commentsInput, setCommentsInput] = useState('');

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

        <form onSubmit={handleSubmit} className="commentsInput">
            <textarea
                className="textInput"
                type="text"
                rows="10" cols="40"
                // wrap="soft"
                onChange={(event) => setCommentsInput(event.target.value)}
            />
            <br />
            <br />
            <button type="submit">NEXT</button>
        </form>
        </>
    )
}

export default Comments;