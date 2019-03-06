import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {
};

class IconText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <img alt="" src={this.props.path}/>
            <p>
                {this.props.text}
            </p>
        </div>
        );
    }
};

IconText.propTypes = propTypes;
IconText.defaultProps = defaultProps;

export default IconText;
