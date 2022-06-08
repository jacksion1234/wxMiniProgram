import MyRequest from '../../service/http'

export function getTopMv(offset?: number, limit = 10) {
    return MyRequest.get('/top/mv', {
      offset,
      limit
    })
}