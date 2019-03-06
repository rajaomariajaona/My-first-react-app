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
                <div className="row">
                    <div className="col-xs-12 col-md-6">
<TitleText title={this.state.data.title} text={this.state.data.text} />
                        <input name="email" type="text" placeholder="Enter your email..."/>
                        <button type="submit" className="btn"> Get Started </button>
                    </div>
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
