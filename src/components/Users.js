import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import axios from "axios";

import '../css/Users.css';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '10%',
    left: '25%',
    bottom: '400px',
    width: '50%',
    hight: '50vh'
  }
};

class Users extends Component {

  constructor(props) {
    // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
    Modal.setAppElement('#root')

    super(props);

    this.state = {
      users: [],
      openEditModal: false,
      name: '',
      email: '',
      id: null
    };

    this.getData = this.getData.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.deleteSelectedUser = this.deleteSelectedUser.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get(`http://localhost:3003/users/`)
      .then((res) => {
        if (res.status == 200) {
          this.setState({ users: res.data })
          console.log("this.state.users", this.state.users)
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  editUser(user) {
    console.log("editUser click user = ", user);
    this.setState({
      openEditModal: true,
      name: user.name,
      email: user.email,
      id: user.id
    })
  }

  closeModal() {
    this.setState({
      openEditModal: false
    });
  }

  updateUser(e) {
    e.preventDefault();
    console.log("update user call");
    console.log("user", this.state);
    axios.put(`http://localhost:3003/users/${this.state.id}`, {
      name: this.state.name,
      email: this.state.email
    })
      .then(res => {
        if (res.status == 200) {
          this.setState({
            openEditModal: false
          });
          this.getData();
          toast.success("User Updated Successfully !", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  deleteUser(id) {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.deleteSelectedUser(id)
        },
        {
          label: 'No'
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: false,
      willUnmount: () => { },
      afterClose: () => { },
      onClickOutside: () => { },
      onKeypressEscape: () => { }
    });
  }

  deleteSelectedUser(id) {
    console.log("deleteUser click id = ", id);

    axios.delete(`http://localhost:3003/users/${id}`)
      .then((res) => {
        if (res.status == 200) {
          this.getData();
          toast.success("User Deleted Successfully !", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="UsersPage">
        <div className="PageTitle">List Of Users</div >
        <div className="UserTable">
          <div className="UserTableRowHeader">
            <div className="HeaderItem">User ID</div>
            <div className="HeaderItem">Name</div>
            <div className="HeaderItem">Email</div>
            <div className="HeaderItem">Action</div>
          </div>
          {
            this.state.users.map((user) => (
              <div className="UserTableRowData">
                <div className="DataItem">{user.id}</div>
                <div className="DataItem">{user.name}</div>
                <div className="DataItem">{user.email}</div>
                <div className="DataItem">
                  <button className="EditButton mr-20" onClick={() => this.editUser(user)}>Edit</button>
                  <button className="DeleteButton mr-20" onClick={() => this.deleteUser(user.id)}>Delete</button>
                </div>
              </div>
            )
            )
          }
        </div>

        <div>
          <Modal
            isOpen={this.state.openEditModal}
            id={this.state.id}
            name={this.state.name}
            email={this.state.email}
            style={customStyles}
          >
            <div className="UpdateFormPage">
              <div className="UpdateHeader">
                <div className="UpdateTitle">Update User</div>
                <button className="CloseButton" onClick={this.closeModal}>close</button>
              </div>
              <form className="FormFields" onSubmit={this.updateUser}>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="name">name</label>
                  <input type="text" id="name" className="FormField__Input" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">email</label>
                  <input type="text" id="email" className="FormField__Input" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <button className="FormField__Button mr-20 UpdateButton">Update User</button>
                </div>
              </form>
            </div>
          </Modal>
        </div>

        <ToastContainer />
      </div>
    );
  }
}

export default Users;