var DashboardBox = React.createClass({
  getInitialState() {
    this.initWebSocket();
    return { data: [] }
  },

  initWebSocket() {
    if (App && App.post_anaysis == undefined) {
      App.post_analysis = App.cable.subscriptions.create("PostAnalysisChannel", {
        connected: () => console.log('ws connected'),
        disconnected: () => console.log('ws disconnected'),
        received: (data) => this.receiveData(data)
      })
    }
  },

  receiveData(data) {
    const newData = this.state.data.concat(data.result);
    this.setState({ data: newData })
  },

  render() {
    return <div>
      <Form token={this.props.authenticity_token}/>
      <List data={this.state.data}/>
    </div>;
  }
})
