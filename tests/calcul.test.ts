const request = require('supertest')
const apps= require('../app')

describe('Get Endpoints multiplication', () => {
  it('Get correctly the multiplication of a number', async () => {
    const res = await request(apps)
      .get('/3')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual(6)
  })

  it('Failed if multiplicand is not a number', async () => {
    const res = await request(apps)
      .get('/3h')
    expect(res.statusCode).toEqual(400)
    expect(res.text).toEqual("multiplicand is not a number")
  })

  it('Failed if multiplicand is banned', async () => {
    const res = await request(apps)
      .get('/42')
    expect(res.statusCode).toEqual(403)
    expect(res.text).toEqual(`the multiplicand 42 is not authorize`)
  })
})