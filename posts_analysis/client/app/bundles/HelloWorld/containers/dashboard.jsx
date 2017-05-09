import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import Form from '../components/form';
import List from '../components/list';
import * as statActions from '../actions/statActions';

const mapStateToProps = state => ({
  stats: state
})

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
   const { dispatch, stats } = this.props;
    const actions = bindActionCreators(statActions, dispatch);
    const { addStat } = actions;

    App.cable.subscriptions.create("PostAnalysisChannel", {
      connected: () => console.log("connected"),
      disconnected: () => console.log("disconnected"),
      received: (data) => {
        console.log(data);
        addStat(data);
        // dispatch(act);
        console.log(this.props);
      }
    })
  }

  componentWillUnmount() {
    App.cable.subscriptions.remove("PostAnalysisChannel");
  }

  render() {
    const { dispatch, stats } = this.props;
    return <div>
       <List stats={stats}/>
       <Form />
    </div>;
  }
}

export default connect(mapStateToProps)(Dashboard);
