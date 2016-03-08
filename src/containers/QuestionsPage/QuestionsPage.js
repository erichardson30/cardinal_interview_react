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
import s from './QuestionsPage.scss';
import QuestionStore from '../../stores/QuestionStore';
import QuestionActions from '../../actions/QuestionActions';
import Loader from 'react-loader';
import QuestionItem from '../../components/QuestionsPage/QuestionItem';
import FloatButton from '../../components/UI/FloatButton';
import AddQuestionModal from '../../components/QuestionsPage/AddQuestionModal';
import Snackbar from 'material-ui/lib/snackbar';

const title = 'Questions';


class QuestionsPage extends Component {

    constructor(props) {
        super(props);
        this.state = QuestionStore.getState();
        this.onChange = this.onChange.bind(this);
        this.newQuestion = this.newQuestion.bind(this);
        this.closeMOdal = this.closeModal.bind(this);
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

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.data !== this.state.data ||
            nextState.modalIsOpen !== this.state.modalIsOpen ||
            nextState.handleQuestionAddedSnackbarClose !==
            this.state.handleQuestionAddedSnackbarClose ||
            nextState.handleQuestionDeletedSnackbarClose !==
            this.state.handleQuestionDeletedSnackbarClose ||
            nextState.question !== this.state.question) {
                return true;
            } else {
                return false;
            }
    }

    newQuestion = () => {
        this.setState({ modalIsOpen: true});
        var q = {
            "text": '',
            "tag": [],
            "answer": [],
            "company": [],
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
        q.createdAt = date.toString();
        this.setState({ question : q });
        QuestionActions.createQuestion(this.state.question);
        QuestionActions.getQuestions();
    }

    textChange = (val) => {
        const q = this.state.question;
        q.text = val;
        this.setState({ question : q });
    }

    answerChange = (val) => {
        let array = [];
        const q = this.state.question;
        array.push(val);
        q.answer = array;
        this.setState({ question : q });
    }

    tagChange = (val) => {
        let array = [];
        const q = this.state.question;
        array.push(val);
        q.tag = array;
        this.setState({ question : q });
    }

    companyChange = (val) => {
        let array = [];
        const q = this.state.question;
        array.push(val);
        q.company = array;
        this.setState({ question : q });
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
                            changeTag = {this.tagChange}
                            changeCompany = {this.companyChange}
                            />
                        { this.renderData() }
                    </div>
                </div>
            </div>
        );
    }

}

export default withStyles(QuestionsPage, s);
