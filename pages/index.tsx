import { Avatar } from '@ui/avatar';
import React from 'react';

export default class IndexPage extends React.Component {
  public render() {
    return <Avatar size={300} src='/static/images/profile.png' bordered color='#FFAB00' />;
  }
}
