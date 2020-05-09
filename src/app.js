import React from "react";
import ReactDOM from "react-dom";

import IndecisionApp from "./components/IndecisionApp"; //OR ./components/IndecisionApp.js

//importing CSS
import './styles/style.scss';
import 'normalize.css/normalize.css';

//console.log('source map testing - to check from where this is coming from')

ReactDOM.render(
<IndecisionApp />,
document.getElementById('app')
)


