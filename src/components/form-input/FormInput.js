import React from 'react'
import {
  Container,
  TextArea,
  Form,
  Header,
  Button,
  Icon
} from 'semantic-ui-react'

export const FormInput = () => {
  return (
    <div>
      <Container className='px' fluid textAlign='left'>
        <Form>
          <Header as='h3' color='grey'>
            Paste the MRI List
          </Header>
          <TextArea
            placeholder='Insert MRI Units List'
            className='action-textarea'
          />
          <p>
            <Button animated='vertical' icon labelPosition='left' color='green'>
              <Button.Content hidden>Test</Button.Content>
              <Button.Content visible>
                Next
                <Icon name='right arrow' />
              </Button.Content>
            </Button>
          </p>
        </Form>
      </Container>
    </div>
  )
}
