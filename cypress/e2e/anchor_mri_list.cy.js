/* eslint-disable no-undef */

describe('Test Broken Links', () => {
  it('Test Broken Links', () => {
    cy.request({
      method: 'GET',
      url: 'https://ad1-il-000349.ooh-prod.linksvc.com:2443/',
      body: { name: 'foo' },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.gt(100) // status returned is 404
    })
  })
  it('Test Broken Links', () => {
    cy.request({
      method: 'GET',
      url: 'https://ad1-il-000353.ooh-prod.linksvc.com:2443/',
      body: { name: 'foo' },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.gt(100) // status returned is 404
    })
  })
  it('Test Broken Links', () => {
    cy.request({
      method: 'GET',
      url: 'https://ad1-il-000349.ooh-prod.linksvc.com:2443/',
      body: { name: 'foo' },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.gt(100) // status returned is 404
    })
  })
})
