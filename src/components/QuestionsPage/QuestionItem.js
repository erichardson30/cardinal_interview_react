/**
 * React Starter (https://github.com/erichardson30/react-starter)
 *
 * Copyright © 2016 Eric Richardson. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

class QuestionItem extends Component {
    renderTags() {
      return this.props.data.tag.map((tag) => {
          return (
              <FlatButton label={tag} />
          )
      })
    }

    renderCompany() {
      return this.props.data.company.map((company) => {
          return (
              <FlatButton label={company} />
          )
      })
    }

    render() {
        return (
          <Card>
            <CardTitle title={this.props.data.text} />
            <CardText>
              {this.props.data.answer}
            </CardText>
            <CardActions>
              { this.renderTags() }
              { this.renderCompany() }
            </CardActions>
          </Card>
        )
    }
}

export default QuestionItem;
