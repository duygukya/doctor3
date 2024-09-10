import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UpperSection from "../UpperSection";
import tr from "../../assets/guzel.png";
import "../mainpageuser.css";
import DialogIletisim from '../DialogIletisim'; // Import the DialogIletisim component

function Genclik() {
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
                <UpperSection image={tr} name={"Gençlik Aşısı"} /> :
                <UpperSection image={tr} name={"Youth Angle"} />
            }
            <div className="yazii">
                {lang === "tr" ?
                    <span className="tittleabout">
                        Gençlik Aşısı
                    </span> :
                    <span className="tittleabout">
                        Youth Angle
                    </span>
                }
                <br />
                <span className="aboutText">
                    {articles[9]?.data().text}
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

export default Genclik;
