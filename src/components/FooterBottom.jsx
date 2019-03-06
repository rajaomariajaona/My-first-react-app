import React from 'react';
import PropTypes from 'prop-types';
import IconText from './IconText'
const propTypes = {};

const defaultProps = {};

class FooterBottom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-3 col-md-2">
                    <img alt="" src="./images/logo.svg"/> 
                </div>
                <div className="col-xs-9 col-md-10"></div>
                <div className="col-xs-12 col-md-4">
                    <IconText path="./images/icon-phone.svg" text="+1-543-123-4567" />
                    <IconText path="./images/icon-email.svg" text="example@fylo.com"/>
                </div>
                <div className="col-xs-12 col-md-4">
                    <ul>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-4">
                    <ul>
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-4">
                    <ul>
                        <li><span className="fab fa-facebook"></span></li>
                        <li><span className="fab fa-twitter"></span></li>
                        <li><span className="fab fa-instagram"></span></li>

                    </ul>
                </div>
            </div>

        );
    }
};

FooterBottom.propTypes = propTypes;
FooterBottom.defaultProps = defaultProps;

export default FooterBottom;
