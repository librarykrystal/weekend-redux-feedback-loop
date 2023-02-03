import {useHistory} from 'react-router-dom';

function Submitted () {

    const history = useHistory();

    const refreshApp = (event) => {
        event.preventDefault();
        console.log('refresh');
        // sends user back to first step (feeling):
        history.push('/');
        // refreshes app to empty Redux data so user starts fresh:
        window.location.reload();
    }

    return(
        <>
        <h2>SUBMITTED</h2>
        <h4>Thank you</h4>
        <button onClick={refreshApp}>SUBMIT ANOTHER FEEDBACK</button>
        </>
    )
}

export default Submitted;