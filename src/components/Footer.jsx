import React from 'react';
import PropTypes from 'prop-types';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
const propTypes = {};

const defaultProps = {};

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-xs-11 col-md-10">
                <FooterTop />
                <FooterBottom />
            </div>
        );
    }
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
