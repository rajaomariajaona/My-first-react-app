import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './components/navbar';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends React.Component{
    constructor(props){
super(props);
    }
    render(){
        return(<div>
            <Navbar />
            <Body />
            <Footer />
        </div>);
    }
}

ReactDom.render(
   <App />     , document.querySelector('#root')
);
