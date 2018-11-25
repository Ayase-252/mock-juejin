import request from './request'

export default class TimelineApi {
  static async getPosts () {
    try {
      const res = await request.get('/posts')
      return res.data
    } catch (err) {
      console.error(err)
    }
  }
}