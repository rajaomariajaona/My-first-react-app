import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar'
const propTypes = {};

const defaultProps = {};

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-xs-11 col-md-10" >
                <Navbar />
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <h1> All your files in one secure location, accessible anywhere. </h1>
                        <p>
Fylo stores your most important files in one secure location. Access them whever you need, share and collaborate with friends, family, and co-workers.
                        </p>
                        <input name="email" type="text" placeholder="Enter your email..."/>
                        <button type="submit" className="btn"></button>
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
