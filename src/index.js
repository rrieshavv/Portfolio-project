import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import {About} from './components/About'
import { Education } from './components/Education';


import { Languages } from './components/Skills/Langauges';
import {Frontend} from './components/Skills/Frontend';
import { Backend } from './components/Skills/Backend';
import { Databases } from './components/Skills/Databases';
import {Devops} from './components/Skills/Devops';
import { Cloud } from './components/Skills/Cloud';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Projects } from './components/Projects';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/About' element={<About/>} >
      <Route path='' element={<Languages/>} />
      <Route path='Frontend' element={<Frontend/>} />
      <Route path='Backend' element={<Backend/>} />
      <Route path='Databases' element={<Databases/>}/>
      <Route path='DevOps' element={<Devops/>}/>
      <Route path='Cloud' element={<Cloud/>} />
    </Route>
    <Route path='/Education' element={<Education/>} />
    <Route path='/Projects' element={<Projects/>} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
