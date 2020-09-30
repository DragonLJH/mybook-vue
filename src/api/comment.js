import request from '@/utils/request'

export function getTableData(params) {
  return request({
    url: '/vue-admin-template/comment/TableData',
    method: 'get',
    params
  })
}
