import React from 'react';
import { connect } from 'react-redux';

class GamestateStatDisplay extends React.Component {
  render() {
    return (
      <div className='gamestate-stat-display-box'>
        <label>{this.props.label}</label>
        <input type="text"
               className="input stat-display-input"
               value={this.props.value}
               disabled={true}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    value: parseFloat(state.getIn(['gamestateStats', ownProps.skey, 'value'], 0).toPrecision(4)).toExponential(),
    label: state.getIn(['gamestateStats', ownProps.skey, 'label'], "")
  }
}

export default connect(mapStateToProps)(GamestateStatDisplay);