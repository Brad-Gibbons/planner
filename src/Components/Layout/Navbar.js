import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedIn';
import SignedOutLinks from './SignedOut';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth } = props
    console.log(auth)
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to='/' className="brand-logo">Planner</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);