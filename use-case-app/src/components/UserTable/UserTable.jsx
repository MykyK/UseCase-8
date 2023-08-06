import React from 'react';
import './UserTable.css';

const UserTable = ({ users, resetTable }) => (
<div>
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
      {users?.map((user, index) => (
        <tr key={user.firstName + index}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.message}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <button onClick={resetTable}>Reset Table</button>
</div>
);

export default UserTable;
