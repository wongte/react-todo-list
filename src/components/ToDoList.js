import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import { Row, Col, Input } from 'antd'
import ToDoApis from '../apis/ToDoApis'

export default class ToDoList extends Component {
  constructor(props) {
    super(props)

    this.addItem = this.addItem.bind(this)
    this.toggleItemStatus = this.toggleItemStatus.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  
    this.state = {
      listItems: [],
    }
  }
  
  static propTypes = {
  }


  componentDidMount() {
    ToDoApis.getAllListItem().then(response => {
      this.setState({ listItems: response.data })
    })
  }

  addItem(event) {
    let listItems = this.state.listItems
    listItems.push({
      id: '' + (Math.floor(Math.random() * 100)),
      content: event.target.value,
      status: false
    })
    this.setState({ listItems })
  }

  toggleItemStatus(id) {
    let listItems = this.state.listItems
    let indexOfItem = listItems.findIndex(item => item.id === id)
    listItems[indexOfItem].status = !listItems[indexOfItem].status
    ToDoApis.updateItem(listItems[indexOfItem]).then(response => {
      this.setState({ listItems })
    })
  }
  
  deleteItem(id) {
    let listItems = this.state.listItems
    let indexOfItem = listItems.findIndex(item => item.id === id)
    ToDoApis.deleteItem(listItems[indexOfItem]).then(response => {
      listItems.splice(indexOfItem, 1)
      this.setState({ listItems })
    })
  }

  render() {
    return (
      <div>
        {this.state.listItems.map((item, index) => (
          <Row key={index}>
            <Col span={24}>
              <ListItem
                item={item}
                onItemToggleStatus={this.toggleItemStatus}
                onItemDeleted={this.deleteItem}
              />
            </Col>
          </Row>
        ))}
        <Input
          placeholder="Add a new item here..."
          onPressEnter={this.addItem}
        />
      </div>
    )
  }
}
