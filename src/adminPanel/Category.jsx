import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";

const Category = () => {
  const [categories, setCategories] = useState();

  const [category, setCategory] = useState();

  useEffect(() => {
    getData();
  }, [])


  const getData = () => {
    axios.get('http://localhost:3000/category/all')
      .then((response) => {
        setCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const saveCategory = () => {
    axios
      .post("http://localhost:3000/category/save", {
        category
      })
      .then(function (response) {
        getData();
      })
      .catch(function (error) {
      });
  };

  const deleteCategory = (categoryId) => {
    axios
      .delete("http://localhost:3000/category/delete/" + categoryId, {
      })
      .then(function (response) {
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className='container mt-5'>
      <h3>Kategorije</h3>
      {categories && <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Ime kategroije</th>
            <th>Obrisi kategoriju</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => {
            return (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.title}</td>
                <td className="icon-td">
                  <div className="delete-icon"
                    onClick={() => deleteCategory(category.id)}>
                    <FaTrash />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>}
      <div className='form-wrapper'>
        <h3>Dodajte novu kategoriju za proizvode</h3>
        <Form >
          <Form.Group className="mb-3" >
            <Form.Control type="text" placeholder="Ime kategorije" required="required" onChange={(e) => setCategory(e.target.value)} />
          </Form.Group>
          <Button variant="primary" onClick={() => saveCategory(category)}  >
          Sačuvaj kategoriju
           </Button>
        </Form>
      </div>
    </div>
  )
}

export default Category