import axios from 'axios'

export default (inject) => {
  inject('getAll', async (route) => {
    const response = await axios.get(`http://localhost:3001/${route}`)
      return response
  }),
  inject('get', async (route, id) => {
    const response = await axios.get(`http://localhost:3001/${route}/${id}`)
      return response
  })
}