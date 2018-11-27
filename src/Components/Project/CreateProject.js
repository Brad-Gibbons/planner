import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createProject} from '../../Store/Actions/projectActions'
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createProject(this.state)
    }
    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5>Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);