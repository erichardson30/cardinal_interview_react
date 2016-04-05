import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/lib/flat-button';

class Button extends Component {
    static propTypes = {
        label: PropTypes.string,
        backgroundColor : PropTypes.string,
        onClick : PropTypes.func,
        disabled : PropTypes.bool
    }
    
    handleClick = () => {
        this.props.onSubmit();
    };

    render() {
        return (
            <FlatButton label={this.props.label}
                backgroundColor="grey"
                onClick={this.handleClick}
                disabled={this.props.disabled}/>
        )
    }
}

export default Button;
