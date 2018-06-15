import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class BaseComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render = () => {
    const content = (
      <div className='login-form' style={{margin: 'auto'}}>
        <Grid textAlign='center' style={{ height: '100%'}} verticalAlign='middle'>

          <Grid.Column style={{ maxWidth: 450 }}>

            <Header as='h2' color='teal' textAlign='center'>
             Log-in to your account
             Enter a name to entre the Synbioz Worldcup site !
            </Header>

            <Form size='large'>
              <Segment>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' value={this.state.name} onChange={this.onInputChange} />
                <Button color='teal' fluid size='large' onClick={this.onSubmit}> Login </Button>
              </Segment>
            </Form>

          </Grid.Column>

        </Grid>
      </div>
    );
    return content;
  }

  onInputChange = (event) => {
    this.setState({name: event.target.value});
   }

  onSubmit = (e) => {
    this.props.onSubmit(this.state);
  }
}





