import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Button } from 'antd'

export default class ListItem extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    let item = this.props.item
    return (
      <Card>
        <Row>
          <Col span={20}>
            {item.status ? (
              <strike>{item.content}</strike>
            ) : (
              <span>{item.content}</span>
            )}
          </Col>
          <Col span={4}>
            <Button>Delete</Button>
          </Col>
        </Row>
      </Card>
    )
  }
}
