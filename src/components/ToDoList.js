import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import { Row, Col, Input } from 'antd'

export default class ToDoList extends Component {
  constructor(props) {
    super(props)

    this.addItem = this.addItem.bind(this)
    this.toggleItemStatus = this.toggleItemStatus.bind(this)
  
    this.state = {
      listItems: [
        {
          id: '1',
          content: 'content 1',
          status: true,
        },
        {
          id: '2',
          content: 'content 1',
          status: false,
        },
      ],
    }
  }
  
  static propTypes = {
  }

  addItem(event) {
    let listItems = this.state.listItems
    listItems.push({
      content: event.target.value,
      status: false
    })
    this.setState({ listItems })
  }

  toggleItemStatus(id) {
    let listItems = this.state.listItems
    let indexOfItem = listItems.findIndex(item => item.id === id)
    listItems[indexOfItem].status = !listItems[indexOfItem].status
    this.setState({ listItems })
  }

  render() {
    return (
      <div>
        {this.state.listItems.map((item, index) => (
          <Row key={index}>
            <Col span={24}>
              <ListItem item={item} onItemToggleStatus={this.toggleItemStatus} />
            </Col>
          </Row>
        ))}
        <Input placeholder="Add a new item here..." onPressEnter={this.addItem}/>
      </div>
    )
  }
}
