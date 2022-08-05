import React from 'react'
import './profile.css'
import { Link } from 'react-router-dom'

const Profile = () => {
    const userName = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="bg-white shadow rounded overflow-hidden">
        <div className="px-8 pt-4 pb-4 bg-dark">
            <div className="media align-items-end profile-header">
                <div className="profile mr-3">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxERfeH8CH5Hfr-fdowRXIGzqlilsEzmPzg&usqp=CAU" 
                        alt="profile-pic" 
                        className="rounded mb-2 img-thumbnail"/>
                    <a href="#" className="btn btn-danger btn-md btn-block">
                        Edit profile
                    </a>
                </div>
                <div className="media-body mb-5 text-white">
                    <h1 className="mt-0 mb-2 " id='profile-name'>{userName.name}</h1>
                    <p className="medium pb-5">
                        {userName.email}
                    </p>
                </div>
            </div>
        </div>

        <div className="bg-light p-4 d-flex justify-content-end text-center">
            <ul className="list-inline mb-0">
                <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">38</h5>
                        <small className="text-muted"> <i className="fa fa-picture-o mr-1"></i>Page Visits</small>
                </li>
                <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">4</h5>
                    <small className="text-muted"> <i className="fa fa-user-circle-o mr-1"></i>Purchases</small>
                </li>
            </ul>
        </div>

        <div className="py-4 px-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
                <h3 className="mb-0">Recently viewed motorcycles</h3><a href="#" className="btn btn-link text-muted">Show all</a>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-2 pr-lg-1">
                    <img src='https://images.ctfassets.net/x7j9qwvpvr5s/f08YK0wNRuXQdoCHdEHCs/4280c297e297d72ca1109b6cc97739f5/SuperSport-950-MY21-Red-01-Book-testride_630x390.png' alt="cbr" className="img-fluid rounded shadow-sm"/>
                </div>
                <div className="col-lg-6 mb-2 pl-lg-1">
                    <img src='https://images.ctfassets.net/x7j9qwvpvr5s/4IZmRG9qogmWELLc8TZW7a/fe22b49705a0bd03ec8ab0108dbe0919/SLV4-01-Data-Sheet-768x480.png' alt="cruiser" className="img-fluid rounded shadow-sm"/>
                </div>
                <div className="col-lg-6 pr-lg-1 mb-2">
                    <img src='https://images.ctfassets.net/x7j9qwvpvr5s/5QwISYpZOKAYMSBN2YixqA/f6468afa9bd03b67a0239fad74e77215/PV2-Bayliss-MY22-Tech-Spec-768x480.png' alt="paginalev2" className="img-fluid rounded shadow-sm"/>
                </div>
                <div className="col-lg-6 pl-lg-1">
                    <img src="https://images.ctfassets.net/x7j9qwvpvr5s/1nCKIizDwNLjwFjSPoBBaD/6ed565659a7984c89f00ef4454a75e79/MY-22-Panigale-V4-SP2-Model-Blocks-630x390-v02.png" alt="panigalev4" className="img-fluid rounded shadow-sm"/>
                </div>
            </div>
            <div className="py-4">
                <h3 className="mb-3">Cart Items</h3>
                <div className="p-4 bg-light rounded shadow-sm">
                    <p className="font-italic mb-0">If you want to view your saved items click the button</p>
                    <Link to='/cart'>
                        <button>GO TO CART</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile