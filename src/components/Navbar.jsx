import React from 'react';
class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="row">
                <div className='col-xs-3'>
                    <img src='./images/logo.svg' />
                </div>
                <div className="col-xs-7 col-md-5">
                    <ul>
                        <li> Features </li>
                        <li> Team </li>
                        <li> Sign In </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar;
