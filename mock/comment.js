const Mock = require('mockjs')

const TableData = Mock.mock({
    'items|100': [{
        "userName": "@name",
        "comment": "@sentence(10)"
    }]
})

module.exports = [
    {
        url: '/vue-admin-template/comment/TableData',
        type: 'get',
        response: config => {
            const items = TableData.items
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
