import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContactsQuery, useDeleteContactMutation } from '../../services/contactsApi';
import './Home.css'

const Home: React.FC = () => {
  const { data, isLoading, error } = useContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong")
    }
  }, [error])

  const handleDeleteContact = async (id: string) => {
    if (window.confirm("Are you sure that you wanted to delete that contact?")) {
      await deleteContact(id);
      toast.success("Contact Deleted Successfully")
    }
  }

  if (isLoading) {
    return <h3>Loading ...</h3>
  }

  return <div style={{marginTop: '100px'}}>
    <Link to="/addContact">
      <button className="btn btn-add">Add Contact</button>
      <br/>
      <br/>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>ID</th>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Email</th>
            <th style={{ textAlign: 'center' }}>Contact</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((contact, index) => {
            return (
              <tr key={contact.id}>
                <th scope="row">{index + 1}</th>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.contact}</td>
                <td>
                  <Link to={`/editContact/${contact.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button className="btn btn-delete" onClick={() => handleDeleteContact(contact.id as string)}>Delete</button>
                  <Link to={`/info/${contact.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Link>
  </div>;
};

export default Home;