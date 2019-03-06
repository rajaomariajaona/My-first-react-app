import React from 'react';
import PropTypes from 'prop-types';
import data from './DataText';
import TitleText from './TitleText';
const propTypes = {};

const defaultProps = {};

class FooterTop extends React.Component {
    constructor(props) {
        super(props);
    }
    state={
        data: data.footer
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <TitleText text={this.state.data.text} title={this.state.data.title} />
                </div>
                <div className="col-xs-12 col-md-6">
                    <input name="email" type="email" value=""/>
                    <button className="btn" type="submit"> Get Started For Free </button>
                </div>
            </div>
        );
    }
};

FooterTop.propTypes = propTypes;
FooterTop.defaultProps = defaultProps;

export default FooterTop;
