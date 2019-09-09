import React from 'react';
import { Avatar } from '../ui/avatar';

export default class IndexPage extends React.Component {
  render () {
    return <Avatar size={300} src='/static/images/profile.png' bordered color='#FFAB00' />
  }
}
