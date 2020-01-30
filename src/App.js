import React, {useReducer} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Main from './pages/Main'
import MainMenu from './components/MainMenu/MainMenu'
import About from './pages/About'
import {popupContext} from './context/Сontexts'
import {popupReducer} from './reducers/Reducers'

function App() {
  const [popupState, popupDispatch] = useReducer(popupReducer, {visible:false});

  return (
    <popupContext.Provider value={[popupState,popupDispatch]}>
        <div className="App">
          <header>My notepad with sync by server</header>

          {/* {popupState.visible && console.log('Тест контекста и редьюсера')} */}
          <div className ="main">
            <BrowserRouter>
              <MainMenu/>          
              <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/About' component={About}/>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
    </popupContext.Provider>
  );
}

export default App;
