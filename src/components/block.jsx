import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';

export default class Block extends React.Component {
  render() {
    return (
      <Card {...this.props}>
        <CardHeader
          title={this.props['title']}
          subtitle={this.props['subtitle']}
          avatar="http://lorempixel.com/100/100/nature/"/>
        <CardMedia overlay={<CardTitle title={this.props['title']} subtitle={this.props['subtitle']}/>}>
          <img src="http://lorempixel.com/1200/500/nature/"/>
        </CardMedia>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
  }
}
