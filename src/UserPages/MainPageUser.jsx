import doktor from "../assets/maxresdefault.png";
import doktor2 from "../assets/doktor.png";
import doktor3 from "../assets/doktor2.png";
import iletisim from "../assets/iletisim.png";
import "./mainpageuser.css";
import { Phone } from "@mui/icons-material";
import Card from "./CardMainPage";
import vucut from "../assets/vucut.png"
import vucut5 from "../assets/sac.png"
import vucut4 from "../assets/genclik.png"
import vucut3 from "../assets/yuz.png"
import vucut2 from "../assets/meme.png"
import bakim from "../assets/bakim.jpg"
import footerustu from "../assets/footerust.png"
import vectorr from "../assets/vectorr.png"
import insta from "../assets/insta.svg"
import facebook from "../assets/facebook.svg"
import youtube from "../assets/youtube.svg"
import { useSelector } from "react-redux";
import { useState } from "react";
import DialogIletisim from "./DialogIletisim";

function MainPageUser() {
    const { articles, lang } = useSelector(state => state.language);

    let details;

    if (lang == "tr") {
        details = [
            { image: vucut, name: "VÜCUT ESTETİĞİ" },
            { image: vucut2, name: "MEME ESTETİĞİ" },
            { image: vucut3, name: "YÜZ ESTETİĞİ" },
            { image: vucut4, name: "GENÇLİK AŞISI" },
            { image: vucut5, name: "SAÇ EKİMİ" },
            { image: bakim, name: "CİLT BAKIMI" },
        ]
    } else {
        details = [
            { image: vucut, name: "BODY AESTHETICS" },
            { image: vucut2, name: "BREAST AESTHETICS" },
            { image: vucut3, name: "FACE AESTHETICS" },
            { image: vucut4, name: "YOUTH VACCINE" },
            { image: vucut5, name: "HAIR TRANSPLANTATION" },
            { image: bakim, name: "SKINCARE" },
        ]
    }
    
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="main-page-background">
            <div className="d-flex flex-column mt-3">
                <DialogIletisim open={open} handleClose={handleClose}></DialogIletisim>
                <div className="d-flex flex-column upperr">
                    <div className="resposinve d-flex">
                        <img
                            className="resppp reponsedimage"
                            style={{ width: "50%", height: "500px", maxWidth: "50%" }}
                            src="https://firebasestorage.googleapis.com/v0/b/ugurrecepcelik-bb197.appspot.com/o/images%2Fanasayfa1.png?alt=media&token=18996695-8ec9-44e9-baaf-879f21dbcedb"
                            alt=""
                        />
                        <div className="w-100 aaupper p-5 d-flex flex-column">
                            <h1 className="asdafff fw-bold">
                                Op. Dr. Ugur Recep ÇELIK
                            </h1>
                            {lang == "tr"
                                ?
                                <span className="fs-4">
                                    Estetik ve Plastik Cerrahi Uzmanı
                                </span>
                                :
                                <span className="fs-4">
                                    Aesthetic and Plastic Surgery Specialist
                                </span>
                            }
                            <span style={{ textWrap: "wrap", wordBreak: "break-word", whiteSpace: "normal", overflowWrap: "break-word" }} className="mt-5 fs-6">{articles[0]?.data().text}</span>
                            {
                                lang == "tr" ?
                                <span style={{ color: "red" }} className="mt-5 fs-6">
                                    Kliniğimiz, T.C.Sağlık Bakanlığı tarafından verilen <span style={{ color: "red" }} className="fw-bold">Uluslararası Sağlık Turizm Yetki Belgesi</span> ’ne sahiptir.
                                </span>
                                :
                                <span style={{ color: "red" }} className="mt-5 fs-6">
                                    Our clinic is accredited by the <span style={{ color: "red" }} className="fw-bold">Ministry of Health for medical tourism.</span>
                                </span>
                            }
                            <div className="mt-3 d-flex justify-content-between">
                                <div className="d-flex">
                                    <img src={insta} className="imglogo" style={{ fontSize: "15px", width: "64px" }} alt="" />
                                    <img src={facebook} className="imglogo" style={{ fontSize: "15px", width: "64px" }} alt="" />
                                    <img src={youtube} className="imglogo" style={{ fontSize: "15px", width: "64px" }} alt="" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <div onClick={handleClickOpen} style={{cursor: "pointer", color: "white" ,fontSize: "large", fontWeight: "bold" , backgroundColor: "black"}} className="px-5 py-3">
                                        Randevu Al
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mx-5 justify-content-between my-5 resposinve">
                        <div className="d-flex flex-column rssss mx-5">
                            <span className="fw-bold fs-4">
                                Op. Dr. Uğur Recep ÇELİK
                            </span>
                            {
                                lang == "tr"
                                ?
                                <span style={{ color: "#F9AE0D" }} className="fw-bold fs-2 mt-3">
                                    HAKKIMDA
                                </span>
                                :
                                <span style={{ color: "#F9AE0D" }} className="fw-bold fs-2 mt-3">
                                    ABOUT ME
                                </span>
                            }
                            <span className="fs-5 mt-3 ">
                                {articles[1]?.data().text}
                            </span>
                        </div>
                        <img className="fffff" style={{ height: "350px", borderRadius: "25px" }} src="https://firebasestorage.googleapis.com/v0/b/ugurrecepcelik-bb197.appspot.com/o/images%2Fanasayfa2.png?alt=media&token=0a90d7b1-db00-484f-b40a-4f13268330fb" alt="" />
                    </div>
                </div>
                <div style={{ height: "180px" }} className="iletisim d-flex resptasa">
                    <img className="imageiletisim" style={{ borderRadius: "15px", width: "35%" }} src={iletisim} alt="" />
                    {lang == "tr"
                        ?
                        <div style={{ color: "white" }} className="mx-5 d-flex flex-column resptasa1">
                            <span className="fw-bold fs-4">Hemen İletişime Geçin</span>
                            <span className="mt-2 fw-bold resppppn">
                                Bilgi almak ve danışmak istediğiniz konularla ilgili lütfen benimle iletişime geçiniz
                            </span>
                            <div style={{ borderRadius: "15px", cursor: "pointer" }} className=" number container w-75 fw-bold d-flex justify-content-center align-items-center fs-3 mt-3 border border-4">
                                <Phone sx={{ fontSize: "40px" }}></Phone> +90 356 212 00 22
                            </div>
                        </div>
                        :
                        <div style={{ color: "white" }} className="mx-5 d-flex flex-column resptasa1">
                            <span className="fw-bold fs-4">Contact Us</span>
                            <span className="mt-2 fw-bold resppppn">
                                Please contact me regarding the topics you would like to get information about and consult.
                            </span>
                        </div>}
                </div>
                <div>
                    <div className="resposinve sddd d-flex justify-content-around flex-wrap">
                        {details.map((element) => (
                            <Card key={element.name} details={element}></Card>
                        ))}
                    </div>
                </div>
                <div className="upperrr py-5">
                    <div className="d-flex h-100 w-100 justify-content-center align-items-center">
                        <div className="d-flex w-50 asdasd resposinve" style={{ height: "60%" }}>
                            <img style={{ borderRadius: "25px" }} src="https://firebasestorage.googleapis.com/v0/b/ugurrecepcelik-bb197.appspot.com/o/images%2Fanasayfa3.png?alt=media&token=0a90d7b1-db00-484f-b40a-4f13268330fb" alt="" />
                            <div style={{ color: "#FFB10D" }} className="w-100 mx-5 aass d-flex flex-column">
                                {
                                    lang == "tr" ?
                                    <span className="fw-bold fs-3">Neden ?</span>
                                    :
                                    <span className="fw-bold fs-3">Why ?</span>
                                }
                                <span className="fw-bold fs-3">Op. Dr. Uğur Recep ÇELİK</span>
                                <span style={{ color: "black" }}>
                                    {articles[2]?.data().text}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex respoo">
                    <div className="footerustt d-flex justify-content-center align-items-center">
                        <div className="relll d-flex flex-column p-5">
                            <span className="fs-5">
                                {articles[3]?.data().text}
                            </span>
                            <span className="fw-bold mt-2 fs-4">
                                Onur G
                            </span>
                            <img className="vectorrr" src={vectorr} alt="" />
                        </div>
                    </div>
                    <img src={footerustu} className="w-50 respimg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default MainPageUser;
