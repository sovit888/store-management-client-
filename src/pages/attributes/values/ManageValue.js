import React from "react";
import { useFormik } from "formik";
import { ModalBody, Modal } from "reactstrap";
import valueValidation from "./valueValidation";
import ValueForm from "./ValueForm";

const ManageValue = ({ status, toggle, value }) => {
  const formik = useFormik({
    initialValues: {
      name: value.name || "",
      status: value.status || false,
    },
    enableReinitialize: true,
    validationSchema: valueValidation,
    onSubmit: (values, { resetForm }) => {
      values.status = values.status === "true" ? true : false;
      console.log(values);
      resetForm();
      toggle();
    },
  });
  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p>Create a New Values</p>
          <ValueForm formik={formik} toggle={toggle} submitValue={"Update"} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default ManageValue;
