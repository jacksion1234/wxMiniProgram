import MyRequest from './http'
/**
 * 获取mv的播放地址
 * @param id 
 */
export function getMvDetail(id: number) {
  return MyRequest.get('/mv/url', {
    id
  }).then((res: any) => res)
}

/**
 * 获取mv数据
 * @param id 
 */
export function getMvInfo(mvid: number) {
  return MyRequest.get('/mv/detail', {
    mvid
  }).then((res: any) => res)
}

/**
 * 相关视频
 * @param mvid 
 */
export function getRelateMv(id: number) {
  return MyRequest.get('/related/allvideo', {
    id
  }).then((res: any) => res)
}
