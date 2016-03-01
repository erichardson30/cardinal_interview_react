/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import QuestionStore from '../../stores/QuestionStore';
import QuestionActions from '../../actions/QuestionActions';
import Modal from 'react-modal';

class AddQuestionModal extends Component {
    closeModal() {
        this.props.close()
    }

    render() {
        return (
            <Modal
                isOpen={this.props.open}
                onRequestClose={this.closeModal} >

                <h1>Test Modal</h1>
                <div>Testing 1 2 3</div>
            </Modal>
        );
    }
}

export default AddQuestionModal;
