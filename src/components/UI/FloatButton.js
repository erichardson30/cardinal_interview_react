import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

class FloatButton extends Component {

    handleClick = () => {

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
