import docktor from "../../assets/doktor4.png";
import newImage from "../../assets/dc.jpeg";
import "./OzGecmis.css";
import { useSelector } from "react-redux";

function OzGecmis() {



    const { lang, articles } = useSelector(state => state.language)


    return (
        <div className="ozGecmis-container mt-2">
            <h1 className="hakkimda-title">HAKKIMDA</h1>
            <div className="main-content">
                <div className="content-container">
                    <div className="content-section">
                        <img className="doctor-image" src="https://firebasestorage.googleapis.com/v0/b/ugurrecepcelik-bb197.appspot.com/o/images%2Fhakkimda1.png?alt=media&token=0a90d7b1-db00-484f-b40a-4f13268330fb" alt="Doctor" />
                        <span className="about-text">
                            {articles[4]?.data().text}
                        </span>
                    </div>
                    <div className="content-section">
                        <img className="new-image" src={"https://firebasestorage.googleapis.com/v0/b/ugurrecepcelik-bb197.appspot.com/o/images%2Fhakkimda2.png?alt=media&token=0a90d7b1-db00-484f-b40a-4f13268330fb"} alt="New" />
                        <span className="new-text">

                            {articles[5]?.data().text}
                        </span>
                    </div>
                </div>
                {lang == "tr"
                    ?
                    <div className="sidebar">
                        <h2>Akademik Bilgiler</h2>
                        <ul>
                            <li>2002: Konya Selçuk Üniversitesi Meram Tıp Fakültesi - Tıp Fakültesi Girişi</li>
                            <li>2008: Tıp Fakültesi Mezuniyeti</li>
                            <li>2013: Mayo Clinic - Klinik Araştırma Görevlisi</li>
                            <li>2014: Tayvan’da En İyi Sunular Paneli</li>
                            <li>2017: Acıbadem Üniversitesi - Yrd. Doç. Dr. Ünvanı</li>
                        </ul>
                    </div>
                    :
                    <div className="sidebar">
                        <h2>Academic Information</h2>
                        <ul>
                            <li>2002: Konya Selçuk University Meram Faculty of Medicine - Admission to Medical School</li>
                            <li>2008: Graduation from Medical School</li>
                            <li>2013: Mayo Clinic - Clinical Research Fellow</li>
                            <li>2014: Best Presentations Panel in Taiwan</li>
                            <li>2017: Acıbadem University - Assistant Professor</li>
                        </ul>
                    </div>
                }
            </div>
        </div >
    );
}

export default OzGecmis;
