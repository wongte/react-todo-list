import axios from 'axios'

const TODO_API_URL = 'https://5e9ec500fb467500166c4658.mockapi.io/todos'
class ToDoApis {
  static getAllListItem() {
    return axios.get(TODO_API_URL)
  }
  static updateItem(item) {
    return axios.put(TODO_API_URL + '/' + item.id, item)
  }
  static deleteItem(item) {
    return axios.delete(TODO_API_URL + '/' + item.id)
  }
}

export default ToDoApis