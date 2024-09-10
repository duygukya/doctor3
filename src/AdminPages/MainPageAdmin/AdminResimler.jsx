import React, { useState, useRef } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import './AdminResimler.css'; // Harici CSS dosyası

function AdminResimler() {
    const initialFiles = {
        anasayfa1: "https://firebasestorage.googleapis.com/v0/b/ugurrecepcelik-bb197.appspot.com/o/images%2Fanasayfa1.png?alt=media&token=18996695-8ec9-44e9-baaf-879f21dbcedb",
        anasayfa2: "https://firebasestorage.googleapis.com/v0/b/ugurrecepcelik-bb197.appspot.com/o/images%2Fanasayfa2.png?alt=media&token=0a90d7b1-db00-484f-b40a-4f13268330fb",
        anasayfa3: "https://firebasestorage.googleapis.com/v0/b/ugurrecepcelik-bb197.appspot.com/o/images%2Fanasayfa3.png?alt=media&token=0a90d7b1-db00-484f-b40a-4f13268330fb",
        hakkimda1: "https://firebasestorage.googleapis.com/v0/b/ugurrecepcelik-bb197.appspot.com/o/images%2Fhakkimda1.png?alt=media&token=0a90d7b1-db00-484f-b40a-4f13268330fb",
        hakkimda2: "https://firebasestorage.googleapis.com/v0/b/ugurrecepcelik-bb197.appspot.com/o/images%2Fhakkimda2.png?alt=media&token=0a90d7b1-db00-484f-b40a-4f13268330fb"
    };
    const [files, setFiles] = useState(initialFiles);
    const [downloadURLs, setDownloadURLs] = useState(initialFiles);
    const inputRefs = {
        anasayfa1: useRef(null),
        anasayfa2: useRef(null),
        anasayfa3: useRef(null),
        hakkimda1: useRef(null),
        hakkimda2: useRef(null)
    };

    const handleFileChange = (e, key) => {
        setFiles((prev) => ({ ...prev, [key]: e.target.files[0] }));
    };

    const handleUpload = async (key) => {
        const file = files[key];
        if (!file) return;

        const storage = getStorage();
        const storageRef = ref(storage, `images/${key}.png`);

        try {
            await deleteObject(storageRef);
            console.log(`${key} dosyası silindi, yeni dosya yükleniyor...`);
        } catch (error) {
            if (error.code === 'storage/object-not-found') {
                console.log("Dosya bulunamadı, yeni dosya yükleniyor...");
            } else {
                console.error("Dosya silme hatası:", error);
                return;
            }
        }

        startUpload(storageRef, key);
    };

    const startUpload = (storageRef, key) => {
        const uploadTask = uploadBytesResumable(storageRef, files[key]);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Yükleme durumu burada kontrol ediliyor
            },
            (error) => {
                console.error("Yükleme hatası:", error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setDownloadURLs((prev) => ({ ...prev, [key]: downloadURL }));
                });
            }
        );

        setFiles((prev) => ({ ...prev, [key]: null }));
        if (inputRefs[key].current) {
            inputRefs[key].current.value = '';
        }
    };

    console.log(downloadURLs["anasayfa1"]);
    return (
        <div className="upload-container d-flex justify-content-around flex-wrap">
            {Object.keys(initialFiles).map((key) => (
                <div className="upload-item" key={key}>
                    <label>{key.toUpperCase()}</label>
                    <input type="file" onChange={(e) => handleFileChange(e, key)} ref={inputRefs[key]} />
                    <button onClick={() => handleUpload(key)}>Yükle</button>

                    {downloadURLs[key] && (
                        <div>
                            <p>Yüklenen Fotoğraf ({key}):</p>
                            <img src={downloadURLs[key]} alt={key} style={{ width: '150px' }} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default AdminResimler;
