import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Button onClick={handleClick} primary rounded>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
}

export default ModalPage;
