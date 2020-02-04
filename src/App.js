import React, {useReducer} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Main from './pages/Main'
import MainMenu from './components/MainMenu/MainMenu'
import About from './pages/About'
import {popupContext} from './context/Сontexts'
import {popupReducer} from './reducers/Reducers'
import Popup from './components/Popups/Popup'
import LoadingIcon from './components/LoadingIcon/LoadingIcon'

function App() {
  const [popupState, popupDispatch] = useReducer(popupReducer, {visible:false, type:'',title:'', data:{}});

  return (
    <popupContext.Provider value={[popupState,popupDispatch]}>
        <div className="App">
          <LoadingIcon/>
          {popupState.visible && <Popup title={popupState.title} type={popupState.type} data={popupState.data}/>}  
          <header>My notepad with sync by server</header>

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
