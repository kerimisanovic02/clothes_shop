import React, { useEffect, useState } from 'react';
import './AdminPanel.scss';
import { Tabs, Tab } from 'react-bootstrap';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
import UsersTable from './UsersTable';
import Category from './Category';


const AdminPanel = () => {

  return (
    <div className="">
      <Tabs
        defaultActiveKey="product"
        id="uncontrolled-tab-example"
        className="mb-3">

        <Tab eventKey="product" title="Dodaj proizvod">
          <ProductForm></ProductForm>
        </Tab>
        <Tab eventKey="products" title="Proizvodi">
          <ProductTable></ProductTable>
        </Tab>
        <Tab eventKey="users" title="Korisnici">
          <UsersTable></UsersTable>
        </Tab>
        <Tab eventKey="category" title="Dodaj kategoriju">
          <Category></Category>
        </Tab>
      </Tabs>

    </div>
  )
}

export default AdminPanel