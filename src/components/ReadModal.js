import React, { Component } from 'react';
import { 
  Modal,
  ModalBody,
  ModalHeader,
  Button
 } from 'reactstrap'

class ReadModal extends Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  state = {
    modal: false,
    name: '',
    url: '',
    address: '',
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    console.log(this.state)
  }

  componentDidMount() {
    fetch(`https://salty-address-scrape5kitchen.herokuapp.com/`+ this.props.scrape._id)
    .then(res => res.json())
    .then(json => this.setState({ data: json }))
  }

  // enterModal = async () => {
  componentWillMount = async () => {
    this.setState({
      name: this.props.scrape.name,
      url: this.props.scrape.url,
      address: this.props.scrape.address,
    })
  }
  render() {
    return (
      <div>
        <Button
          color="primary"
          onClick={this.toggle}
        >
          Read Complete Entry
        </Button>
        <div className="ReadModal">
        {/* {this.state.data.map( scrape => ( */}
          <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          key={this.state._id}
        >
            <ModalHeader>
              <h2>Client: {this.state.name}</h2>
            </ModalHeader>
            <ModalBody>
              <h5>Address: {this.state.address}</h5>
              <h5>url: {this.state.url}</h5>
            </ModalBody>
          </Modal>
        {/* ))} */}
        </div>
        
      </div>
    );
  }
}

export default ReadModal;