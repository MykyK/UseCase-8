import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../store/actions';
import UserForm from '../components/UserForm/UserForm';
import UserTable from '../components/UserTable/UserTable';

const UserContainer = ({users, addUser}) => {
  console.log(users)
  return (
 
  <div>
    <UserForm addUser={addUser} />
    <UserTable users={users} />
  </div>
)};

const mapDispatchToProps = {
  addUser,
};

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);