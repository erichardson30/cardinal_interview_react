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

    changeCompany = (val) => {
        this.props.changeCompany(val);
    }

    render() {
        return (
            <Modal
                isOpen={this.props.open}
                onRequestClose={this.closeModal} >
                <h2>New Question</h2>
                <TextInput
                    hintText="Question"
                    change={this.changeText}
                    multiLine = 'true'
                >
                    {this.props.question.text}
                </TextInput>
                <TextInput
                    hintText="Answer"
                    change={this.changeAnswer}
                    multiLine='true'
                >
                    {this.props.question.answer}
                </TextInput>
                <TextInput
                    hintText="Tag"
                    change={this.changeTag}
                >
                    {this.props.question.tag}
                </TextInput>
                <TextInput
                    hintText="Company"
                    change={this.changeCompany}
                >
                    {this.props.question.company}
                </TextInput>

                <Button label="Create Question" onSubmit={this.createQuestion} disabled={false}/>
                <Button label="Cancel" onSubmit={this.closeModal} disabled={false}/>
            </Modal>
        );
    }
}

export default AddQuestionModal;
