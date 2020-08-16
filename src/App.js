import React from 'react';
import { Provider } from 'react-redux';


import CourseList from './components/CourseList';
import Board from './components/Board';
import configureStore from './store';


const store = configureStore()

function App() {
  const [show, setShow] = React.useState(true);

  return (
    <Provider store={store}>

      
      <div style={{backgroundColor:"#eee"}}>
        lista kursów
        <CourseList />
      </div>


      <div style={{backgroundColor:"aquamarine"}}>
      {show && <Board />}
      </div>


      <button onClick={() => setShow((state) => {
        debugger;
        return !state;
      })}>close board</button>

      <div>

      </div>

    </Provider>
  );
}


export default App;
