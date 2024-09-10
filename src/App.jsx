import './App.css';
import MainLayout from './Layout/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPageUser from './UserPages/MainPageUser';
import MainPageAdmin from './AdminPages/MainPageAdmin/MainPageAdmin';
import LoginPageAdmin from './AdminPages/LoginPageAdmin/LoginPageAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Botoks from './UserPages/Botoks/Botoks';
import Dolgu from './UserPages/Dolgu/Dolgu';
import Ozon from './UserPages/Ozon/Ozon';
import Burun from './UserPages/Burun/Burun';
import Sac from './UserPages/Sac/Sac';
import Genclik from './UserPages/Genclik/Genclik';
import Biorezonans from './UserPages/Biorezonans/Biorezonans';
import Prp from './UserPages/Prp/Prp';
import OzGecmis from './UserPages/OzGecmis/OzGecmis';
import Gorseller from './UserPages/Gorseller/Gorseller';

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { useEffect, useState } from "react";
import { setArticles } from './redux/features/language';
import DialogIletisim from './UserPages/DialogIletisim';


function App() {

  const { logged } = useSelector(state => state.auth);
  const { articles, lang } = useSelector(state => state.language);


  const dispatch = useDispatch()

  const fetchArticles = async () => {

    let querySnapshot

    if (lang == "tr") {

      querySnapshot = await getDocs(collection(db, "yazilar"));
    }else{
      querySnapshot = await getDocs(collection(db, "yazilarEN"));

    }

    dispatch(setArticles(querySnapshot.docs))
    

  }

  useEffect(() => {
    fetchArticles()
  }, [lang]);



  return (
    <>
      {logged ? (
        <div>
          <Routes>
            <Route path="/admin" element={<MainPageAdmin />} />
          </Routes>
        </div>
      ) : (
        <MainLayout>
          <Routes>
            <Route path="/admin" element={logged ? <MainPageAdmin /> : <Navigate to="/admin/giris" />} />
            <Route path="/admin/giris" element={<LoginPageAdmin />} />
            <Route path="/" element={<MainPageUser />} />
            <Route path="/ozgecmis" element={<OzGecmis />} />
            <Route path="/dialogiletisim" element={<DialogIletisim />} />
            <Route path="/gorseller" element={<Gorseller />} />
            <Route path="/botoks/:type" element={<Botoks />} />
            <Route path="/dolgu/:type" element={<Dolgu />} />
            <Route path="/ozon-tedavisi" element={<Ozon />} />
            <Route path="/burun-estetigi" element={<Burun />} />
            <Route path="/sac-ekimi" element={<Sac />} />
            <Route path="/genclik-asisi" element={<Genclik />} />
            <Route path="/biorezonans" element={<Biorezonans />} />
            <Route path="/prp" element={<Prp />} />
          </Routes>
        </MainLayout>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
