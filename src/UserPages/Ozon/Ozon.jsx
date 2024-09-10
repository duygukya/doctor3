import React, { useState } from 'react';
import { useSelector } from "react-redux";
import UpperSection from "../UpperSection";
import tr from "../../assets/ozon.png";
import "../mainpageuser.css";
import DialogIletisim from '../DialogIletisim'; // Import the DialogIletisim component

function Ozon() {
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
            {lang === "tr" ?
                <UpperSection image={tr} name={"Ozon Tedavisi"} /> :
                <UpperSection image={tr} name={"Ozone Therapy"} />
            }
            <div className="yazii">
                {lang === "tr" ?
                    <span className="tittleabout">Ozon Tedavisi</span> :
                    <span className="tittleabout">Ozone Therapy</span>
                }
                <br />
                <span className="aboutText">{articles[6]?.data().text}</span>
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

export default Ozon;
