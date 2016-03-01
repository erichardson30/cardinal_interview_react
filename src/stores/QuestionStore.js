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
import QuestionSource from '../sources/QuestionSource';

class QuestionStore {
    constructor() {
        this.bindActions(QuestionActions);
        this.exportAsync(QuestionSource);
        this.loaded = false;
        this.data = [];
        this.error = null
    }

    onGetQuestions(data) {
        if (data === false) {
            this.onFailed()
        } else {
            this.data = data;
            this.loaded = true;
        }
    }

    onFailed(err) {
        this.loaded = true;
        this.error = "Data unavailable";
    }
}

export default alt.createStore(QuestionStore, 'QuestionStore');
