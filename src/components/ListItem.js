import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export default class ListItem extends Component {
  constructor(props) {
    super(props)
  
    this.toggleStatus = this.toggleStatus.bind(this)
    this.state = {
    }
  }
  
  static propTypes = {}

  toggleStatus() {
    this.props.onItemToggleStatus(this.props.item.id)
  }

  render() {
    let item = this.props.item
    return (
      <Card>
        <Row>
          <Col span={20}>
            <div onClick={this.toggleStatus}>
              {item.status ? (
                <strike>{item.content}</strike>
              ) : (
                <span>{item.content}</span>
              )}
            </div>
          </Col>
          <Col span={4}>
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Col>
        </Row>
      </Card>
    )
  }
}
