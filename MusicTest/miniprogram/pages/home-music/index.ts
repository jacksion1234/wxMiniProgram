// pages/home-music/index.ts
import { getBannerList, getMusicMenu } from '../../service/music-index';
import { RankingStore } from '../../store/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '我是音乐',
    bannerList: [] as any,
    hotMusic: [] as any,
    recommendMusic: [] as any,
    peaklists: [] as any, // 巅峰榜
    imageHeight: 0,
    rankingMusicList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getData()
    // 发起共享数据的请求
    RankingStore.dispatch('getRankingList')

    // 获取共享的数据
    RankingStore.onState('hotRanking', (res: any) => {
      if (!res.tracks) return
      this.setData({rankingMusicList: res.tracks.slice(0, 6)})
      console.log('home-music:', this.data.rankingMusicList);
    })
  },

  /**
   * 获取后台数据
   */
  getData() {
    getBannerList('2').then((res: any) => {
      this.setData({ bannerList: res.banners })
    })

    getMusicMenu().then(res => {
      console.log('热门歌曲', res.playlists);
      this.setData({ hotMusic: res.playlists })
    })
    // 查询推荐歌单
    getMusicMenu('华语').then(res => {
      this.setData({ recommendMusic: res.playlists })
    })
  },
  handleImageLoad() {
    const query = wx.createSelectorQuery()
    query.select('.swiper-image').boundingClientRect()
    // query.selectViewport().scrollOffset()
    query.exec((res: any) => {
      const data = res[0]
      this.setData({ imageHeight: data.height })
    })
    console.log('图片加载完毕');
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})