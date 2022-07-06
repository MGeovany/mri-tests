/* eslint-disable no-undef */

export const mriLinks = [
  `https://ad1-nj-001036.ooh-prod.linksvc.com:2443/
https://ad2-nj-001036.ooh-prod.linksvc.com:2443/
https://ad1-ca-000037.ooh-prod.linksvc.com:2443/
https://ad2-ca-000037.ooh-prod.linksvc.com:2443/
https://ad1-pa-001580.ooh-prod.linksvc.com:2443/
https://ad1-il-001545.ooh-prod.linksvc.com:2443/
https://ad2-il-000186.ooh-prod.linksvc.com:2443/
https://ad1-il-001555.ooh-prod.linksvc.com:2443/
https://ad2-il-000235.ooh-prod.linksvc.com:2443/
https://ad1-pa-000161.ooh-prod.linksvc.com:2443/
https://ad1-il-000150.ooh-prod.linksvc.com:2443/
https://ad1-ny-057649.ooh-prod.linksvc.com:2443/
https://ad2-ny-057649.ooh-prod.linksvc.com:2443/
https://ad1-il-000233.ooh-prod.linksvc.com:2443/
https://ad2-il-000233.ooh-prod.linksvc.com:2443/
https://ad1-il-000288.ooh-prod.linksvc.com:2443/
https://ad2-il-000288.ooh-prod.linksvc.com:2443/
https://ad2-il-000316.ooh-prod.linksvc.com:2443/
https://ad1-il-000316.ooh-prod.linksvc.com:2443/
https://ad1-il-000235.ooh-prod.linksvc.com:2443/
https://ad1-pa-000052.ooh-prod.linksvc.com:2443/
https://ad1-nj-000004.ooh-prod.linksvc.com:2443/
https://ad2-il-000150.ooh-prod.linksvc.com:2443/
https://ad1-ny-057568.ooh-prod.linksvc.com:2443/
https://ad1-ny-057569.ooh-prod.linksvc.com:2443/
https://ad2-ny-057569.ooh-prod.linksvc.com:2443/
https://ad1-ny-057641.ooh-prod.linksvc.com:2443/
https://ad2-ny-057641.ooh-prod.linksvc.com:2443/
https://ad1-ny-057633.ooh-prod.linksvc.com:2443/
https://ad2-ny-057633.ooh-prod.linksvc.com:2443/
https://ad1-ny-057644.ooh-prod.linksvc.com:2443/
https://ad2-ny-057644.ooh-prod.linksvc.com:2443/
https://ad1-ny-057638.ooh-prod.linksvc.com:2443/
https://ad2-ny-057638.ooh-prod.linksvc.com:2443/
https://ad1-ny-057639.ooh-prod.linksvc.com:2443/
https://ad2-ny-057639.ooh-prod.linksvc.com:2443/
https://ad2-ny-057642.ooh-prod.linksvc.com:2443/
https://ad1-ny-057642.ooh-prod.linksvc.com:2443/
https://ad1-ny-057643.ooh-prod.linksvc.com:2443/
https://ad2-ny-057643.ooh-prod.linksvc.com:2443/
https://ad1-ny-057646.ooh-prod.linksvc.com:2443/
https://ad2-ny-057646.ooh-prod.linksvc.com:2443/
https://ad1-ny-057645.ooh-prod.linksvc.com:2443/
https://ad2-ny-057645.ooh-prod.linksvc.com:2443/
https://ad1-ny-057640.ooh-prod.linksvc.com:2443/
https://ad2-ny-057640.ooh-prod.linksvc.com:2443/
https://ad1-ny-057637.ooh-prod.linksvc.com:2443/
https://ad2-ny-057637.ooh-prod.linksvc.com:2443/
https://ad2-ny-057647.ooh-prod.linksvc.com:2443/
https://ad1-ny-057647.ooh-prod.linksvc.com:2443/
https://ad1-ny-057564.ooh-prod.linksvc.com:2443/
https://ad1-pa-000118.ooh-prod.linksvc.com:2443/
https://ad2-pa-000118.ooh-prod.linksvc.com:2443/
https://ad1-pa-000116.ooh-prod.linksvc.com:2443/
https://ad2-pa-000116.ooh-prod.linksvc.com:2443/
https://ad1-pa-000156.ooh-prod.linksvc.com:2443/
https://ad1-pa-000139.ooh-prod.linksvc.com:2443/
https://ad1-pa-001907.ooh-prod.linksvc.com:2443/
https://ad1-pa-000084.ooh-prod.linksvc.com:2443/
https://ad1-mn-000010.ooh-prod.linksvc.com:2443/ `
]

describe('Test Broken Links', () => {
  const data = mriLinks.splice(0, 1)[0]
  const units = data.split('\n').map((unit) => {
    const [url, ...rest] = unit.split(' ')

    return { url, ...rest }
  })

  units.map((link, index) =>
    it(`${index}. URL: ${link.url}`, () =>
      cy
        .request({
          method: 'GET',
          url: link.url,
          failOnStatusCode: false
        })
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.duration).to.be.lessThan(5000)
        }))
  )

  //  links.map((link) => it(`${link.url}`, () => cy.visit(link.url)))

  /*  links.forEach((data) => {
    it(`${data.url}`, () => {
      cy.visit(data.url)
    })
  }) */
  /*
    it('Test Broken Links', () => {
    cy.request({
      method: 'GET',
      url: 'https://ad1-il-000349.ooh-prod.linksvc.com:2443/',
      body: { name: 'foo' },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.gt(100)
      expect(response.duration).to.be.lt(3000)
    })
  }) */
})
