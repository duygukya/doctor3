import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UpperSection from "../UpperSection";
import DialogIletisim from "../DialogIletisim"; // Import the DialogIletisim component
import tr from "../../assets/bio.jpg";
import "../mainpageuser.css";

function Biorezonans() {
    const { lang, articles } = useSelector(state => state.language);
    const [openDialog, setOpenDialog] = useState(false); // State to control dialog visibility

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            {lang === "tr" ? 
                <UpperSection image={tr} name={"Biorezonans"} /> :
                <UpperSection image={tr} name={"Bioresonance"} />
            }
            <div className="yazii">
                <span className="tittleabout">
                    {lang === "tr" ? "Biorezonans" : "Bioresonance"}
                </span>
                <br />
                <span className="aboutText">
                    {articles[10]?.data().text}
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

export default Biorezonans;
