/* eslint-disable no-undef */

export const mriLinks = [
  `https://ad1-pa-000118.ooh-prod.linksvc.com:2443/
https://ad2-pa-000118.ooh-prod.linksvc.com:2443/
https://ad1-pa-000116.ooh-prod.linksvc.com:2443/
https://ad2-pa-000116.ooh-prod.linksvc.com:2443/
https://ad1-pa-000156.ooh-prod.linksvc.com:2443/
https://ad1-pa-000139.ooh-prod.linksvc.com:2443/
https://ad1-pa-001907.ooh-prod.linksvc.com:2443/
https://ad1-pa-000084.ooh-prod.linksvc.com:2443/
https://ad1-mn-000010.ooh-prod.linksvc.com:2443/
https://ad1-pa-000063.ooh-prod.linksvc.com:2443/
https://ad1-pa-000188.ooh-prod.linksvc.com:2443/
https://ad1-pa-000182.ooh-prod.linksvc.com:2443/
https://ad1-pa-000130.ooh-prod.linksvc.com:2443/
https://ad2-pa-000130.ooh-prod.linksvc.com:2443/
https://ad1-ny-057565.ooh-prod.linksvc.com:2443/
https://ad1-ca-001034.ooh-prod.linksvc.com:2443/`
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
