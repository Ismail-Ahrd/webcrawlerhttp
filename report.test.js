const { test, expect } = require('@jest/globals')
const { sortPages } = require('./report.js')

test('sortPages', () => {
    const input = {
        "https://wagslane.dev/path2" : 1,
        "https://wagslane.dev" : 3,
        "https://wagslane.dev/path1" : 7,
        "https://wagslane.dev/path3" : 5
    }
    const actual = sortPages(input)
    const expected = [
        ["https://wagslane.dev/path1", 7],
        ["https://wagslane.dev/path3", 5],
        ["https://wagslane.dev", 3],
        ["https://wagslane.dev/path2", 1]
    ]
    expect(actual).toEqual(expected)
})
