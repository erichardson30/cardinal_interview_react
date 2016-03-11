/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import alt from '../core/alt';
import QuestionActions from '../actions/QuestionActions';

class QuestionStore {
    constructor() {
        this.bindActions(QuestionActions);
        this.loaded = false;
        this.modalIsOpen = false;
        this.questionAddedSnackbarOpen = false;
        this.questionDeletedSnackbarOpen = false;
        this.data = [];
        this.question = {
            "id": '',
            "text": '',
            "tags": [],
            "answers": [],
            "level": '',
            "tech": '',
            "createdAt": ''
        };
        this.error = null;
    }

    onGetQuestionsSuccess(data) {
        if (data === false) {
            this.onFailed();
        } else {
            this.data = data;
            this.loaded = true;
        }
    }

    onCreateQuestionSuccess(data) {
        if (data === false) {
            this.onFailed();
        } else {
            this.questionAddedSnackbarOpen = true;
        }
    }

    onDeleteQuestionSuccess(data) {
        if (data === false) {
            this.onFailed();
        } else {
            this.questionDeletedSnackbarOpen = true;
        }
    }

    onFailed(err) {
        this.loaded = true;
        this.error = "Data unavailable";
    }
}

export default alt.createStore(QuestionStore, 'QuestionStore');
