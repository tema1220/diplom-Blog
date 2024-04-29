import './App.css';
import Button from './components/Button/button';
import UserName from './components/UserMalkin/UserName';
import State from './components/State/state';
import Form from './components/Form/Form';
import Inputs from './components/Inputs/Inputs';
import TextArea from './components/Textarea/TextArea';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/MenuNotAuthorized/Menu';
import Tabs from './components/Tabs/Tabs';
import Primary from './components/PrimarySecondary/Primary';
import LargeCard from './components/LargePostCard/LargeCard';
import MediumCard from './components/MediumPostCard/MediumCard';
import SmallCard from './components/SmallPostCard/SmallCard';
import SearchCard from './components/SearchCard/SearchCard';
import Spinner from './components/Spinner/Spinner';
import NavigationPostCard from './components/NavigationPostCard/NavigationPostCard';
import PageMainPostCard from '../src/pages/PagePostCards/MainPostCardBlock';
import PageTitle from './pages/PageTitle/BlockTitle';
import PageSignUp from './pages/PageSignUp/BlockSignUp';
import PageRegConfirm from './pages/PageRegConfirm/BlockRegConfirm';
import PageSignIn from './pages/PageSignIn/BlockSignIn';
import PageSuccess from './pages/PageSuccess/BlockSuccess';
import PageSearchResults from './pages/PageSearchResults/PageSearchResults';
import BlockContentPage from './pages/PageContentBlock/BlockContentPage';
import PageLinkResetPassword from './pages/PageLinkResetPassword/RageLinkResetPassword';
import PageRecetPassword from './pages/PageResetPassword/PageResetPassword';
import PageNewPassword from './pages/PageNewPassword/PageNewPassword';
import PageFavoritePosts from './pages/PageFavoritePosts/PageFavoritePosts';
import ThemeContext from './providers/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchData } from '../src/slice/postSlice';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ErrorPage from './pages/ErrorPage/ErrorPage';

export default function App() {
  //посты с api
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  
  return (
    <>
    <Menu></Menu>
      <ThemeContext>
        <BrowserRouter>
          <Header></Header>
      
  
          

          <Routes>
            <Route path='/' element={<PageMainPostCard />}></Route>
            <Route path='/:id' element={<BlockContentPage />}></Route>
            <Route path='/search' element={<PageSearchResults />}></Route>
            <Route path='/regconfirm' element={<PageRegConfirm />}></Route>
            <Route path='/signup' element={<PageSignUp />}></Route>
            <Route path='/signin' element={<PageSignIn />}></Route>
            <Route path='/title' element={<PageTitle />}></Route>
            <Route path='/success' element={<PageSuccess />}></Route>
            <Route path='/confirmation' element={<PageRegConfirm />}></Route>
            <Route path='/favoriteposts' element={<PageFavoritePosts />}></Route>
            <Route path='/errorpage' element={<ErrorPage />}></Route>
          </Routes>
          {/* <PageRecetPassword></PageRecetPassword>
          <PageLinkResetPassword></PageLinkResetPassword>
          <PageNewPassword></PageNewPassword> */}
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </ThemeContext>
    </>
  );
}


