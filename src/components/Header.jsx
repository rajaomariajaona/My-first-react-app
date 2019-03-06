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
            <div>
                <Navbar />
            </div>
        );
    }
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
