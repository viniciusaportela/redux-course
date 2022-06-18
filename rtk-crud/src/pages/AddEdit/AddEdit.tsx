import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAddContactMutation, useContactQuery, useUpdateContactMutation } from '../../services/contactsApi';
import './AddEdit.css'

const initialState = {
  email: "",
  name: "",
  contact: ""
}

const AddEdit: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [addContact] = useAddContactMutation()
  const [updateContact] = useUpdateContactMutation()
  const [editMode, setEditMode] = useState(false);
  const { data, error } = useContactQuery(id as string)

  const [name, setName] = useState(initialState.name);
  const [email, setEmail] = useState(initialState.email);
  const [contact, setContact] = useState(initialState.contact);

  const setStateByName = {
    email: setEmail,
    name: setName,
    contact: setContact
  }

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong")
    }
  }, [error])

  useEffect(() => {
    if (id) {
      setEditMode(true)
      if(data) {
        setName(data.name)
        setEmail(data.email)
        setContact(data.contact)
      }
    } else {
      setEditMode(false)
    }
  }, [id])

  const handleInputChange = (event) => {
    setStateByName[event.target.name](event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Please provide value into each input field")
    } else {
      if (editMode) {
        await addContact({ email, name, contact })
        toast.success('Contact Added Successfully')
      } else {
        await updateContact({ email, name, contact })
        toast.success('Contact Updated Successfully')
      }
      navigate("/")
    }
  }

  return <div style={{ marginTop: "100px" }}>
    <form style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center' }} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name='name' placeholder='Enter Name ...' value={name} onChange={handleInputChange}/>

      <label htmlFor="email">Email</label>
      <input type="text" id="email" name='email' placeholder='Enter Email ...' value={email} onChange={handleInputChange}/>

      <label htmlFor="contact">Contact</label>
      <input type="text" id="contact" name='contact' placeholder='Enter Contact ...' value={contact} onChange={handleInputChange}/>

      <input type="submit" value={editMode ? "Update" : "Add"} />
    </form>
  </div>;
};

export default AddEdit;