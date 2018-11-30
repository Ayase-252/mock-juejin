import request from './request'

export default class {
  static async getPost (id) {
    try {
      const res = await request.get(`posts/${id}`)
      return res.data
    } catch (err) {
      throw err
    }
  }
}
