import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wrap, releaseProxy } from "comlink";


const Board = () => {
    // const worker = new WebWorker(myWorker);
    const worker = new Worker("./Worker/index.js", {
        name: "my-first-worker",
        type: "module"
    });
    const workerApi = wrap(worker);

    useEffect(() => {

        return () => {
            // on component destroy
        }
    }, [workerApi])

    const handleOnClick = () => {
        workerApi.takeALongTimeToDoSomething();
        // workerApi[releaseProxy]();
    }

    const courses = useSelector(state => state.data);

    return (
        <>
            this is from board
            <button onClick={handleOnClick}>add to redux smthg</button>
            {courses.map((course) => <p>board - {course}</p>)}
        </>
    )
}

export default Board;

