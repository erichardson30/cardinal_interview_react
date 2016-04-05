/**
* React Starter (https://github.com/erichardson30/react-starter)
*
* Copyright © 2016 Eric Richardson. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './QuestionPage.scss';
import QuestionStore from '../../stores/QuestionStore';
import QuestionActions from '../../actions/QuestionActions';
import Loader from 'react-loader';
import QuestionItem from '../../components/QuestionPage/QuestionItem';
import FloatButton from '../../components/UI/FloatButton';
import AddQuestionModal from '../../components/QuestionPage/AddQuestionModal';
import Snackbar from 'material-ui/lib/snackbar';

const title = 'Questions';


class QuestionPage extends Component {

    constructor(props) {
        super(props);
        this.state = QuestionStore.getState();
        this.onChange = this.onChange.bind(this);
        this.newQuestion = this.newQuestion.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.context.onSetTitle(title);
        QuestionStore.listen(this.onChange);
    }

    componentWillUnmount() {
        QuestionStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.data !== this.state.data ||
    //         nextState.modalIsOpen !== this.state.modalIsOpen ||
    //         nextState.handleQuestionAddedSnackbarClose !==
    //         this.state.handleQuestionAddedSnackbarClose ||
    //         nextState.handleQuestionDeletedSnackbarClose !==
    //         this.state.handleQuestionDeletedSnackbarClose ||
    //         nextState.question !== this.state.question) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    // }


    newQuestion = () => {
        this.setState({ modalIsOpen: true});
        var q = {
            "text": '',
            "tags": [],
            "level": '',
            "tech": '',
            "answers": [],
            "createdAt": ''
        };
        this.setState({ question: q })
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false});
    }

    handleQuestionAddedSnackbarClose = () => {
        this.setState({ questionAddedSnackbarOpen : false });
    }

    handleQuestionDeletedSnackbarClose = () => {
        this.setState({ questionDeletedSnackbarOpen : false });
    }

    createQuestion = () => {
        const date = new Date();
        const q = this.state.question;
        q.createdAt = date;
        this.setState({ question : q });
        QuestionActions.createQuestion(this.state.question);
        QuestionActions.getQuestions();
    }

    textChange = (val) => {
        let q = this.state.question;
        q.text = val;
        this.setState({ question : q });
    }

    answerChange = (val) => {
        let q = this.state.question;
        q.answers.push(val);
        this.setState({ question : q });
    }

    techSelectChange = (val) => {
        let q = this.state.question;
        q.tech = val;
        this.setState({ question : q });
    }

    levelSelectChange = (val) => {
        let q = this.state.question;
        q.level = val;
        this.setState({ question : q });
    }

    updateTags = (tag) => {
        let q = this.state.question;
        q.tags.push(
            {
                tag : tag
            }
        );
        this.setState({question: q});
    }

    editItem = (question) => {
        this.setState({question: question});
        this.setState({modalIsOpen: true});
    }

    deleteItem = (id) => {
        QuestionActions.deleteQuestion(id);
    }


    renderData() {
        return this.state.data.map((data, index) => {
            return (
                <QuestionItem key={index} data={data} delete={this.deleteItem} edit={this.editItem} />
            )
        })
    }

    render() {
        return (
            <div className={s.root}>
                <div className={s.container}>
                    <h1>{title}</h1>
                    <div>
                        <Loader loaded={this.state.loaded} />
                        <FloatButton openModal={this.newQuestion}/>
                        <Snackbar
                            open={this.state.questionAddedSnackbarOpen}
                            message="Question successfully added"
                            autoHideDuration={2000}
                            onRequestClose={this.handleQuestionAddedSnackbarClose}
                        />
                        <Snackbar
                            open={this.state.questionDeletedSnackbarOpen}
                            message="Question successfully deleted"
                            autoHideDuration={2000}
                            onRequestClose={this.handleQuestionDeletedSnackbarClose}
                        />
                        <AddQuestionModal
                            open = {this.state.modalIsOpen}
                            close = {this.closeModal}
                            question = {this.state.question}
                            createQuestion = {this.createQuestion}
                            changeText = {this.textChange}
                            changeAnswer = {this.answerChange}
                            techSelectChange = {this.techSelectChange}
                            levelSelectChange = {this.levelSelectChange}
                            updateTags = {this.updateTags}
                        />
                    </div>
                    { this.renderData() }
                </div>
            </div>
        );
    }

}

export default withStyles(QuestionPage, s);
