import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  contactno: "",
  email: "",
  channel: "",
  comments: ""
};
const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Required")
    .min(4, "Minimum 4 characters required"),
  contactno: yup
    .number("Enter a valid mobile no")
    .min(10, "Enter a valid mobile no")
    .positive(),
  email: yup.string().email("Invalid email format").required("Required"),
  channel: yup.string().required("Required"),
  comments: yup.string().max(20, "maximum allowed chars 20")
});

function InputForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="text" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>
        <div>
          <label htmlFor="contactno">Contact No</label>
          <Field type="number" id="contactno" name="contactno" />
          <ErrorMessage name="contactno" component={TextError} />
        </div>
        <div>
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="text" name="channel" />
        </div>
        <ErrorMessage name="channel" component={TextError} />
        <div>
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="text" name="comments" />
          <ErrorMessage name="comments" component={TextError} />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default InputForm;
