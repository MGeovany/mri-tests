/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import { FormInput } from '../form-input/FormInput'
import { List, Container, Header, Image, Table } from 'semantic-ui-react'
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
  `√ 0. URL: https://ad1-il-000422.ooh-prod.linksvc.com:2443/ (1234ms)
1) 1. URL: https://ad1-ca-001003.ooh-prod.linksvc.com:2443/
√ 2. URL: https://ad1-ca-000008.ooh-prod.linksvc.com:2443/ (1286ms)
√ 3. URL: https://ad2-ca-000008.ooh-prod.linksvc.com:2443/ (1324ms)
2) 4. URL: https://ad1-ca-000011.ooh-prod.linksvc.com:2443/
√ 5. URL: https://ad1-ca-000009.ooh-prod.linksvc.com:2443/ (1192ms)
3) 6. URL: https://ad1-ca-000010.ooh-prod.linksvc.com:2443/
√ 7. URL: https://ad2-ca-000009.ooh-prod.linksvc.com:2443/ (2050ms)
4) 8. URL: https://ad1-ca-000013.ooh-prod.linksvc.com:2443/
√ 9. URL: https://ad1-ca-000014.ooh-prod.linksvc.com:2443/ (1067ms)
√ 10. URL: https://ad1-ca-000015.ooh-prod.linksvc.com:2443/ (1418ms)
5) 11. URL: https://ad2-ca-000013.ooh-prod.linksvc.com:2443/
√ 12. URL: https://ad1-ca-000020.ooh-prod.linksvc.com:2443/ (1379ms)
√ 13. URL: https://ad2-ca-000020.ooh-prod.linksvc.com:2443/ (2946ms)
√ 14. URL: https://ad1-ca-000016.ooh-prod.linksvc.com:2443/ (1632ms)
√ 15. URL: https://ad1-ca-000017.ooh-prod.linksvc.com:2443/ (1120ms)
√ 16. URL: https://ad2-ca-000017.ooh-prod.linksvc.com:2443/ (1540ms)
√ 17. URL: https://ad1-ca-000018.ooh-prod.linksvc.com:2443/ (1416ms)
6) 18. URL: https://ad1-ca-000021.ooh-prod.linksvc.com:2443/
√ 19. URL: https://ad1-ca-000033.ooh-prod.linksvc.com:2443/ (1208ms)
√ 20. URL: https://ad1-ca-000034.ooh-prod.linksvc.com:2443/ (1490ms)
√ 21. URL: https://ad1-ca-000029.ooh-prod.linksvc.com:2443/ (1830ms)
√ 22. URL: https://ad1-ca-000030.ooh-prod.linksvc.com:2443/ (1081ms)
√ 23. URL: https://ad1-ca-000031.ooh-prod.linksvc.com:2443/ (1017ms)
√ 24. URL: https://ad1-ca-000026.ooh-prod.linksvc.com:2443/ (1410ms)
√ 25. URL: https://ad1-ca-000027.ooh-prod.linksvc.com:2443/ (1858ms)
√ 26. URL: https://ad2-ca-000027.ooh-prod.linksvc.com:2443/ (1583ms)
√ 27. URL: https://ad1-ca-000028.ooh-prod.linksvc.com:2443/ (1433ms)
√ 28. URL: https://ad1-ca-000035.ooh-prod.linksvc.com:2443/ (1566ms)
√ 29. URL: https://ad2-ca-000035.ooh-prod.linksvc.com:2443/ (1136ms)
√ 30. URL: https://ad1-ca-000036.ooh-prod.linksvc.com:2443/ (1600ms)
√ 31. URL: https://ad2-ca-000036.ooh-prod.linksvc.com:2443/ (1416ms)
7) 32. URL: https://ad1-ca-000023.ooh-prod.linksvc.com:2443/
√ 33. URL: https://ad1-ca-000024.ooh-prod.linksvc.com:2443/ (1896ms)
√ 34. URL: https://ad1-ca-000025.ooh-prod.linksvc.com:2443/ (1129ms)
8) 35. URL: https://ad1-ca-000022.ooh-prod.linksvc.com:2443/
9) 36. URL: https://ad2-ca-000022.ooh-prod.linksvc.com:2443/
√ 37. URL: https://ad1-pa-000134.ooh-prod.linksvc.com:2443/ (1834ms)
√ 38. URL: https://ad1-ca-000007.ooh-prod.linksvc.com:2443/ (1265ms)
√ 39. URL: https://ad1-nj-000005.ooh-prod.linksvc.com:2443/ (1139ms)
√ 40. URL: https://ad1-nj-000006.ooh-prod.linksvc.com:2443/ (1449ms)
√ 41. URL: https://ad1-nj-000007.ooh-prod.linksvc.com:2443/ (1382ms)
√ 42. URL: https://ad1-nj-000008.ooh-prod.linksvc.com:2443/ (1264ms)
√ 43. URL: https://ad1-pa-000089.ooh-prod.linksvc.com:2443/ (1801ms)
10) 44. URL: https://ad1-ca-001004.ooh-prod.linksvc.com:2443/
11) 45. URL: https://ad2-ca-001004.ooh-prod.linksvc.com:2443/
12) 46. URL: https://ad1-ca-001005.ooh-prod.linksvc.com:2443/
13) 47. URL: https://ad2-ca-001005.ooh-prod.linksvc.com:2443/
14) 48. URL: https://ad1-ca-001012.ooh-prod.linksvc.com:2443/
15) 49. URL: https://ad2-ca-001012.ooh-prod.linksvc.com:2443/
√ 50. URL: https://ad1-ca-001001.ooh-prod.linksvc.com:2443/ (2023ms)
√ 51. URL: https://ad2-ca-001001.ooh-prod.linksvc.com:2443/ (1968ms)
16) 52. URL: https://ad1-ca-001022.ooh-prod.linksvc.com:2443/
17) 53. URL: https://ad2-ca-001022.ooh-prod.linksvc.com:2443/
√ 54. URL: https://ad1-ca-001023.ooh-prod.linksvc.com:2443/ (1819ms)
√ 55. URL: https://ad2-ca-001023.ooh-prod.linksvc.com:2443/ (1312ms)
√ 56. URL: https://ad1-ca-001008.ooh-prod.linksvc.com:2443/ (1642ms)
√ 57. URL: https://ad2-ca-001008.ooh-prod.linksvc.com:2443/ (1111ms)
√ 58. URL: https://ad1-ca-001025.ooh-prod.linksvc.com:2443/ (1264ms)
√ 59. URL: https://ad2-ca-001025.ooh-prod.linksvc.com:2443/ (2720ms)
√ 60. URL: https://ad1-ca-001015.ooh-prod.linksvc.com:2443/ (1710ms)
√ 61. URL: https://ad2-ca-001015.ooh-prod.linksvc.com:2443/ (1184ms)
√ 62. URL: https://ad1-ca-001026.ooh-prod.linksvc.com:2443/ (1523ms)
√ 63. URL: https://ad2-ca-001026.ooh-prod.linksvc.com:2443/ (1212ms)
18) 64. URL: https://ad1-ca-001037.ooh-prod.linksvc.com:2443/
19) 65. URL: https://ad2-ca-001016.ooh-prod.linksvc.com:2443/
20) 66. URL: https://ad1-ca-001016.ooh-prod.linksvc.com:2443/
√ 67. URL: https://ad1-ca-001017.ooh-prod.linksvc.com:2443/ (1526ms)
√ 68. URL: https://ad2-ca-001017.ooh-prod.linksvc.com:2443/ (1402ms)
21) 69. URL: https://ad1-ca-001013.ooh-prod.linksvc.com:2443/
22) 70. URL: https://ad2-ca-001013.ooh-prod.linksvc.com:2443/`
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
        <Table basic='very' celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Employee</Table.HeaderCell>
              <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image
                    src='/images/avatar/small/lena.png'
                    rounded
                    size='mini'
                  />
                  <Header.Content>
                    Lena
                    <Header.Subheader>Human Resources</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>22</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image
                    src='/images/avatar/small/matthew.png'
                    rounded
                    size='mini'
                  />
                  <Header.Content>
                    Matthew
                    <Header.Subheader>Fabric Design</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>15</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image
                    src='/images/avatar/small/lindsay.png'
                    rounded
                    size='mini'
                  />
                  <Header.Content>
                    Lindsay
                    <Header.Subheader>Entertainment</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>12</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image
                    src='/images/avatar/small/mark.png'
                    rounded
                    size='mini'
                  />
                  <Header.Content>
                    Mark
                    <Header.Subheader>Executive</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>11</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </div>
  )
}
