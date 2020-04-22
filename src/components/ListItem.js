import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Button } from 'antd'
import { CheckOutlined, DeleteFilled } from '@ant-design/icons'

export default class ListItem extends Component {
  constructor(props) {
    super(props)
  
    this.toggleStatus = this.toggleStatus.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.state = {
    }
  }
  
  static propTypes = {}

  toggleStatus() {
    this.props.onItemToggleStatus(this.props.item.id)
  }
  
  deleteItem() {
    this.props.onItemDeleted(this.props.item.id)
  }

  render() {
    let item = this.props.item
    return (
      <Card
        actions={[
          <CheckOutlined
            onClick={this.toggleStatus}
          />,
          <DeleteFilled
            onClick={this.deleteItem}
          />,
        ]}
      >
        <p>
          {item.status ? (
            <strike>{item.content}</strike>
          ) : (
            <span>{item.content}</span>
          )}
        </p>
      </Card>
    )
  }
}
