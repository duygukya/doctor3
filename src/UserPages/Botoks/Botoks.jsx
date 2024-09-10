import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UpperSection from "../UpperSection";
import DialogIletisim from "../DialogIletisim"; // Import the DialogIletisim component
import tr from "../../assets/botoks.png";
import dudakImage from "../../assets/dudakImage.jpg"; // Add image imports
import ceneImage from "../../assets/ceneImage.jpg";
import kasImage from "../../assets/kasImage.png";
import yuzImage from "../../assets/yuzImage.png";
import "../mainpageuser.css";
import { useSelector } from 'react-redux';

function Botoks() {
    const { lang, articles } = useSelector(state => state.language);
    const [status, setstatus] = useState(1);
    const location = useLocation();
    const [title, setTitle] = useState(lang === "tr" ? "Botoks" : "Botox");
    const [image, setImage] = useState(tr);
    const [openDialog, setOpenDialog] = useState(false); // State to control dialog visibility

    useEffect(() => {
        if (lang === "tr") {
            switch (location.pathname) {
                case "/botoks/dudak":
                    setTitle("Dudak Botoksu");
                    setImage(dudakImage);
                    setstatus(1);
                    break;
                case "/botoks/cene":
                    setTitle("Çene Botoksu");
                    setImage(ceneImage);
                    setstatus(2);
                    break;
                case "/botoks/kas":
                    setTitle("Kaş Botoksu");
                    setImage(kasImage);
                    setstatus(3);
                    break;
                case "/botoks/yuz":
                    setTitle("Yüz Botoksu");
                    setImage(yuzImage);
                    setstatus(4);
                    break;
                default:
                    setTitle("Botoks");
                    setImage(tr);
                    break;
            }
        } else {
            switch (location.pathname) {
                case "/botoks/dudak":
                    setTitle("Lip Botox");
                    setImage(dudakImage);
                    setstatus(1);
                    break;
                case "/botoks/cene":
                    setTitle("Chin Botox");
                    setImage(ceneImage);
                    setstatus(2);
                    break;
                case "/botoks/kas":
                    setTitle("Eyebrow Botox");
                    setImage(kasImage);
                    setstatus(3);
                    break;
                case "/botoks/yuz":
                    setTitle("Face Botox");
                    setImage(yuzImage);
                    setstatus(4);
                    break;
                default:
                    setTitle("Botoks");
                    setImage(tr);
                    break;
            }
        }
    }, [location.pathname, lang]);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            <UpperSection image={image} name={title} />
            <div className="yazii">
                <span className="tittleabout">
                    {title}
                </span>
                <br />
                <span className="aboutText">
                    {articles[11 + status]?.data().text}
                </span>
                <br />
                <div className="button-container">
                    <button className="randevu-button" onClick={handleOpenDialog}>
                        Randevu Al
                    </button>
                </div>
            </div>
            <DialogIletisim open={openDialog} onClose={handleCloseDialog} />
        </div>
    );
}

export default Botoks;
