/**
* React Starter (https://github.com/erichardson30/react-starter)
*
* Copyright © 2016 Eric Richardson. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import React, { Component, PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import ModeEdit from 'material-ui/lib/svg-icons/editor/mode-edit';
import IconButton from 'material-ui/lib/icon-button';
import Button from '../UI/Button';

class QuestionItem extends Component {

    renderTags() {
        return this.props.data.tags.map((tag, index) => {
            return (
                <FlatButton key={index} label={tag} />
            )
        })
    }

    renderAnswers() {
        return this.props.data.answers.map((answer, index) => {
            return (
                <p key={index}>{answer}</p>
            )
        })
    }

    edit = () => {
        this.props.edit(this.props.data);
    }

    delete = () => {
        this.props.delete(this.props.data._id);
    }

    render() {
        return (
            <Card style={{margin: 50}}>
                <CardTitle title={this.props.data.text} />
                <CardText>
                    { this.renderAnswers() }
                </CardText>
                <CardActions>
                    { this.renderTags() }
                    <IconButton onClick={this.delete} style={{float: 'right'}}>
                        <Delete />
                    </IconButton>
                    <IconButton onClick={this.edit} style={{float: 'right'}}>
                        <ModeEdit />
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}

QuestionItem.propTypes = {
    data: PropTypes.object.isRequired,
    delete: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
}

export default QuestionItem;
