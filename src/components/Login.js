import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class BaseComponent extends Component {
  render() {
    const content = (
    <div className='login-form' style={{margin: 'auto'}}>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%'}} verticalAlign='middle'>

          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
             Log-in to your account
             Enter a name to entre the Synbioz Worldcup site !
            </Header>

            <Form size='large'>

              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' />

                <Button color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
    return content;
  }
}





