import request from '@/utils/request'

export function getSearchData(params) {
  return request({
    url: '/vue-admin-template/search/SearchData',
    method: 'get',
    params
  })
}
