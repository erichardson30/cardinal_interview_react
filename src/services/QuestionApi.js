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
    }
}
