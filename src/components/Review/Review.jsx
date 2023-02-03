import { useSelector, useDispatch } from 'react-redux';

function Review () {

    const comments = useSelector(store => store.commentsR);

    return(
        <>
        <p>REVIEW</p>
        <p>COMMENTS: {comments}</p>
        </>
    )
}

export default Review;