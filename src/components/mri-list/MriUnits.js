import React from 'react'
import { FormInput } from '../form-input/FormInput'
import { List, Container } from 'semantic-ui-react'
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

export const MriUnits = () => {
  const data = unitsInput.splice(0, 1)[0]

  const units = data.split('\n').map((unit) => {
    const [url, ...rest] = unit.split(' ')
    return { url, ...rest }
  })

  return (
    <div>
      <Container fluid>
        <FormInput />
        <List divided verticalAlign='middle' size='small' rotated='clockwise'>
          {units.map((unit, index) => (
            <List.Item key={index}>
              <List.Icon name='linkify' color='green' />
              <List.Content
                as='a'
                href={unit.url}
                target='_blank'
                rel='noreferrer'
              >
                {unit.url}
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Container>
    </div>
  )
}
