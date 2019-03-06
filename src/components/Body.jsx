import React from 'react';
import PropTypes from 'prop-types';
import data from './DataText';
import TitleText from './TitleText';
const propTypes = {};

const defaultProps = {};

class Body extends React.Component {
    constructor(props) {
        super(props);
    }
    state={
data: data.body
    }
    render() {
        return (
            <div className="col-xs-11 col-md-10">
                <div className="row">
                    
                    <div className="col-xs-12 col-md-6">
                        <div >
                            <TitleText text={this.state.data.text} title={this.state.data.title} />
                                                        <a href="#"> See how Fylo works <img alt="" src="./images/icon-arrow.svg"/> </a>
                        </div>
                        <div>
                            <img alt="" src="./images/icon-quotes.svg"/>
                            <p>
                                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                            </p>
                            <img className="img-avatar" alt="" src="./images/avatar-testimonial.jpg"/>
                            <h2> Kyle Burton </h2>
                            <p>
                                Founder & CEO, Huddle
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <img alt="" src="./images/illustration-2.svg"/>
                    </div>
                </div>
            </div>
        );
    }
};

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export default Body;
