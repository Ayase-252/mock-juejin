import request from './request'

export default class Books  {
  static async getInterestedBooks () {
    try {
      const res = await request.get('/books')
      return res.data
    } catch (err) {
      console.error(err)
    }
  }
}