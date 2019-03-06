import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import TitleText from './TitleText';
import data from './DataText'
const propTypes = {};

const defaultProps = {};

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    state ={
data : data.header
    }

    render() {
        return (
            <div className="col-xs-11 col-md-10" >
                <Navbar />
                <div className="row header">
                    <div className=" title-text-header first-md last-xs col-xs-12 col-md-6">
<TitleText title={this.state.data.title} text={this.state.data.text} />
<div className="row form-group start-md center-xs">
    <div className="col-xs-10 col-md-7">
        <input name="email" type="email" placeholder="Enter your email..."/>
    </div>
        <div className="col-xs-10 col-md-5">
           <button type="submit" className="btn"> Get Started </button>
                    </div></div></div>
                    <div className="col-xs-12 col-md-6">
                        <img alt="illustration" className="img-responsive"  src="./images/illustration-1.svg"/>
                    </div>
                </div>
            </div>
        );
    }
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
