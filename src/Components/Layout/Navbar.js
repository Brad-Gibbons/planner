import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedIn';
import SignedOutLinks from './SignedOut';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
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
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);