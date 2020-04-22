import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export default class ListItem extends Component {
  static propTypes = {
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
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Col>
        </Row>
      </Card>
    )
  }
}
