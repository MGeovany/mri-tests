/* eslint-disable no-undef */

const unitsInput = [
  `https://ad1-il-000353.ooh-prod.linksvc.com:2443/
https://ad1-il-000349.ooh-prod.linksvc.com:2443/
https://ad2-il-000349.ooh-prod.linksvc.com:2443/
https://ad1-il-000351.ooh-prod.linksvc.com:2443/
https://ad1-il-000361.ooh-prod.linksvc.com:2443/
https://ad2-il-000353.ooh-prod.linksvc.com:2443/
https://ad1-il-000355.ooh-prod.linksvc.com:2443/
https://ad2-il-000355.ooh-prod.linksvc.com:2443/
https://ad1-il-000198.ooh-prod.linksvc.com:2443/
https://ad2-il-000198.ooh-prod.linksvc.com:2443/
https://ad2-il-000308.ooh-prod.linksvc.com:2443/
https://ad1-il-000308.ooh-prod.linksvc.com:2443/
https://ad1-il-000237.ooh-prod.linksvc.com:2443/
https://ad2-il-000237.ooh-prod.linksvc.com:2443/
https://ad1-il-000245.ooh-prod.linksvc.com:2443/
https://ad2-il-000245.ooh-prod.linksvc.com:2443/
https://ad1-il-000182.ooh-prod.linksvc.com:2443/
https://ad1-il-000281.ooh-prod.linksvc.com:2443/
https://ad1-il-000186.ooh-prod.linksvc.com:2443/
https://ad1-il-000202.ooh-prod.linksvc.com:2443/
https://ad2-il-000202.ooh-prod.linksvc.com:2443/
https://ad1-il-000214.ooh-prod.linksvc.com:2443/
https://ad2-il-000214.ooh-prod.linksvc.com:2443/`
]

describe('Test Broken Links', () => {
  const data = unitsInput.splice(0, 1)[0]
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
