import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header.jsx';
import Body from './components/Body';
import Footer from './components/Footer';
import './css/all.css'
import './css/flexboxgrid.min.css'
import './css/style.css'

class App extends React.Component{
    constructor(props){
super(props);
    }
    render(){
        return(<div className="row center-xs">
            <Header />
            <Body />
            <Footer />
        </div>);
    }
}

ReactDom.render(
   <App />     , document.querySelector('#root')
);
