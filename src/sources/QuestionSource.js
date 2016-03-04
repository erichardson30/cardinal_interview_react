import Api from '../services/QuestionApi';
import QuestionActions from '../actions/QuestionActions';

let QuestionSource = {
    fetchData() {
        return {
            async remote(state) {
                return Api.getQuestions()
            },
            success: QuestionActions.getQuestions
        }
    },

    createQuestion(question) {
        return {
            async remote(question) {
                return Api.createQuestion(question)
            },
            success: QuestionActions.createQuestion
        }
    },

    deleteQuestion(state, id) {
        console.log(id);
        return {
            async remote(state, id) {
                return Api.deleteQuestion(id)
            },
            success: QuestionActions.deleteQuestion
        }
    }
};

export default QuestionSource;
