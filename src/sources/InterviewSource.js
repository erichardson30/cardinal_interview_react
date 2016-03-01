import Api from '../services/InterviewApi';
import InterviewActions from '../actions/InterviewActions';

let InterviewSource = {
    fetchData() {
        return {
            async remote(state) {
                return Api.getInterviews()
            },

            shouldFetch(state) {
                return (state.data.length == 0);
            },
            success: InterviewActions.getInterviews
        }
    }
};

export default InterviewSource;
