import { ProfileDetailsHeader } from '@components/profile-details-header';
import React from 'react';

export default class IndexPage extends React.Component {
  public render() {
    return (
      <div style={{ minHeight: '100vh' }}>
        <ProfileDetailsHeader />
      </div>
    );
  }
}
