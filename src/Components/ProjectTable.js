import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Snackbar, Alert, Typography, Box } from '@mui/material';
import axios from 'axios';

const backgroundImage = require("../Image/dark-background-.png"); 

const ProjectTable = () => {
    const [projects, setProjects] = useState([]);
    const [editId, setEditId] = useState(null);
    const [form, setForm] = useState({
        name: '',
        description: '',
        techStack: '',
        imageUrl: '',
        githubLink: '',
        testLink: '',
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    useEffect(() => {
        // axios.get(`${window.location.origin}/api/projects`)
        axios.get(`https://saurabh-website-api.vercel.app/api/projects`)
            .then(response => setProjects(response.data))
            .catch(error => {
                console.error(error);
                setSnackbarMessage('Failed to fetch projects.');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            });
    }, []);

    const handleEdit = (project) => {
        setEditId(project._id);
        setForm({
            name: project.name,
            description: project.description,
            techStack: project.techStack,
            imageUrl: project.imageUrl,
            githubLink: project.githubLink,
            testLink: project.testLink,
        });
    };

    const handleDelete = (id) => {
        // axios.delete(`${window.location.origin}/api/projects/${id}`)
        axios.delete(`https://saurabh-website-api.vercel.app/api/projects/${id}`)
            .then(() => {
                setProjects(projects.filter(project => project._id !== id));
                setSnackbarMessage('Project deleted successfully!');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);
            })
            .catch(error => {
                console.error(error);
                setSnackbarMessage('Failed to delete the project.');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            });
    };

    const handleUpdate = () => {
        // axios.put(`${window.location.origin}/api/projects/${editId}`, form)
        axios.put(`https://saurabh-website-api.vercel.app/api/projects/${editId}`, form)
            .then(response => {
                setProjects(projects.map(project => (project._id === editId ? response.data : project)));
                setEditId(null);
                setForm({
                    name: '',
                    description: '',
                    techStack: '',
                    imageUrl: '',
                    githubLink: '',
                    testLink: '',
                });
                setSnackbarMessage('Project updated successfully!');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);
            })
            .catch(error => {
                console.error(error);
                setSnackbarMessage('Failed to update the project.');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box
            sx={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh'
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: '20px', color: 'orange', fontSize:{xs:"20px", md:"30px"} }}>
                <span style={{color:"white"}}>Project</span> Table
            </Typography>
            <TableContainer component={Paper} sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#252729' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: 'orange', backgroundColor: '#252729', fontSize: '20px' }}>Name</TableCell>
                            <TableCell sx={{ color: 'orange', backgroundColor: '#252729', fontSize: '20px' }}>Description</TableCell>
                            <TableCell sx={{ color: 'orange', backgroundColor: '#252729', fontSize: '20px' }}>Tech Stack</TableCell>
                            <TableCell sx={{ color: 'orange', backgroundColor: '#252729', fontSize: '20px' }}>Image URL</TableCell>
                            <TableCell sx={{ color: 'orange', backgroundColor: '#252729', fontSize: '20px' }}>GitHub Link</TableCell>
                            <TableCell sx={{ color: 'orange', backgroundColor: '#252729', fontSize: '20px' }}>Test Link</TableCell>
                            <TableCell sx={{ color: 'orange', backgroundColor: '#252729', fontSize: '20px' }}>Edit</TableCell>
                            <TableCell sx={{ color: 'orange', backgroundColor: '#252729', fontSize: '20px' }}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.map((project) => (
                            <TableRow key={project._id}>
                                <TableCell sx={{ color: 'white' }}>
                                    {editId === project._id ? (
                                        <TextField
                                            name="name"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            sx={{ backgroundColor: '#3C3C3C', color: 'white' }}
                                        />
                                    ) : (
                                        project.name
                                    )}
                                </TableCell>
                                <TableCell sx={{ color: 'white' }}>
                                    {editId === project._id ? (
                                        <TextField
                                            name="description"
                                            value={form.description}
                                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                                            sx={{ backgroundColor: '#3C3C3C', color: 'white' }}
                                        />
                                    ) : (
                                        project.description
                                    )}
                                </TableCell>
                                <TableCell sx={{ color: 'white' }}>
                                    {editId === project._id ? (
                                        <TextField
                                            name="techStack"
                                            value={form.techStack}
                                            onChange={(e) => setForm({ ...form, techStack: e.target.value })}
                                            sx={{ backgroundColor: '#3C3C3C', color: 'white' }}
                                        />
                                    ) : (
                                        project.techStack
                                    )}
                                </TableCell>
                                <TableCell sx={{ color: 'white' }}>
                                    {editId === project._id ? (
                                        <TextField
                                            name="imageUrl"
                                            value={form.imageUrl}
                                            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                                            sx={{ backgroundColor: '#3C3C3C', color: 'white' }}
                                        />
                                    ) : (
                                        project.imageUrl
                                    )}
                                </TableCell>
                                <TableCell sx={{ color: 'white' }}>
                                    {editId === project._id ? (
                                        <TextField
                                            name="githubLink"
                                            value={form.githubLink}
                                            onChange={(e) => setForm({ ...form, githubLink: e.target.value })}
                                            sx={{ backgroundColor: '#3C3C3C', color: 'white' }}
                                        />
                                    ) : (
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>GitHub</a>
                                    )}
                                </TableCell>
                                <TableCell sx={{ color: 'white' }}>
                                    {editId === project._id ? (
                                        <TextField
                                            name="testLink"
                                            value={form.testLink}
                                            onChange={(e) => setForm({ ...form, testLink: e.target.value })}
                                            sx={{ backgroundColor: '#3C3C3C', color: 'white' }}
                                        />
                                    ) : (
                                        project.testLink && <a href={project.testLink} target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>Test</a>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {editId === project._id ? (
                                        <Button onClick={handleUpdate} variant="contained" color="primary" sx={{ marginRight: '10px' }}>Update</Button>
                                    ) : (
                                        <Button onClick={() => handleEdit(project)} variant="contained" color="primary" sx={{ marginRight: '10px' }}>Edit</Button>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {editId !== project._id && (
                                        <Button onClick={() => handleDelete(project._id)} variant="contained" color="secondary">Delete</Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                action={
                    <Button color="inherit" onClick={handleCloseSnackbar}>
                        Close
                    </Button>
                }
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ProjectTable;
