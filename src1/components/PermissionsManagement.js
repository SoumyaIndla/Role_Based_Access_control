import React, { useState } from 'react';
import { TextField, Button, Grid, Card, CardContent, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import './PermissionsManagement.css';

const PermissionsManagement = () => {
  const [permissions, setPermissions] = useState([]);
  const [newPermission, setNewPermission] = useState({ user: "", role: "", permission: "" });
  const [deleteIndex, setDeleteIndex] = useState(null);

  const addPermission = () => {
    if (!permissions.some(perm => perm.user === newPermission.user && perm.role === newPermission.role && perm.permission === newPermission.permission)) {
      setPermissions([...permissions, newPermission]);
      setNewPermission({ user: "", role: "", permission: "" });
    } else {
      alert("This permission already exists!");
    }
  };

  const deletePermission = () => {
    const updatedPermissions = [...permissions];
    updatedPermissions.splice(deleteIndex, 1);
    setPermissions(updatedPermissions);
    setDeleteIndex(null);
  };

  return (
    <div className="permission-management">
      <Typography variant="h4" gutterBottom>Permission Management</Typography>
      <Card variant="outlined" className="form-card">
        <CardContent>
          <Typography variant="h6">Assign New Permission</Typography>
          <form onSubmit={(e) => { e.preventDefault(); addPermission(); }}>
            <TextField
              label="User Name"
              variant="outlined"
              fullWidth
              value={newPermission.user}
              onChange={(e) => setNewPermission({ ...newPermission, user: e.target.value })}
              required
              margin="normal"
            />
            <TextField
              label="Role"
              variant="outlined"
              fullWidth
              value={newPermission.role}
              onChange={(e) => setNewPermission({ ...newPermission, role: e.target.value })}
              required
              margin="normal"
            />
            <TextField
              label="Permission"
              variant="outlined"
              fullWidth
              value={newPermission.permission}
              onChange={(e) => setNewPermission({ ...newPermission, permission: e.target.value })}
              required
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Assign Permission
            </Button>
          </form>
        </CardContent>
      </Card>
      <Grid container spacing={3} className="table-container">
        <Grid item xs={12}>
          <Typography variant="h6">Permissions List</Typography>
          <Card variant="outlined">
            <CardContent>
              <table className="permission-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Permission</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {permissions.map((perm, index) => (
                    <tr key={index}>
                      <td>{perm.user}</td>
                      <td>{perm.role}</td>
                      <td>{perm.permission}</td>
                      <td>
                        <Button variant="outlined" color="secondary">Edit</Button>
                        <Button variant="outlined" color="error" onClick={() => setDeleteIndex(index)} style={{ marginLeft: "8px" }}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={deleteIndex !== null} onClose={() => setDeleteIndex(null)}>
        <DialogTitle>Delete Permission</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this permission?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteIndex(null)} color="secondary">Cancel</Button>
          <Button onClick={deletePermission} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PermissionsManagement;
