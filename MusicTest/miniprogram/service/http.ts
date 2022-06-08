const BASE_URL = 'https://coderwhy-music.vercel.app'
class GetRequest {
  request(url: string, method: any, params?: any) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        data: params,
        method: method,
        success: (result) => {
          resolve(result.data)
        },
        fail: (res) => {
          reject(res)
        },
        complete: (res: any) => {
          // console.log(res);
        },
      })
    })
  }
  get(url: string, params?: any) {
    return this.request(url, 'GET', params).then((res: any) => res)
  }
  post(url: string, params?: any) {
    return this.request(url, 'POST', params).then((res: any) => res)
  }
}
const myRequest = new GetRequest

export default myRequest
