import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class ModalExampleDimmer extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button className="ui red button" onClick={this.show('blurring')}>CONFIRM PAYMENT</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Confirmation</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='medium'
              src='menshoes1.jpg'
            />
            <Modal.Description>
              <Header>Your Order is Sucessfully Placed !</Header>
              <div >
              <ul>
                  <li> Brand : Adidas Shoes</li> <br/>
                  <li> Prize : $1234</li> <br/>
                  <li> Size : M</li> <br/>
                  <li> Colour : White</li>
              </ul>
              <p>We are giving best offer to you</p>
              <p>Adidas is the best brand</p>
              </div>
            
              </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Link to="/">
            <Button color='black' onClick={this.close}>
            Continue Shopping
            </Button>
            </Link>
            {/* <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Yep, that's me"
              onClick={this.close}
            /> */}
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalExampleDimmer