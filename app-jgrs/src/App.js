import React from 'react';
import { Route, Switch } from 'react-router-dom';
import mainPage from './Pages/mainPage'
function App() {
  return (
    <section className='containerApp'>
      <Switch>
        <Route exact path="/" component={ mainPage }/>
      </Switch>
    </section>
  );
}

export default App;
