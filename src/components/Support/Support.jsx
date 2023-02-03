import { useState } from "react";
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Support () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [supportInput, setSupportInput] = useState(NaN);

    const handleSubmit = (event) => {
        console.log('SUPPORT SUBMIT CLICKED');
        event.preventDefault();
        dispatch({
            type: 'SET_SUPPORT',
            payload: supportInput
          });
        routeToComments();
    }

    const routeToComments = () => {
        history.push('/comments');
    }

    return(
        <>
        <h3>How SUPPORTED do you feel?</h3>
        <p>5 is great, like you have flying buttresses.</p>
        <p>1 is bad, like you're flying by the seat of your pants.</p>
        <form onSubmit={handleSubmit} className="supportInput">
            <input
                required
                className="numberInput"
                type="number" min={1} max={5}
                onChange={(event) => setSupportInput(event.target.value)}
            />
            <br />
            <br />
            <button type="submit">NEXT</button>
        </form>
        </>
    )
}

export default Support;