import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

const defaultProps = {
title:'', text :''
};

class TextTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const textParsed = this.props.text.split('\n').map(key => <p> {key} </p>);
        return (
            <div className="title-text">
                <h1>{this.props.title}</h1>
                    {textParsed}
            </div>
        );
    }
};

TextTitle.propTypes = propTypes;
TextTitle.defaultProps = defaultProps;

export default TextTitle;
