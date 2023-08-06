import React from 'react';
import './UserTable.css';

const UserTable = ({ users }) => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
      {users?.map(user => (
        <tr key={user.id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.message}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
