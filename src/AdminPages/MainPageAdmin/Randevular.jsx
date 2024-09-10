import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig'; // Adjust the import path accordingly
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Button, List, ListItem, ListItemText, Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Randevular() {
    const [requests, setRequests] = useState([]);

    // Fetch requests from Firestore
    const fetchRequests = async () => {
        try {
            const requestsCollection = collection(db, "contacts");
            const querySnapshot = await getDocs(requestsCollection);
            const requestsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setRequests(requestsData);
        } catch (error) {
            console.error("Error fetching requests: ", error);
        }
    };

    // Delete a request from Firestore
    const handleDelete = async (id) => {
        try {
            const requestDoc = doc(db, "contacts", id);
            await deleteDoc(requestDoc);
            setRequests(requests.filter(request => request.id !== id));
        } catch (error) {
            console.error("Error deleting request: ", error);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>Randevular</Typography>
            {
                requests.length == 0 && <div>Hiç Gönderilmiş Mesaj Yok</div>
            }
            <List>
                {requests.map((request) => (
                    <ListItem
                        key={request.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(request.id)}>
                                <DeleteIcon color="error" />
                            </IconButton>
                        }
                    >
                        <Card variant="outlined" style={{ width: '100%', marginBottom: '10px' }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {request.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Phone: {request.phone}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Message: {request.message}
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Randevular;
