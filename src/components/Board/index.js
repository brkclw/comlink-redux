import React, { useEffect } from 'react';
import { wrap, releaseProxy } from "comlink";
import { useSelector } from 'react-redux';


const Board = () => {
    const courses = useSelector(state => state.courses.data);
    // const worker = new WebWorker(myWorker);
    const worker = new Worker("./Worker/index.js", {
        name: "my-first-worker",
        type: "module"
    });
    const workerApi = wrap(worker);

    useEffect(() => {
        // workerApi[releaseProxy]();

        return () => {
            // on component destroy
            // workerApi[releaseProxy]();

            debugger;
        }
    }, [])

    const handleOnClick = () => {
        workerApi.takeALongTimeToDoSomething().then((res) => {
            debugger;
        });
        // workerApi[releaseProxy]();
    }


    return (
        <>
            this is from board
            <button onClick={handleOnClick}>add to redux smthg</button>

            {courses.map((course) => <p>board - {course}</p>)}
        </>
    )
}

export default Board;

