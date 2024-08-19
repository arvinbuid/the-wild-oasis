import {useState} from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

export function AddCabin() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal((show) => !show)}>Add Cabin</Button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCabinForm onCloseModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}
