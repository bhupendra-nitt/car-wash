import React, { Component } from 'react'
import { connect } from 'react-redux'
import EntryForm from './EntryForm';
import Table from './Table';
import LineGraph from './Chart';

import {
  addNewBill,
  toggleChart,
  billsToBePaid,
  updateBudget
} from './actions'
import './_carWash.scss'

class CarWash extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { displayMode, bills, showChart, budget, showBillsToPay, billsToPaid } = this.props;
    if(showChart) {
      return <LineGraph data={bills} hideChart={this.props.toggleChart}/>
    }
    if(showBillsToPay) {
      return <Table data={billsToPaid}/>
    }
    return (
      <div className='car-wash'>
        {displayMode && 
          <React.Fragment>
            <div
              className="car-wash__cta"
              onClick={this.props.handleNewBill}>
              Add
            </div>
            <div
              className="car-wash__cta"
              onClick={this.props.toggleChart}>
              Show Graph
            </div>
            <div
              className="car-wash__cta"
              onClick={this.props.billsToBePaid}>
              Show Bills to be paid
            </div>
            <div className="car-wash__cta">Budget: 
                <input
                  value={budget}
                  onChange={e => this.props.updateBudget(e.target.value)}
                />
              </div>
            <Table data={bills}/>
          </React.Fragment>
        }

        {!displayMode && <EntryForm />}
        
      </div>
    )
  }
}

export default connect(
  ({
    bills,
    displayMode,
    showChart,
    budget,
    billsToPaid,
    showBillsToPay
  }) => {
    return {
      bills,
      displayMode,
      showChart,
      budget,
      billsToPaid,
      showBillsToPay
    }
  },
  dispatch => {
    return {
      handleNewBill: data => dispatch(addNewBill(data)),
      toggleChart: _ => dispatch(toggleChart()),
      billsToBePaid: _ => dispatch(billsToBePaid()),
      updateBudget: budget => dispatch(updateBudget(budget))
    }
  }
)(CarWash)
