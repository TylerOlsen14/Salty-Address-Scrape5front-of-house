import React, { Component } from 'react';
import {
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  Form, 
  FormGroup, 
  Label, 
  Input 
} from 'reactstrap';

class UpdateAddressModal extends Component {
  state = {
    modal: false,
    name: '',
    url: '',
    address: '',
    notes: '',
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    console.log(this.state)
  }

  // enterModal = async () => {
  componentWillMount = async () => {
    this.setState({
      name: this.props.scrape.name,
      url: this.props.scrape.url,
      address: this.props.scrape.address,
      notes: this.props.scrape.notes
    })
  }

  onChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value,
    });
  }
  
  newAddress = {
    name: this.props.name,
    url: this.props.url,
    address: this.props.address,
    notes: this.props.notes,
  }

  onSubmit = async e => {
    e.preventDefault();
    await fetch(`https://salty-address-scrape5kitchen.herokuapp.com/`+ this.props.scrape._id, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        address: this.state.address,
        url: this.state.url,
        notes: this.state.notes,
      }),
    })
    this.toggle();
    console.log(this.state)
    // this.props.refresh();//this refreshes the page after we're done
  };

  render() {
    return(
      <div>
        <Button
          color="secondary"
          onClick={this.toggle}
        >
          Update Record
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader
            // toggle={this.toggle}
          >
            Update Address Entry
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="address">
                  Make sure the address & name look good
                </Label>
                <Input 
                  type="text"
                  name="name"
                  id="item"
                  // placeholder={Client Name}
                  onChange={this.onChange}
                  value={this.state.name}
                />
                <Input 
                  type="string"
                  name="url"
                  id="item"
                  // placeholder="Create Phone Number"
                  onChange={this.onChange}
                  value={this.state.url}
                />
                <Input 
                  type="text"
                  name="address"
                  id="item"
                  // placeholder="Create coversation record"
                  onChange={this.onChange}
                  value={this.state.address}
                />
                <Input 
                  type="textarea"
                  name="notes"
                  id="item"
                  // placeholder="Create coversation record"
                  onChange={this.onChange}
                  value={this.state.notes}
                />
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                  // onClick={this.handleSubmit}
                  onClick={this.onSubmit}
                >
                  Update Entry
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ( UpdateAddressModal );