var List = React.createClass({
  render() {
    console.log(this.props.data);
    const keywords = this.props.data.map((req) => this.renderRequest(req));
    return <div>
      <h1>List:</h1>
      {keywords}
    </div>;
  },

  renderRequest(req) {
    return <div>
      <h2>{req.keyword + ':' + req.posts.length}</h2>
    </div>
  }
})
