import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import { Row, Col, Input, Skeleton } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import ToDoApis from '../apis/ToDoApis'

export default class ToDoList extends Component {
  constructor(props) {
    super(props)

    this.addItem = this.addItem.bind(this)
    this.toggleItemStatus = this.toggleItemStatus.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.onAddItemInputChange = this.onAddItemInputChange.bind(this)

    this.state = {
      listItems: [],
      isLoading: true,
      addItemInputValue: ''
    }
  }

  static propTypes = {}

  componentDidMount() {
    ToDoApis.getAllListItem().then((response) => {
      this.setState({ listItems: response.data, isLoading: false })
    })
  }

  addItem(event) {
    let value = event.target.value
    ToDoApis.addItem(value).then((response) => {
      let listItems = Array.from(this.state.listItems)
      listItems.push(response.data)
      this.setState({ addItemInputValue: '', listItems })
    })
  }

  toggleItemStatus(id) {
    let listItems = Array.from(this.state.listItems)
    let indexOfItem = listItems.findIndex((item) => item.id === id)
    let item = listItems[indexOfItem]
    item.status = !item.status
    ToDoApis.updateItem(item).then((response) => {
      listItems[indexOfItem] = response.data
      this.setState({ listItems })
    })
  }

  deleteItem(id) {
    let listItems = Array.from(this.state.listItems)
    let indexOfItem = listItems.findIndex((item) => item.id === id)
    ToDoApis.deleteItem(listItems[indexOfItem]).then((response) => {
      listItems.splice(indexOfItem, 1)
      this.setState({ listItems })
    })
  }

  onAddItemInputChange(event) {
    this.setState({ addItemInputValue: event.target.value })
  }

  render() {
    return (
      <div>
        <Row gutter={[0, 24]} justify="center">
          <Col>
            <Input
              ref="addItemInput"
              style={{ width: '500px' }}
              placeholder="Add a new item here..."
              value={this.state.addItemInputValue}
              onChange={this.onAddItemInputChange}
              onPressEnter={this.addItem}
              suffix={<PlusOutlined />}
            />
          </Col>
        </Row>
        <Row gutter={[12, 24]}>
          {this.state.isLoading ? (
            <Col span={10}>
              <Skeleton active />
            </Col>
          ) : (
            this.state.listItems.map((item, index) => (
              <Col span={6} key={index}>
                <ListItem
                  item={item}
                  onItemToggleStatus={this.toggleItemStatus}
                  onItemDeleted={this.deleteItem}
                />
              </Col>
            ))
          )}
        </Row>
      </div>
    )
  }
}
