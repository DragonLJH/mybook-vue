const Mock = require('mockjs')

const SearchData = Mock.mock({
    'items|160': [{
        "name": "@name",
        "msg": "@sentence(5)",
        "type|1": ["Computer", "SEM", "Communication", "Other"],
        "img": function () {
            return "@image('200x150', '" + "@color" + "', '" + this.name + "')"
        },
        "number|1-100": 0
    }]
})

module.exports = [
    {
        url: '/vue-admin-template/search/SearchData',
        type: 'get',
        response: config => {
            const items = SearchData.items
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
