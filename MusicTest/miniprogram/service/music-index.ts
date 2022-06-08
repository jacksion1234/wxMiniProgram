import MyRequest from './http'
import { MusicPlaylistType } from './types/music'

export function getBannerList(type: string) {
  return MyRequest.get(`/banner?type=${type}`)
}

// export function getRankingMusicList(idx: number) {
//   return MyRequest.get(`/top/list?idx=${idx}`)
// }
export function getRankingMusicList(id: number) {
  return MyRequest.get(`/playlist/detail?id=${id}`)
}

export function getMusicMenu(cat: string = '全部', limit: number = 12, offset: number = 10) {
  return MyRequest.get('/top/playlist', {
    cat,
    limit,
    offset
  }).then((res: MusicPlaylistType) => res)
}
export function getPeakingList(id: number|string) {
  return MyRequest.get(`/playlist/detail?id=${id}`)
}