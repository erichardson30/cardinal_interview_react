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
import s from './InterviewPage.scss';
import InterviewItem from './InterviewItem';
import InterviewStore from '../../stores/InterviewStore';
import InterviewActions from '../../actions/InterviewActions';
import Loader from 'react-loader';

const title = 'Inverviews';


class InterviewPage extends Component {

    constructor(props) {
        super(props);
        this.state = InterviewStore.getState();
        // AppActions.getData();
        this.onChange = this.onChange.bind(this);
    }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
    InterviewStore.listen(this.onChange);
}

componentWillUnmount() {
    InterviewStore.unlisten(this.onChange);
}

onChange(state) {
    this.setState(state);
}

renderData() {
    return this.state.data.map((data) => {
        return (
            <InterviewItem key={data.id} data={data} />
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
                { this.renderData() }
            </div>
        </div>
      </div>
    );
}

}

export default withStyles(InterviewPage, s);
