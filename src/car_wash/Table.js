import React from 'react';
import { connect } from 'react-redux';
import { editBill, removeItem } from './actions';
import { categroyOptions } from './constants';

import './_table.scss';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || []
    }
  }

  shouldComponentUpdate (nextProps) {
    if(this.props.data !== nextProps.data) {
      this.setState({data: nextProps.data})
    }
    return true;
  }

  handleFilter = (filter) => {
    if(filter === 'all') {
      this.setState({data: this.props.data});
    } else {
      const bills = this.props.data.filter(item => item.category === filter)
      this.setState({ data: bills });
    }
  }

  render () {
    const { editBill, removeItem } = this.props; 
    const { data } = this.state;
    return (
      <div>
        <select onChange={(e) => this.handleFilter(e.target.value)}>
          <option value='all'>All</option>
          {
            categroyOptions.map(ele => {
            return <option value={ele}>{ele}</option>
            })
          }
       </select>
      <table className="table">
        <tr className="table__row">
          <th >Description</th>
          <th>Category</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
        {
          data.map((ele, index) => {
            return <TableRow
              key={ele.id}
              data={ele}
              key={index}
              editBill={editBill}
              removeItem={removeItem}
            />
          })
        }
      </table>
      </div>
    )
  }
}

const TableRow = ({data, editBill, removeItem}) => {
  return (
    <tr className="table__row">
      <td >{data.description}</td>
      <td >{data.category}</td>
      <td>{data.date}</td>
      <td >{data.amount}</td>
      <td><span onClick={() => editBill(data)}>Edit</span><span onClick={() => removeItem(data)}>Remove</span></td>
    </tr>
  )
}

export default connect(
  null,
  dispatch => {
    return {
      editBill: data => dispatch(editBill(data)),
      removeItem: data => dispatch(removeItem(data))
    }
  }
)(Table)
