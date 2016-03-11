import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import TaggedInput from 'react-tagged-input';
import s from './TagInput.scss';


class TagInput extends Component {

    render() {
        return(
            <TaggedInput
                autofocus={false}
                backspaceDeletesWord={true}
                placeholder={this.props.placeholder}
                tags={this.props.tags}
                tagOnBlur={false}
                clickTagToEdit={true}
                unique={true}
                removeTagLabel={"\u274C"} />
        );
    }
}

export default withStyles(TagInput,s);
