import React from 'react';
import { connect } from 'react-redux';
import { addUser, resetTable } from '../store/actions';
import UserForm from '../components/UserForm/UserForm';
import UserTable from '../components/UserTable/UserTable';

const UserContainer = ({users, addUser, resetTable}) => (
  <div>
    <UserForm addUser={addUser} />
    <UserTable users={users} resetTable={resetTable} />
  </div>
);

const mapDispatchToProps = {
  addUser,
  resetTable,
};

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);