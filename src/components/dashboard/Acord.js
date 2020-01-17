import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleStyled extends Component {
  state = { activeIndex: 1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Apna title
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>

          <form class="ui form">
                        <div className="ui two fields">
                            <div class="field">
                                <label>First Name</label>
                                <input type="text" name="first-name" placeholder="First Name" />
                            </div>
                            <div class="field">
                                <label>Last Name</label>
                                <input type="text" name="first-name" placeholder="Last Name" />
                            </div>
                        </div>

                        <div class="field">
                            <label>Select Address</label>
                            <input type="text" name="first-name" placeholder="Select Address" />
                        </div>

                        <div className="ui two fields">
                            <div class="field">
                                <label>Landmark</label>
                                <input type="text" name="first-name" placeholder="Landmark" />
                            </div>
                            <div class="field">
                                <label>State</label>
                                <input type="text" name="first-name" placeholder="State" />
                            </div>
                        </div>

                        <div class="field">
                            <label>Enter Pincode</label>
                            <input type="text" name="last-name" placeholder="Enter Pincode" />
                        </div>
                        <div class="field">
                            <label>Enter Number</label>
                            <input type="text" name="last-name" placeholder="Enter Number" />
                        </div>
                        </form>

         
        </Accordion.Content>

  

        <br/><br/><br/><br/>
      </Accordion>

      
    )
  }
}