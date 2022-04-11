import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function DeleteData(props) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.deleteButton}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.deleteButton}>
          <main>
            <div className="w-full max-w-xs -mt-56">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="text-center py-6 text-4xl text-gray-700">
                  Are you sure?
                </div>
                <div className="text-center font-semibold text-gray-700 mb-8">
                  Do you really want to delete the{" "}
                  <span className="text-red-600">user information</span> This
                  process cannot be undone.
                </div>

                <div className="flex justify-center">
                  <button
                    className="bg-gray-300 text-gray-900 rounded hover:bg-gray-200 px-6 py-2 focus:outline-none mx-1"
                    onClick={props.closeDeleteButton}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-1"
                    onClick={props.userDelete}
                  >
                    Delete 
                  </button>
                </div>
              </form>
            </div>
          </main>
        </Fade>
      </Modal>
    </div>
  );
}
