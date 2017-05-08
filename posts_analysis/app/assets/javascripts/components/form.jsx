var Form = React.createClass({
  getInitialState() {
    return { keyword: "", count: 0 }
  },

  onChange(e) {
    let state = {};
    state[e.target.name] = $.trim(e.target.value);
    this.setState(state);
  },

  onSubmit() {
    return $.ajax({
      url: '/post_analysis/run',
      type: 'POST',
      data: {
        uft8: "✓",
        authenticity_token: this.props.token,
        keyword: this.state.keyword,
        count: this.state.count
      }
    })
  },

  render() {
    return <form onSubmit={this.onSubmit}>
      <p><input type="text" name="keyword" id="keyword" onChange={this.onChange}/></p>
      <p><input type="text" name="count" id="count" onChange={this.onChange}/></p>
      <button type="submit">Let's Go</button>
    </form>;
  }
})
