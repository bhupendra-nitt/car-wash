import React from 'react';
import { connect } from 'react-redux';
import { saveBill } from './actions';
import { categroyOptions } from './constants';
import './_entryForm.scss';

class EntryForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
     description: props.currentBill.description || '',
     category: props.currentBill.category || '',
     amount: props.currentBill.amount || 0,
     date: props.currentBill.date || '',
     id: props.currentBill.id || null
    }
  }

  render () {
    const { description, amount, date } = this.state; 
    return (
      <div className='entry-form'>
        <div className="entry-form__description"> Description
          <input value={description} onChange={e => this.setState({description: e.target.value})}/>
        </div>
        <div className="entry-form__category"> Category
        <select
          onChange={e => this.setState({category: e.target.value})}
        >
          <option>Select</option>
          {
            categroyOptions.map(ele => {
              return <option key={ele} value={ele}>{ele}</option>
            })
          }
        </select>
        </div>
        <div className="entry-form__amount"> Amount
  
          <input value={amount} onChange={e => this.setState({amount: e.target.value})}/>
        </div>
        <div className="entry-form__date"> date
          <input value={date} onChange={e => this.setState({date: e.target.value})} type="date"/>
        </div>
        <div
          className="entry-form__update-entry"
          onClick={this.handleSave}
          > 
            Save 
        </div>
      </div>
    )
  }

  handleSave = () => {
    const { description, category, amount, date, id } = this.state;
    const data = {
      description,
      category,
      amount, date,
      id
    }
    this.props.saveBill(data)
  }
}

export default connect(
  ({
    currentBill,
  }) => {
    return {
      currentBill,
    }
  },
  dispatch => {
    return {
      saveBill: data => dispatch(saveBill(data))
    }
  }
)(EntryForm)
