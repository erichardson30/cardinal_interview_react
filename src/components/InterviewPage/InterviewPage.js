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
// import s from './InterviewPage.scss';
import Loader from 'react-loader';

const title = 'Inverviews';


class InterviewPage extends Component {

    constructor(props) {
        super(props);
    }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };


  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
        </div>
      </div>
    );
}

}

// export default withStyles(InterviewPage, s);
export default InterviewPage;
