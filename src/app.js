import React from "react";
import ReactDOM from "react-dom";

import IndecisionApp from "./components/IndecisionApp"; //OR ./components/IndecisionApp.js

//importing CSS
import './styles/style.scss';
import 'normalize.css/normalize.css';

ReactDOM.render(
<IndecisionApp />,
document.getElementById('app')
)


