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
import QuestionItem from './QuestionItem';
import FloatButton from '../UI/FloatButton';
import AddQuestionModal from './AddQuestionModal';

const title = 'Questions';


class QuestionsPage extends Component {

    constructor(props) {
        super(props);
        this.state = QuestionStore.getState();
        // AppActions.getData();
        this.onChange = this.onChange.bind(this);
        this.openModal = this.openModal.bind(this);
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

openModal() {
    this.setState({ modalIsOpen: true});
}

closeModal() {
    this.setState({ modalIsOpen: false});
}

renderData() {
    return this.state.data.map((data) => {
        return (
            <QuestionItem key={data.id} data={data} />
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
                <FloatButton openModal={this.openModal}/>
                <AddQuestionModal
                    open={this.state.modalIsOpen}
                    close={this.closeModal} />
                { this.renderData() }
            </div>
        </div>
      </div>
    );
}

}

export default withStyles(QuestionsPage, s);
