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
    name: this.props.name,
    url: '',
    address: '',
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  // enterModal = async () => {
  componentWillMount = async () => {
    this.setState({
      name: this.props.scrape.name,
      url: this.props.scrape.url,
      address: this.props.scrape.address,
    })
  }

  onChange = (e) => {
    console.log(this.state)
    this.setState({ 
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    await fetch(`https://salty-address-scrape5kitchen.herokuapp.com/`+ this.props.scrape._id, {
      method: "PUT",
      body: JSON.stringify(this.state),
      headers: {
          "Content-Type": "application/json",
        }
      }
    )
    this.toggle();
    // this.props.refresh();//this refreshes the page after we're done
  };
    
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.props.onSubmit(this.state)
  }

  newRecord = {
    name: this.state.name,
    url: this.state.url,
    address: this.state.address
  }

  // componentDidMount() {
  //   console.log(this.props.id)
  // }

  render() {
    return(
      <div>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
        >
          Update Record
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader
            toggle={this.toggle}
          >
            Update Address Entry
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup onSubmit={this.handleSubmit}>
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
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
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