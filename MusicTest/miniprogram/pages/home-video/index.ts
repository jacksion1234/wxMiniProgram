// pages/home-video/index.ts
import { getTopMv } from './api_video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: [] as any, // 电影列表
    isHasMore: true, // 控制是否到底页
    offest: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getList(0, 20)
  },

  /**
   * 公用的查询接口
   * @param offest 分页
   * @param limit 每页最大显示数
   */
  async getList(offest: number, limit: number) {
    if (!this.data.isHasMore) return

    // 展示加载动画
    wx.showNavigationBarLoading()

    const _this = this
    const res: any = await getTopMv(offest, limit)
    let data = res.data
    this.setData({ isHasMore: res.hasMore })
    if (offest === 0) {
      // 表示是下拉刷新或者初始化查询
      console.log('1111111111');
      _this.setData({ movieList: data })
    } else {
      // 表示是上划加载更多
      _this.setData({ movieList: this.data.movieList.concat(data) })
    }
    // 隐藏加载动画
    wx.hideNavigationBarLoading()
    wx.stopPullDownRefresh()
  },

  /**
   * 点击进入mv详情
   */
  handleVideoItemClick(event: any) {
    console.log(event.currentTarget.dataset.item)
    const id = event.currentTarget.dataset.item.id
    wx.navigateTo({ url: `../video-detail/index?id=${id}` })
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
    console.log('触发下拉');
    this.setData({ isHasMore: true })
    this.getList(0, 20)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('触底了');
    this.data.offest = this.data.movieList.length
    this.getList(this.data.movieList.length, 20)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})