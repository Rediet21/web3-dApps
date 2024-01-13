import { loadStdlib } from '@reach-sh/stdlib'
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import React from 'react'
import './App.css';

import Login from './components/Login'
import Trainee from './components/layout/Trainee'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './assets/css/app.css'
import Home from './pages/Home'

require('dotenv').config()

const reach = loadStdlib("ALGO")
reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect
}));


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} exact element={<Home />} />
                    <Route path={"/login"} exact element={<Login />} />

                    <Route exact path='/trainee' element={<ProtectedRoute />}>
                        <Route exact path='/trainee' element={<Trainee />} />
                    </Route>
                    <Route exact path='/trainer' element={<ProtectedRoute />}>
                        <Route exact path='/trainer' element={<Trainer />} />
                    </Route>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
