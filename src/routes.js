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
import App from './components/App';
import ContentPage from './components/ContentPage';
import TemplatePage from './components/TemplatePage';
import LoginPage from './components/LoginPage';
import QuestionPage from './components/QuestionPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import TemplateActions from './actions/TemplateActions';
import QuestionActions from './actions/QuestionActions';

async function getContextComponent(location, callback) {
  const response = await fetch(`/api/content?path=${location.pathname}`);
  const content = await response.json();
  // using an arrow to pass page instance instead of page class; cb accepts class by default
  callback(null, () => <ContentPage {...content} />);
}

const getTemplates = async (location, callback) => {
  await TemplateActions.getTemplates();
  callback(null, () => <TemplatePage />)
}

const getQuestions = async (location, callback) => {
  await QuestionActions.getQuestions();
  callback(null, () => <QuestionPage />)
}

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute getComponent={getContextComponent} />
      <Route path="login" component={LoginPage} />
      <Route path="templates" getComponent={getTemplates} />
      <Route path="questions" getComponent={getQuestions} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
