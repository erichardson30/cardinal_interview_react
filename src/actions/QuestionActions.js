/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import alt from '../core/alt';
import Api from '../services/QuestionApi';

class QuestionActions {
    constructor() {
        // put auto generate actions here
    }

    getQuestions() {
        Api.getQuestions().then((result) => {
            this.getQuestionsSuccess(result);
        });
        return true;
    }

    getQuestionsSuccess(data) {
        return data;
    }

    createQuestion(question,state) {
        Api.createQuestion(question).then((result) => {
            this.createQuestionSuccess(result);
        });
        return true;
    }

    createQuestionSuccess(data) {
        return data;
    }

    deleteQuestion(id,state) {
        Api.deleteQuestion(id).then((result) => {
            this.deleteQuestionSuccess(result);
        });
        return true;
    }

    deleteQuestionSuccess(data) {
        return data;
    }
}
export default (alt.createActions(QuestionActions));
