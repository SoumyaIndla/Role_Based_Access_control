import React, { useState } from 'react';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@mui/material';
import './RoleManagement.css';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState({ name: "", description: "" });

  const addRole = () => {
    if (!roles.some(role => role.name === newRole.name)) {
      setRoles([...roles, newRole]);
      setNewRole({ name: "", description: "" });
    } else {
      alert("Role already exists!");
    }
  };

  return (
    <div className="role-management">
      <Typography variant="h4" gutterBottom>Role Management</Typography>

      {/* Add Role Form */}
      <Card variant="outlined" className="form-card">
        <CardContent>
          <Typography variant="h6">Add New Role</Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addRole();
            }}
          >
            <TextField
              label="Role Name"
              variant="outlined"
              fullWidth
              value={newRole.name}
              onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
              required
              margin="normal"
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              value={newRole.description}
              onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
              required
              margin="normal"
            />
            <Button variant="contained" color="secondary" type="submit" fullWidth>
              Add Role
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Role List Table */}
      <Grid container spacing={3} className="table-container">
        <Grid item xs={12}>
          <Typography variant="h6">Role List</Typography>
          <Card variant="outlined">
            <CardContent>
              <table className="role-table">
                <thead>
                  <tr>
                    <th>Role Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((role, index) => (
                    <tr key={index}>
                      <td>{role.name}</td>
                      <td>{role.description}</td>
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

export default RoleManagement;
