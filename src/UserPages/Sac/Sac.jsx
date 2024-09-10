import React, { useState } from 'react';
import { useSelector } from "react-redux";
import UpperSection from "../UpperSection";
import tr from "../../assets/sacekimi.jpg";
import "../mainpageuser.css";
import DialogIletisim from '../DialogIletisim'; // Import the DialogIletisim component

function Sac() {
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
            <DialogIletisim open={openDialog} onClose={handleCloseDialog} />
            {lang === "tr" ?
                <UpperSection image={tr} name={"Saç Ekimi"} /> :
                <UpperSection image={tr} name={"Hair Transplant"} />
            }
            <div className="yazii">
                {lang === "tr" ?
                    <span className="tittleabout">Saç Ekimi</span> :
                    <span className="tittleabout">Hair Transplant</span>
                }
                <br />
                <span className="aboutText">{articles[8]?.data().text}</span>
                <br />
                <div className="button-container">
                    <button className="randevu-button" onClick={handleOpenDialog}>
                        Randevu Al
                    </button>
                </div>
            </div>
           
        </div>
    );
}

export default Sac;
