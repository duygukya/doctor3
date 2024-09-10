import React, { useState } from 'react';
import { useSelector } from "react-redux";
import UpperSection from "../UpperSection";
import tr from "../../assets/prp.jpg";
import "../mainpageuser.css";
import DialogIletisim from '../DialogIletisim'; // Import the DialogIletisim component

function Prp() {
    const { lang, articles } = useSelector(state => state.language);
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            <UpperSection image={tr} name={"PRP"} />
            <div className="yazii">
                <span className="tittleabout">PRP</span>
                <br />
                <span className="aboutText">{articles[11]?.data().text}</span>
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

export default Prp;
