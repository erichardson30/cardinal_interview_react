/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import QuestionStore from '../../stores/QuestionStore';
import QuestionActions from '../../actions/QuestionActions';
import Modal from 'react-modal';
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';
import TagInput from '../UI/TagInput';


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

    changeTag = (val) => {
        this.props.changeTag(val);
    }


    render() {
        let multiLine = true;
        return (
            <Modal
                isOpen={this.props.open}
                onRequestClose={this.closeModal} >
                <h2>New Question</h2>
                <TextInput
                    hintText="Question"
                    change={this.changeText}
                    multiLine = {true}
                    default = {this.props.question.text}
                ></TextInput>

                <TagInput
                    tags={this.props.question.tags} />

                <Button label="Create Question" onSubmit={this.createQuestion} disabled={false}/>
                <Button label="Cancel" onSubmit={this.closeModal} disabled={false}/>
            </Modal>
        );
    }
}

export default AddQuestionModal;
