import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import Form from '../components/form';
import List from '../components/list';
import * as statActions from '../actions/statActions';

const mapStateToProps = state => ({
  stats: state.stats
})

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props);
    const actions = bindActionCreators(statActions, this.props.dispatch);
    const { addStat } = actions;

    App.cable.subscriptions.create("PostAnalysisChannel", {
      connected: () => console.log("connected"),
      disconnected: () => console.log("disconnected"),
      received: (data) => {
        console.log(data);
        addStat(data);
        console.log(this.props);
      }
    })
  }

  componentWillUnmount() {
    App.cable.subscriptions.remove("PostAnalysisChannel");
  }

  render() {
    return <div>
       <List data={this.props.stats}/>
       <Form />
    </div>;
  }
}

export default connect(mapStateToProps)(Dashboard);
