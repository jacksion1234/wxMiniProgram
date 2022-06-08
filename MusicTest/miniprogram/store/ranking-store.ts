import { HYEventStore } from 'hy-event-store'
import { getRankingMusicList, getPeakingList } from '../service/music-index'

const songMap = {
  0: {name: 'newRanking', key: 3779629},
  1: {name: 'hotRanking', key: 3778678},
  2: {name: 'originRanking', key: 2884035},
  3: {name: 'upRanking', key: 19723756},
} as any
const rankingStore = new HYEventStore({
  state: {
    newRanking: {}, // 0: 新歌
    hotRanking: {}, // 1: 热门
    originRanking: {}, // 2: 原创
    upRanking: {} // 3: 飙升
  },
  actions: {
    getRankingList(ctx: any) {
      getRankingMusicList(3778678).then((res: any) => {
        // console.log('热歌榜的值', res);
        ctx.hotRanking = res.playlist
      })
    },
    getPeakingListAction(ctx: any) {
      for (let i = 0; i < 4; i++) {
        const key = songMap[i].key
        getPeakingList(key).then(res => {
          const name = songMap[i].name
          console.log('------', res);
          ctx[name] = res.playlist
        })
      }
    }
  }
})
export default rankingStore