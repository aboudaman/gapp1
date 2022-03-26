import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import './ModalView.css'


function ModalView(props) {
  console.log('MODAL VIEW')
  console.log({...props})
  return (

    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.onHide(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}


export default ModalView;
