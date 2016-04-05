/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Modal.scss';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Checkbox from 'material-ui/lib/checkbox';
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';
import Select from 'react-select';
import {Col} from 'react-bootstrap';

class AddQuestionModal extends Component {    
   
    createQuestion = () => {
        this.props.createQuestion();
    }

    closeModal = () => {
        this.props.close();
    }

    changeText = (val) => {
        this.props.changeText(val);
    }

    changeAnswer = (val) => {
        this.props.changeAnswer(val);
    }

    techSelectChange = (event, index, value) => {
        this.props.techSelectChange(value);
    }

    updateTags = (val) => {
        this.props.updateTags(val);
    }


    levelSelectChange = (event, index, value) => {
        this.props.levelSelectChange(value);
    }

    render() {
        let multiLine = true;
        return (
            <Modal
                isOpen={this.props.open}
                onRequestClose={this.closeModal}>

                <h2>New Question</h2>
                <TextInput
                    hintText="Question"
                    change={this.changeText}
                    multiLine = {true}
                    default = {this.props.question.text}
                />
                <TextInput
                    hintText="Answer"
                    change={this.changeAnswer}
                    multiLine = {true}
                    default = {this.props.question.answer}
                />
                <div>
                    <SelectField
                        value={this.props.question.tech}
                        onChange={this.techSelectChange}
                        floatingLabelText="Technology">
                        <MenuItem value={"JavaScript"} primaryText="JavaScript"/>
                        <MenuItem value={"Java"} primaryText="Java"/>
                        <MenuItem value={"C#"} primaryText="C#"/>
                        <MenuItem value={".NET"} primaryText=".NET"/>
                        <MenuItem value={"iOS"} primaryText="iOS"/>
                    </SelectField>
                </div>
                <div>
                    <SelectField
                        value={this.props.question.level}
                        onChange={this.levelSelectChange}
                        floatingLabelText="Difficulty">
                        <MenuItem value={"Beginner"} primaryText="Beginner"/>
                        <MenuItem value={"Intermediate"} primaryText="Intermediate"/>
                        <MenuItem value={"Advanced"} primaryText="Advanced"/>
                        <MenuItem value={"Expert"} primaryText="Expert"/>
                    </SelectField>
                </div>
                <div>
                    <Select
                        name="tags"
                        options={this.props.question.tags}
                        onChange={this.updateTags}
                        multi={true}
                        allowCreate={true}
                    />
                </div>

                <div className='buttonDiv'>
                    <Button label='Cancel'
                        disabled={false}
                        onSubmit={this.closeModal}
                    />
                    <Button label='Create Question'
                        disabled={false}
                        onSubmit={this.createQuestion}
                    />
                </div>
            </Modal>
        );
    }
}

AddQuestionModal.propTypes = {
    open : PropTypes.bool.isRequired,
    close : PropTypes.func.isRequired,
    question : PropTypes.object.isRequired,
    createQuestion : PropTypes.func.isRequired,
    changeText : PropTypes.func.isRequired,
    changeAnswer : PropTypes.func.isRequired,
    techSelectChange : PropTypes.func.isRequired,
    levelSelectChange : PropTypes.func.isRequired,
    updateTags : PropTypes.func.isRequired
};

export default withStyles(AddQuestionModal, s);
