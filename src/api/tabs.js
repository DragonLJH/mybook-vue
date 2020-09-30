import request from '@/utils/request'

export function getTabsData(params) {
    return request({
        url: '/vue-admin-template/tabs/TabsData',
        method: 'get',
        params
    })
}
