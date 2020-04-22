import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import { Row, Col } from 'antd'

export default class ToDoList extends Component {
  constructor(props) {
    super(props)
  
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
    prop: PropTypes,
  }

  render() {
    return (
      <div>
        {this.state.listItems.map((item) => (
          <Row>
            <Col span={24}>
              <ListItem item={item} />
            </Col>
          </Row>
        ))}
      </div>
    )
  }
}
