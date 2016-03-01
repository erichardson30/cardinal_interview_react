import Api from '../services/QuestionApi';
import QuestionActions from '../actions/QuestionActions';

let QuestionSource = {
    fetchData() {
        return {
            async remote(state) {
                return Api.getQuestions()
            },

            shouldFetch(state) {
                return (state.data.length == 0);
            },
            success: QuestionActions.getQuestions
        }
    }
};

export default QuestionSource;
