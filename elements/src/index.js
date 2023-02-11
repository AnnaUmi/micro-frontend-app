require('file-loader?name=[name].[ext]./index.html')
import App from "./App";
import ReactDOM from 'react-dom'
import React from "react";

const app = document.getElementById('app');
ReactDOM.render(<App/>, app)