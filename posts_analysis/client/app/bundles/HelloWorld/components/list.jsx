import React from 'react';

export default class List extends React.Component {
  render() {
    console.log(this.props.data);
    const keywords = this.props.data ? this.props.data.map((req) => this.renderRequest(req)) : 'empty';
    return <div>
      <h1>List:</h1>
      {keywords}
    </div>;
  }

  renderRequest(req) {
    return <div>
      <h2>{req.keyword + ':' + req.posts.length}</h2>
    </div>
  }
}
