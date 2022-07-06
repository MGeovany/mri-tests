/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import { FormInput } from '../form-input/FormInput'
import { List, Container } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { addLink } from '../../store/mrilist/linksSlice'

/* const unitsInput = [
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
const testResults = [
  `1) 0. URL: https://ad1-il-000353.ooh-prod.linksvc.com:2443/
√ 1. URL: https://ad1-il-000349.ooh-prod.linksvc.com:2443/ (1172ms)
2) 2. URL: https://ad2-il-000349.ooh-prod.linksvc.com:2443/`
]
 */
const testResultsv2 = [
  `√ 0. URL: https://ad1-ny-057568.ooh-prod.linksvc.com:2443/ (3002ms)
1) 1. URL: https://ad1-ny-057569.ooh-prod.linksvc.com:2443/
2) 2. URL: https://ad2-ny-057569.ooh-prod.linksvc.com:2443/
3) 3. URL: https://ad1-ny-057641.ooh-prod.linksvc.com:2443/
4) 4. URL: https://ad2-ny-057641.ooh-prod.linksvc.com:2443/
5) 5. URL: https://ad1-ny-057633.ooh-prod.linksvc.com:2443/
6) 6. URL: https://ad2-ny-057633.ooh-prod.linksvc.com:2443/
7) 7. URL: https://ad1-ny-057644.ooh-prod.linksvc.com:2443/
8) 8. URL: https://ad2-ny-057644.ooh-prod.linksvc.com:2443/
9) 9. URL: https://ad1-ny-057638.ooh-prod.linksvc.com:2443/
10) 10. URL: https://ad2-ny-057638.ooh-prod.linksvc.com:2443/
11) 11. URL: https://ad1-ny-057639.ooh-prod.linksvc.com:2443/
12) 12. URL: https://ad2-ny-057639.ooh-prod.linksvc.com:2443/
13) 13. URL: https://ad2-ny-057642.ooh-prod.linksvc.com:2443/
14) 14. URL: https://ad1-ny-057642.ooh-prod.linksvc.com:2443/
15) 15. URL: https://ad1-ny-057643.ooh-prod.linksvc.com:2443/
16) 16. URL: https://ad2-ny-057643.ooh-prod.linksvc.com:2443/
17) 17. URL: https://ad1-ny-057646.ooh-prod.linksvc.com:2443/
18) 18. URL: https://ad2-ny-057646.ooh-prod.linksvc.com:2443/
19) 19. URL: https://ad1-ny-057645.ooh-prod.linksvc.com:2443/
20) 20. URL: https://ad2-ny-057645.ooh-prod.linksvc.com:2443/
21) 21. URL: https://ad1-ny-057640.ooh-prod.linksvc.com:2443/
√ 22. URL: https://ad2-ny-057640.ooh-prod.linksvc.com:2443/ (2440ms)
√ 23. URL: https://ad1-ny-057637.ooh-prod.linksvc.com:2443/ (1457ms)
√ 24. URL: https://ad2-ny-057637.ooh-prod.linksvc.com:2443/ (1246ms)
22) 25. URL: https://ad2-ny-057647.ooh-prod.linksvc.com:2443/
23) 26. URL: https://ad1-ny-057647.ooh-prod.linksvc.com:2443/
24) 27. URL: https://ad1-ny-057564.ooh-prod.linksvc.com:2443/
√ 28. URL: https://ad1-pa-000118.ooh-prod.linksvc.com:2443/ (1985ms)
√ 29. URL: https://ad2-pa-000118.ooh-prod.linksvc.com:2443/ (1105ms)
√ 30. URL: https://ad1-pa-000116.ooh-prod.linksvc.com:2443/ (1233ms)
√ 31. URL: https://ad2-pa-000116.ooh-prod.linksvc.com:2443/ (1495ms)
√ 32. URL: https://ad1-pa-000156.ooh-prod.linksvc.com:2443/ (2467ms)
√ 33. URL: https://ad1-pa-000139.ooh-prod.linksvc.com:2443/ (1276ms)
√ 34. URL: https://ad1-pa-001907.ooh-prod.linksvc.com:2443/ (1363ms)
√ 35. URL: https://ad1-pa-000084.ooh-prod.linksvc.com:2443/ (1498ms)`
]

export const MriUnits = () => {
  const [enlace, setEnlace] = useState('')

  const dispatch = useDispatch()
  const links = useSelector((state) => state.links)

  const getMriUnits = (input) => {
    const data = input.splice(0, 1)[0]
    setEnlace(
      data.split('\n').map((unit) => {
        const [url, ...rest] = unit.split(' ')
        dispatch(addLink({ url, ...rest }))

        return { url, ...rest }
      })
    )
  }

  useEffect(() => {
    getMriUnits(testResultsv2)

    console.log('enlace: ', enlace)
  }, [])

  return (
    <div>
      <Container fluid>
        <FormInput />
        <List divided verticalAlign='middle' size='small' rotated='clockwise'>
          {links &&
            links.map((link, index) => (
              <List.Item key={index}>
                <List.Content>
                  <List.Header>
                    {link.url === '√' ? <div>Yes</div> : <div>No</div>}
                  </List.Header>
                </List.Content>
              </List.Item>
            ))}
        </List>
      </Container>
    </div>
  )
}
