import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/lib/text-field';

class TextInput extends Component {

    static propTypes = {
        hintText : PropTypes.string,
        floatingLabelText : PropTypes.string,
        onChange : PropTypes.func.isRequired,
        multiLine : PropTypes.bool,
        defaultValue : PropTypes.string
    }
    onChange = (evt) => {
        this.props.change(evt.target.value);
    };

    render() {
        return (
            <div>
              <TextField
                hintText={this.props.hintText}
                floatingLabelText={this.props.hintText}
                onChange={this.onChange}
                multiLine={this.props.multiLine}
                defaultValue = {this.props.default}
                style={{display: 'inline-block'}} />
                <br/>
            </div>
        )
    }
}

export default TextInput;
