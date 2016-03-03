import axios from 'axios';
import { interviewAppURL } from '../config';

export default {

    async getQuestions() {
      let result = [];

      try {
          const response = await axios.get(interviewAppURL + '/questions');
          if (response.status !== 200) {
              result = false;

          } else {
              result = response.data;
              return result;
          }
      } catch (err) {
          console.log(err);
          result = false;
      }
      return result;
  },

    async createQuestion(state) {
        let success = null;
        const question = state.question;
        try {
            const response = await axios.post(interviewAppURL + '/questions', question);

            if (response.status !== 200) {
                success = false;
            } else {
                success = true;
            }
        } catch (err) {
            console.log(err);
            success = false;
        }
        return success;
    },

    async deleteQuestion(id) {
        let success = null;
        try {
            const response = await axios.delete(interviewAppURL + '/questions/' + id);

            if (response.status !== 200) {
                success = false;
            } else {
                success = true
            }
        } catch (err) {
            console.log(err);
            success = false;
        }
        return success;
    }
}
