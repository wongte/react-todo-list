import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import { Row, Col, Input } from 'antd'

export default class ToDoList extends Component {
  constructor(props) {
    super(props)

    this.addItem = this.addItem.bind(this)
  
    this.state = {
      listItems: [
        {
          id: '1',
          content: 'content 1',
          status: true,
        },
        {
          id: '1',
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

  render() {
    return (
      <div>
        {this.state.listItems.map((item, index) => (
          <Row key={index}>
            <Col span={24}>
              <ListItem item={item} />
            </Col>
          </Row>
        ))}
        <Input placeholder="Add a new item here..." onPressEnter={this.addItem}/>
      </div>
    )
  }
}
