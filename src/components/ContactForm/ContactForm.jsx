import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
const validationFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Telephone number is invalid")
    .required("Required"),
});

const valuesForm = {
  name: "",
  number: "",
};

function ContactForm({ onAddContact }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={valuesForm}
      onSubmit={handleSubmit}
      validationSchema={validationFormSchema}
    >
      <Form className={css.formAddContact}>
        <div className={css.fieldWrapper}>
          <label htmlFor={nameId}>Name:</label>
          <Field
            className={css.fieldInput}
            type="text"
            name="name"
            id={nameId}
            placeholder="e.g. Mike Shinoda"
          />
          <ErrorMessage
            className={css.errMessage}
            name="name"
            component="span"
          />
        </div>

        <div className={css.fieldWrapper}>
          <label htmlFor={numberId}> Number:</label>
          <Field
            className={css.fieldInput}
            type="tel"
            name="number"
            id={numberId}
            placeholder="mask: xxx-xx-xx"
          />
          <ErrorMessage
            className={css.errMessage}
            name="number"
            component="span"
          />
        </div>

        <button className={css.btnSubmitForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
