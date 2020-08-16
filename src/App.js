import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import CourseList from './components/CourseList';
import Board from './components/Board';

function App() {
  const [show, setShow] = React.useState(true);
  return (
    <Provider store={store}>
      <CourseList />
      <button onClick={() => setShow((state) => {
        debugger;
        return !state;
      })}>close board</button>
      {show && <Board />}
    </Provider>
  );
}


export default App;
