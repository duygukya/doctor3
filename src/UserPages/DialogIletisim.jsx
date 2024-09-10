import { Button, Dialog, Slide, TextField } from "@mui/material";
import React, { useState } from "react";
import { db, collection, addDoc } from '../firebaseConfig'; // Adjust the import path accordingly
import "./mainpageuser.css";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function DialogIletisim({ open, handleClose }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        try {
            await addDoc(collection(db, "contacts"), {
                name: name,
                phone: phone,
                message: message,
                timestamp: new Date()
            });
            // Clear form and close dialog
            setName("");
            setPhone("");
            setMessage("");
            handleClose();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
            aria-describedby="alert-dialog-slide-description"
        >
            <div className="p-5 d-flex justify-content-center align-items-center flex-column">
                <h3>Sizi Arayalım.</h3>
                <TextField
                    fullWidth
                    className="mt-2"
                    placeholder="Adınız Soyadınız"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    fullWidth
                    className="mt-2"
                    placeholder="Telefon"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <textarea
                    rows={6}
                    className="textareaaa mt-2 border border-2"
                    placeholder="Mesajınız"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                    className="mt-3"
                    variant="outlined"
                    onClick={handleSubmit}
                >
                    Gönder
                </Button>
            </div>
        </Dialog>
    );
}

export default DialogIletisim;
