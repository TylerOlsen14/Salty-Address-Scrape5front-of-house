import React, { Component } from 'react';
import { 
  Modal,
  ModalBody,
  ModalHeader,
  Button
 } from 'reactstrap'

class ReadModal extends Component {
  state = {
    modal: false,
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    console.log(this.state)
  }

  componentDidMount() {
    fetch('https://salty-address-scrape5kitchen.herokuapp.com/')
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
        {this.state.data.map( scrape => (
          <Modal key={scrape._id}>
            <ModalHeader>
              <h3>{scrape.name}</h3>
            </ModalHeader>
            <ModalBody>

            </ModalBody>
          </Modal>
        ))}
        </div>
        
      </div>
    );
  }
}

export default ReadModal;
