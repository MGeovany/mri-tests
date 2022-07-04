import React, { useState, useEffect } from 'react'
import { FormInput } from '../form-input/FormInput'
import { List, Container } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { addLink, selectLink } from '../../store/mrilist/linksSlice'

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
  const [enlace, setEnlace] = useState('')

  const dispatch = useDispatch()
  const links = useSelector((state) => state.links)
  // const links = useSelector(selectLink)

  const getMriUnits = () => {
    const data = unitsInput.splice(0, 1)[0]
    setEnlace(
      data.split('\n').map((unit) => {
        const [url, ...rest] = unit.split(' ')
        dispatch(addLink({ url, ...rest }))

        return { url, ...rest }
      })
    )

    // enlace.map((unit) => console.log('unitt 0map', unit))

    // console.log('units', units)
  }

  useEffect(() => {
    getMriUnits()
    console.log('units', enlace)
  }, [])

  // console.log('links mri', links)
  // console.log('unitssss', unitss)
  // console.log('unitssss', unitss)

  return (
    <div>
      <Container fluid>
        <FormInput />
        <List divided verticalAlign='middle' size='small' rotated='clockwise'>
          {links &&
            links.map((link, index) => (
              <List.Item key={index}>
                <List.Content>
                  <List.Header>{link.url}</List.Header>
                </List.Content>
              </List.Item>
            ))}
        </List>
      </Container>
    </div>
  )
}
