import { Button, Switch, TextareaAutosize, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png"
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { successToast } from "../../helpers/toast";
import { setLoggedStatus } from "../../redux/features/authSlice";
import { setArticles, setLangStatus } from "../../redux/features/language";
import AdminResimler from "./AdminResimler";
import TextArea from "antd/es/input/TextArea";
import Randevular from "./Randevular";

function MainPageAdmin() {

    const { lang, articles } = useSelector(state => state.language)

    const [cheched, setChecked] = useState();
    




    useEffect(() => {
        
        if(cheched){
            dispatch(setLangStatus("en"))
        }else{
            dispatch(setLangStatus("tr"))

        }


    }, [cheched]);



    const handleSwitchChange = (event) => {
        setChecked(event.target.checked);
    };





    const navigate = useNavigate();

    const [showing, setShowing] = useState(2);

    const [articleLocal, setArticleLocal] = useState([]);


    useEffect(() => {
        setArticleLocal(articles)
    }, [articles]);

    const handleChange = (value, index) => {
        // Create a new array by copying the existing one
        const updatedArticles = [...articleLocal];

        // Update the text property of the specific article
        updatedArticles[index] = {
            ...updatedArticles[index],
            data: () => ({ text: value })
        };

        // Update the state with the new array
        setArticleLocal(updatedArticles);
    };

    const handleUpdate = async (index, documentID) => {
        try {
            const docRef = doc(db, lang == "tr" ? "yazilar" : "yazilarEN", documentID.toString()); // Document ID '1' in the 'yazilar' collection
            await updateDoc(docRef, {
                text: articleLocal[index]?.data().text
            });
            successToast("Guncellendi.")

        } catch (error) {
            console.log(error);
        }
    }

    const dispatch = useDispatch()
    return (
        <div style={{ height: "100vh" }} className="d-flex">
            <div className="w-25 border-end d-flex flex-column align-items-center">

                <img style={{ cursor: "pointer" }} onClick={() => { dispatch(setLoggedStatus(false)); navigate("/") }} src={logo} alt="" />
                
                <div className="d-flex align-items-center">
                    <span>
                        Türkçe
                    </span>
                    <Switch checked={cheched} onChange={handleSwitchChange}></Switch>
                    <span>İngilizce</span>
                </div>
                
                
                <Button onClick={() => setShowing(2)} className="w-50 mt-4" variant="outlined">Yazılar</Button>
                <Button onClick={() => setShowing(1)} className="w-50 mt-5" variant="outlined">Resimler</Button>
                <Button onClick={() => setShowing(3)} className="w-50 mt-5" variant="outlined">Randevu İstekleri</Button>
            </div>
            <div className="w-75">
                {showing == 2 &&
                    <div className="d-flex flex-column w-100 h-100 p-5">
                        <div>
                            Anasayfa 1
                            <div className=" w-100 d-flex ">
                                <textarea maxLength={255} rows={8} value={articleLocal[0]?.data().text} onChange={(e) => handleChange(e.target.value, 0)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(0, 0)}>Güncelle</Button>
                            </div>
                        </div>
                        <div className="mt-4">
                            Anasayfa 2
                            <div className=" w-100 d-flex">
                                <textarea maxLength={450} rows={8} value={articleLocal[1]?.data().text} onChange={(e) => handleChange(e.target.value, 1)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(1, 1)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Anasayfa 3
                            <div className=" w-100 d-flex">
                                <textarea maxLength={350} rows={8} value={articleLocal[2]?.data().text} onChange={(e) => handleChange(e.target.value, 2)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(2, 2)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Anasayfa 4
                            <div className=" w-100 d-flex">
                                <textarea maxLength={380} rows={8} value={articleLocal[3]?.data().text} onChange={(e) => handleChange(e.target.value, 3)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(3, 3)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Hakkımda 1
                            <div className=" w-100 d-flex">
                                <textarea maxLength={1255} rows={8} value={articleLocal[4]?.data().text} onChange={(e) => handleChange(e.target.value, 4)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(4, 4)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Hakkımda 2
                            <div className=" w-100 d-flex">
                                <textarea maxLength={1255} rows={8} value={articleLocal[5]?.data().text} onChange={(e) => handleChange(e.target.value, 5)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(5, 5)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Ozon Tedavisi
                            <div className=" w-100 d-flex">
                                <textarea maxLength={5255} rows={8} value={articleLocal[6]?.data().text} onChange={(e) => handleChange(e.target.value, 6)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(6, 6)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Burun Estetiği
                            <div className=" w-100 d-flex">
                                <textarea maxLength={5255} rows={8} value={articleLocal[7]?.data().text} onChange={(e) => handleChange(e.target.value, 7)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(7, 7)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Saç Ekimi
                            <div className=" w-100 d-flex">
                                <textarea maxLength={5255} rows={8} value={articleLocal[8]?.data().text} onChange={(e) => handleChange(e.target.value, 8)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(8, 8)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Gençlik Aşısı
                            <div className=" w-100 d-flex">
                                <textarea maxLength={5255} rows={8} value={articleLocal[9]?.data().text} onChange={(e) => handleChange(e.target.value, 9)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(9, 9)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            BioRezonans
                            <div className=" w-100 d-flex">
                                <textarea maxLength={5255} rows={8} value={articleLocal[10]?.data().text} onChange={(e) => handleChange(e.target.value, 10)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(10, 91)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            PRP
                            <div className=" w-100 d-flex">
                                <textarea maxLength={5255} rows={8} value={articleLocal[11]?.data().text} onChange={(e) => handleChange(e.target.value, 11)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(11, 913)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Dudak Botoksu
                            <div className=" w-100 d-flex">
                                <textarea maxLength={5255} rows={8} value={articleLocal[12]?.data().text} onChange={(e) => handleChange(e.target.value, 12)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(12, 914)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Çene Botoksu
                            <div className=" w-100 d-flex">
                                <textarea maxLength={5255} rows={8} value={articleLocal[13]?.data().text} onChange={(e) => handleChange(e.target.value, 13)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(13, 915)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Kaş Botoksu
                            <div className=" w-100 d-flex">
                                <textarea maxLength={5255} rows={8} value={articleLocal[14]?.data().text} onChange={(e) => handleChange(e.target.value, 14)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(14, 916)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Yüz Botoksu
                            <div className=" w-100 d-flex">
                                <textarea maxLength={5255} rows={8} value={articleLocal[15]?.data().text} onChange={(e) => handleChange(e.target.value, 15)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(15, 917)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Dudak Dolgusu
                            <div className=" w-100 d-flex">
                                <textarea maxLength={5255} rows={8} value={articleLocal[16]?.data().text} onChange={(e) => handleChange(e.target.value, 16)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(16, 918)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Burun Dolgusu
                            <div className=" w-100 d-flex">
                                <textarea maxLength={5255} rows={8} value={articleLocal[17]?.data().text} onChange={(e) => handleChange(e.target.value, 17)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(17, 919)}>Güncelle</Button>

                            </div>
                        </div>
                        <div className="mt-4">
                            Yanak Dolgusu
                            <div className=" w-100 d-flex">
                                <textarea maxLength={5255} rows={8} value={articleLocal[18]?.data().text} onChange={(e) => handleChange(e.target.value, 18)} className="w-50 p-2" style={{borderRadius: "10px", outline: "none"}}></textarea>
                                <Button className="mx-2" variant="outlined" onClick={() => handleUpdate(18, 920)}>Güncelle</Button>

                            </div>
                        </div>
                    </div>

                }
                {showing == 1 &&
                    <AdminResimler></AdminResimler>

                }
                {showing == 3 &&
                    <Randevular></Randevular>

                }
            </div>
        </div>
    );
}

export default MainPageAdmin;