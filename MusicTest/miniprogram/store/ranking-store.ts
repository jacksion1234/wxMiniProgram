import { HYEventStore } from 'hy-event-store'
import { getRankingMusicList } from '../service/music-index'

const rankingStore = new HYEventStore({
  state: {
    hotRanking: {}
  },
  actions: {
    getRankingList(ctx: any) {
      getRankingMusicList(3778678).then((res: any) => {
        // console.log('热歌榜的值', res);
        ctx.hotRanking = res.playlist
      })
    }
  }
})
export default rankingStore