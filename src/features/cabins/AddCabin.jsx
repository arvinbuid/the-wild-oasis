import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CabinTable from "./CabinTable";

export function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens='cabin-form'>
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name='cabin-form'>
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens='table'>
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name='table'>
        <CabinTable />
      </Modal.Window>
    </Modal>
  );

  // return (
  //   <>
  //     <Button onClick={() => setShowModal((show) => !show)}>Add Cabin</Button>

  //     {showModal && (
  //       <Modal onClose={() => setShowModal(false)}>
  //         <CreateCabinForm onCloseModal={() => setShowModal(false)} />
  //       </Modal>
  //     )}
  //   </>
  // );
}
