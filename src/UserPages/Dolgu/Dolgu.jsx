import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UpperSection from "../UpperSection";
import tr from "../../assets/dolgu.png";
import dudakImage from "../../assets/dudakDolgu.jpg";
import burunImage from "../../assets/burunDolgusu.jpg";
import yanakImage from "../../assets/yanakdolgusu.jpg";
import "../mainpageuser.css";
import { useSelector } from 'react-redux';
import DialogIletisim from '../DialogIletisim'; // Import the DialogIletisim component

function Dolgu() {
    const { lang, articles } = useSelector(state => state.language)
    const [status, setstatus] = useState(1);
    const location = useLocation();
    const [title, setTitle] = useState("Dolgu Uygulamaları");
    const [image, setImage] = useState(tr);
    const [openDialog, setOpenDialog] = useState(false); // State to control dialog visibility

    useEffect(() => {
        if (lang === "tr") {
            switch (location.pathname) {
                case "/dolgu/dudak":
                    setTitle("Dudak Dolgusu");
                    setImage(dudakImage);
                    setstatus(1);
                    break;
                case "/dolgu/burun":
                    setTitle("Burun Dolgusu");
                    setImage(burunImage);
                    setstatus(2);
                    break;
                case "/dolgu/yanak":
                    setTitle("Yanak Dolgusu");
                    setImage(yanakImage);
                    setstatus(3);
                    break;
                default:
                    setTitle("Dolgu Uygulamaları");
                    setImage(tr);
                    break;
            }
        } else {
            switch (location.pathname) {
                case "/dolgu/dudak":
                    setTitle("Lip Filler");
                    setImage(dudakImage);
                    setstatus(1);
                    break;
                case "/dolgu/burun":
                    setTitle("Nose Filler");
                    setImage(burunImage);
                    setstatus(2);
                    break;
                case "/dolgu/yanak":
                    setTitle("Cheek Filler");
                    setImage(yanakImage);
                    setstatus(3);
                    break;
                default:
                    setTitle("Filler Apps");
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
                    {articles[15 + status]?.data().text}
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

export default Dolgu;
