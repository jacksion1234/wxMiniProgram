export interface MusicPlaylistType {
  cat: "全部"
  code: 200
  more: true
  playlists: PlayList[]
  total: 622
}

export interface PlayList {
  adType: number
  alg: string
  anonimous: boolean
  cloudTrackCount: number
  commentCount: number
  commentThreadId: string
  coverImgId: number
  coverImgId_str: string
  coverImgUrl: string
  coverStatus: number
  createTime: number
  creator: any
  description: string
  highQuality: boolean
  id: number
  name: string
  newImported: boolean
  ordered: boolean
  playCount: number
  privacy: number
  recommendInfo: any
  shareCount: number
  specialType: number
  status: number
  subscribed: any
  subscribedCount: number
  subscribers: Array<any>
  tags: Array<string>
  totalDuration: number
  trackCount: number
  trackNumberUpdateTime: number
  trackUpdateTime: number
  tracks: any
  updateTime: number
  userId: number
}