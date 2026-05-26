"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { FiDelete } from "react-icons/fi";

const CarDeleteAlert = ({ myCarId }) => {
  const handleDeleteCar = async () => {

    // token jws
    const { data: tokenData } = await authClient.token()
    console.log(tokenData);
    const res = await fetch(`http://localhost:8000/add-car/${myCarId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${tokenData?.token}`
      }
    })

    const data = await res.json()
    window.location.reload();
  }
  return (
    <AlertDialog>
      {/* TRIGGER BUTTON */}
      <AlertDialog.Trigger>
        <button className="h-[40px] rounded-xl border border-red-400 bg-red-500 px-2 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:text-[#141A32] flex justify-center items-center gap-2 cursor-pointer">
          <FiDelete />
          Delete
        </button>
      </AlertDialog.Trigger>

      {/* BACKDROP + MODAL */}
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete car permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete this car and all of its data.
                This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button onClick={handleDeleteCar} slot="close" variant="danger">
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CarDeleteAlert;