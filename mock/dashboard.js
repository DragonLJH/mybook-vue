const Mock = require('mockjs')

const CarouselData = Mock.mock({
    'items|6': [{
        "name": "@name",
        "msg": "@sentence(5,8)",
        "type|1": ["Computer", "SEM", "Communication", "Other"],
        "img": function () {
            return "@image('200x100', '" + "@color" + "', '" + this.name + "')"
        }
    }]
})

const ScrollXData = Mock.mock({
    'items|100': [{
        "name": "@name",
        "msg": "@sentence(5,8)",
        "type|1": ["Computer", "SEM", "Communication", "Other"],
        "img": function () {
            return "@image('200x100', '" + "@color" + "', '" + this.name + "')"
        },
        "number|1-100": 0
    }]
})


const PageData = Mock.mock({
    'items|160': [{
        "name": "@name",
        "msg": "@sentence(5,8)",
        "type|1": ["Computer", "SEM", "Communication", "Other"],
        "img": function () {
            return "@image('200x100', '" + "@color" + "', '" + this.name + "')"
        },
        "number|1-100": 0
    }]
})

const CommonShowData = Mock.mock({
    'items|6': [{
        "name": "@name",
        "msg": "@sentence(5,8)",
        "type|1": ["Computer", "SEM", "Communication", "Other"],
        "img": function () {
            return "@image('300x200', '" + "@color" + "', '" + this.name + "')"
        },
        "number|1-100": 0
    }]
})

module.exports = [
    {
        url: '/vue-admin-template/dashboard/CarouselData',
        type: 'get',
        response: config => {
            const items = CarouselData.items
            return {
                code: 20000,
                data: {
                    total: items.length,
                    items: items
                }
            }
        }
    }, {
        url: '/vue-admin-template/dashboard/ScrollXData',
        type: 'get',
        response: config => {
            const items = ScrollXData.items
            return {
                code: 20000,
                data: {
                    total: items.length,
                    items: items
                }
            }
        }
    }, {
        url: '/vue-admin-template/dashboard/PageData',
        type: 'get',
        response: config => {
            const items = PageData.items
            return {
                code: 20000,
                data: {
                    total: items.length,
                    items: items
                }
            }
        }
    }, {
        url: '/vue-admin-template/dashboard/CommonShowData',
        type: 'get',
        response: config => {
            const items = CommonShowData.items
            return {
                code: 20000,
                data: {
                    total: items.length,
                    items: items
                }
            }
        }
    }
]
