import React, {Component, PropTypes} from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

class FloatButton extends Component {

    static propTypes = {
        backgroundColor : PropTypes.string,
        onClick : PropTypes.func
    }

    handleClick = () => {
        this.props.openModal();
    };

    render() {
        return (
            <div>
                <FloatingActionButton
                    backgroundColor="grey"
                    onClick={this.handleClick}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}

export default FloatButton;
