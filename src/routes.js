/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { IndexRoute, Route } from 'react-router';
import fetch from './core/fetch';
import App from './containers/App';
import ContentPage from './containers/ContentPage';
import InterviewPage from './containers/InterviewPage';
import LoginPage from './containers/LoginPage';
import QuestionsPage from './containers/QuestionsPage';
import RegisterPage from './containers/RegisterPage';
import NotFoundPage from './containers/NotFoundPage';
import InterviewStore from './stores/InterviewStore';
import QuestionStore from './stores/QuestionStore';

async function getContextComponent(location, callback) {
  const response = await fetch(`/api/content?path=${location.pathname}`);
  const content = await response.json();
  // using an arrow to pass page instance instead of page class; cb accepts class by default
  callback(null, () => <ContentPage {...content} />);
}

const getInterviews = async (location, callback) => {
  await InterviewStore.fetchData();
  callback(null, () => <InterviewPage />)
}

const getQuestions = async (location, callback) => {
  await QuestionStore.fetchData();
  callback(null, () => <QuestionsPage />)
}

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute getComponent={getContextComponent} />
      <Route path="login" component={LoginPage} />
      <Route path="interviews" getComponent={getInterviews} />
      <Route path="questions" getComponent={getQuestions} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
