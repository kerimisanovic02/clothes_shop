
import { React, useState, useEffect } from 'react'
import './Profile.scss'
import axios from 'axios';

const Profile = () => {

  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem('loggedUser')));
  const [firstName, setFirstName] = useState(loggedUser?.first_name);
  const [lastName, setLastName] = useState(loggedUser?.last_name);
  const [address, setAddress] = useState(loggedUser?.address);
  const [phone, setPhone] = useState(loggedUser?.phone);
  const [image, setImage] = useState(loggedUser?.image);
  const [id, setId] = useState(loggedUser?.id);

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem('loggedUser')));
    
  }, []);
  const userUpdate ={
    id,
    firstName,
    lastName,
    address,
    phone,
    image,
  }
  const saveProfile = ()=>{
    axios.put('http://localhost:3000/update/profile', userUpdate)
      .then((response) => {
        alert('Profil azuriran')
      });
  }

  console.log("loggggg",loggedUser);
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <h2>Dobrodosli {loggedUser.first_name} na pregled vašeg profila</h2>
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" 
          src={image ? image :"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"} />
            <span className="font-weight-bold">{loggedUser.first_name}</span><span className="text-black-50">{loggedUser.email}</span><span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Postavke profila</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6"><label className="labels">Ime</label><input type="text" className="form-control" placeholder="Ime" required onChange={e => { setFirstName(e.target.value) }} /></div>
              <div className="col-md-6"><label className="labels">Prezime</label><input type="text" className="form-control" placeholder="Prezime" required onChange={e => { setLastName(e.target.value) }} /></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12"><label className="labels">Broj telefona</label><input type="text" className="form-control" placeholder="Unesite broj telefona" required onChange={e => { setPhone(e.target.value) }} /></div>
              <div className="col-md-12"><label className="labels">Adresa</label><input type="text" className="form-control" placeholder="Unesite email adresu" required onChange={e => { setAddress(e.target.value) }} /></div>
              <div className="col-md-12"><label className="labels">Link profilne slike</label><input type="text" className="form-control" placeholder="Unesite link slike" required  onChange={e => { setImage(e.target.value) }} /></div>
            </div>
            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit" onClick={()=>{saveProfile()}}>Sacuvaj.</button></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile