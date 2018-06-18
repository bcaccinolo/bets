import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'

export default () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/bets/build/logo.png' style={{ marginRight: '1.5em' }} />
          Symbioz Worldcup!
        </Menu.Item>
      </Container>
    </Menu>
  </div>
)
