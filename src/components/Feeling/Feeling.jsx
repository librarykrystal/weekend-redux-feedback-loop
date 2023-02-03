import { useState } from "react";
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Feeling () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [feelingInput, setFeelingInput] = useState(0);

    // Warning default is false,
    // changes to true if user attempts to continue without making selection:
    const [blankWarning, setBlankWarning] = useState(false);

    const handleSubmit = (event) => {
        // console.log('FEELING SUBMIT CLICKED');
        event.preventDefault();
        // if no selection was made, trigger the warning (and do NOT send user to next step):
        if(feelingInput == 0){
            console.log('NO ZEROES ALLOWED!');
            setBlankWarning(true);
        // if a selection WAS made, dispatch it to the reducer and route user to next step:
        } else {
        dispatch({
            type: 'SET_FEELING',
            payload: feelingInput
          });
        routeToUnderstanding();
        }
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
                // required   // prevents if stmt from checking warning boolean in handleSubmit
                className="numberInput"
                type="number" min={1} max={5}
                onChange={(event) => setFeelingInput(event.target.value)}
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

export default Feeling;