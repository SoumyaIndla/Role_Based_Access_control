import React, { useState } from 'react';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@mui/material';
import './UserManagement.css';

const UserManagement = () => {
  // State to manage the list of users
  const [users, setUsers] = useState([]);
  
  // State to manage new user input
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // Function to add a new user
  const addUser = () => {
    // Check if the user with the same email already exists
    if (!users.some(user => user.email === newUser.email)) {
      setUsers([...users, newUser]); // Add the new user to the list
      setNewUser({ name: "", email: "" }); // Clear the input fields after adding
    } else {
      alert("User with this email already exists!"); // Alert if email already exists
    }
  };

  return (
    <div className="user-management">
      <Typography variant="h4" gutterBottom>User Management</Typography>

      {/* Add User Form */}
      <Card variant="outlined" className="form-card">
        <CardContent>
          <Typography variant="h6">Add New User</Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              addUser(); // Call the addUser function
            }}
          >
            {/* Name Input Field */}
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
              margin="normal"
            />
            {/* Email Input Field */}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
              margin="normal"
            />
            {/* Submit Button */}
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
                  {/* Loop through the users array and display each user's details */}
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
