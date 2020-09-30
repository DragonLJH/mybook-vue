import request from '@/utils/request'

export function getCarouselData(params) {
    return request({
        url: '/vue-admin-template/dashboard/CarouselData',
        method: 'get',
        params
    })
}

export function getScrollXData(params) {
    return request({
        url: '/vue-admin-template/dashboard/ScrollXData',
        method: 'get',
        params
    })
}


export function getPageData(params) {
    return request({
        url: '/vue-admin-template/dashboard/PageData',
        method: 'get',
        params
    })
}



export function getCommonShowData(params) {
    return request({
        url: '/vue-admin-template/dashboard/CommonShowData',
        method: 'get',
        params
    })
}