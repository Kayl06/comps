import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary rounded>
        I agree
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
        pellentesque, lectus sed dapibus eleifend, libero orci sollicitudin
        quam, non luctus enim purus eu ex. Curabitur purus ante, volutpat a
        tellus at, dictum dapibus lorem. Nullam quis erat lacus. Donec dapibus
        id augue ac scelerisque. Sed eget urna elementum, mattis ante ut,
        lobortis augue. Sed ex elit, gravida sit amet neque eu, egestas
        tincidunt nisl. Duis mollis felis quam, sed egestas turpis ornare nec.
      </p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleShow} primary rounded>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
