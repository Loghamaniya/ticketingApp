import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { addTicket,updateTicket} from '../actions/ticketActions'; // Import updateTicket action
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  priority: Yup.string().required('Required'),
  mode: Yup.string().required('Required'),
  status: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

const CreateTicketForm = ({ addTicket, updateTicket, onClose, initialValues }) => {
  const isEditMode = !!initialValues; // Check if initialValues are provided to determine edit mode

  const handleSubmit = (values, { resetForm }) => {
    if (isEditMode) {
      updateTicket({ ...values, email: initialValues.email }); 
    } else {
      addTicket(values);
    }
    resetForm();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 overflow-auto">
      
      <Formik
        initialValues={initialValues || { // Use provided initialValues or default initial values
          name: '',
          email: '',
          priority: 'low',
          mode: 'mail',
          status: 'open',
          description: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 min-w-[300px] max-w-[800px] overflow-hidden">
          <br/>
          <h2 className="text-2xl font-bold mb-4">{isEditMode ? 'Edit Ticket' : 'Create Ticket'}</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="priority"
              className="block text-sm font-bold mb-2"
            >
              Priority
            </label>
            <Field
              as="select"
              id="priority"
              name="priority"
              className="w-full px-3 py-2 border rounded"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Field>
            <ErrorMessage
              name="priority"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mode" className="block text-sm font-bold mb-2">
              Mode
            </label>
            <Field
              as="select"
              id="mode"
              name="mode"
              className="w-full px-3 py-2 border rounded"
            >
              <option value="mail">Mail</option>
              <option value="sms">SMS</option>
              <option value="gmail">Gmail</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
            </Field>
            <ErrorMessage
              name="mode"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-sm font-bold mb-2"
            >
              Status
            </label>
            <Field
              as="select"
              id="status"
              name="status"
              className="w-full px-3 py-2 border rounded"
            >
              <option value="open">Open</option>
              <option value="in-progress">In-Progress</option>
              <option value="close">Close</option>
            </Field>
            <ErrorMessage
              name="status"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-bold mb-2"
            >
              Description
            </label>
            <Field
              as="textarea"
              id="description"
              name="description"
              rows="4"
              className="w-full px-3 py-2 border rounded"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {isEditMode ? 'Update' : 'Submit'}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const mapDispatchToProps = {
  addTicket,updateTicket
};

export default connect(null, mapDispatchToProps)(CreateTicketForm);
