import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./State/state";
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state)