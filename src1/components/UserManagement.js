import React, { useState } from 'react';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@mui/material';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const addUser = () => {
    if (!users.some(user => user.email === newUser.email)) {
      setUsers([...users, newUser]);
      setNewUser({ name: "", email: "" });
    } else {
      alert("User with this email already exists!");
    }
  };

  return (
    <div className="user-management">
      <Typography variant="h4" gutterBottom>User Management</Typography>

      {/* Add User Form */}
      <Card variant="outlined" className="form-card">
        <CardContent>
          <Typography variant="h6">Add New User</Typography>
          <form onSubmit={(e) => { e.preventDefault(); addUser(); }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add User
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* User List Table */}
      <Grid container spacing={3} className="table-container">
        <Grid item xs={12}>
          <Typography variant="h6">User List</Typography>
          <Card variant="outlined">
            <CardContent>
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserManagement;
