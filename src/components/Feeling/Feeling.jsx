import { useState } from "react";
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Feeling () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [feelingInput, setFeelingInput] = useState(0);

    const handleSubmit = (event) => {
        console.log('FEELING SUBMIT CLICKED');
        event.preventDefault();
        dispatch({
            type: 'SET_FEELING',
            payload: feelingInput
          });
        routeToUnderstanding();
    }

    const routeToUnderstanding = () => {
        history.push('/understanding');
    }

    return(
        <>
        <h3>HOW YA FEELIN'?</h3>
        <p>5 is great, like you're eating pizza.</p>
        <p>1 is bad, like someone tossed your pizza on the roof.</p>
        <form onSubmit={handleSubmit} className="feelingInput">
            <input
                required
                className="numberInput"
                type="number" min={1} max={5}
                onChange={(event) => setFeelingInput(event.target.value)}
            />
            <br />
            <br />
            <button type="submit">NEXT</button>
        </form>
        </>
    )
}

export default Feeling;

// NEXT BTN needs to:
    // Send user to next component route
    // Dispatch input to Redux