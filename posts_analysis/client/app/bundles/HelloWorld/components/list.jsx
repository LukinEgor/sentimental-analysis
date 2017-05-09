import React from 'react';

export default class List extends React.Component {
  render() {
    console.log("list:");
    console.log(this.props);
    // const keywords = this.props.stats ? this.props.stats.map((req) => this.renderRequest(req)) : 'empty';
    return <div>
      <h1>List:</h1>
    </div>;
  }

  renderRequest(req) {
    return <div>
      <h2>{req.keyword + ':' + req.posts.length}</h2>
    </div>
  }
}
