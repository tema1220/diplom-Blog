import './App.css';
import Header from './components/Header/Header';
import Menu from './components/MenuNotAuthorized/Menu';
import PageMainPostCard from '../src/pages/PagePostCards/MainPostCardBlock';
import PageTitle from './pages/PageTitle/BlockTitle';
import PageSignUp from './pages/PageSignUp/BlockSignUp';
import PageRegConfirm from './pages/PageRegConfirm/BlockRegConfirm';
import PageSignIn from './pages/PageSignIn/BlockSignIn';
import PageSuccess from './pages/PageSuccess/BlockSuccess';
import PageSearchResults from './pages/PageSearchResults/PageSearchResults';
import BlockContentPage from './pages/PageContentBlock/BlockContentPage';
import PageFavoritePosts from './pages/PageFavoritePosts/PageFavoritePosts';
import ThemeContext from './providers/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchData } from '../src/slice/postSlice';
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import ErrorPage from './pages/ErrorPage/ErrorPage';

export default function App() {
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
              <Route path='/signup' element={<PageSignUp />}></Route>
              <Route path='/signin' element={<PageSignIn />}></Route>
              <Route path='/title' element={<PageTitle />}></Route>
              <Route path='/success' element={<PageSuccess />}></Route>
              <Route path='/confirmation' element={<PageRegConfirm />}></Route>
              <Route path='/favoriteposts' element={<PageFavoritePosts />}></Route>
              <Route path='/errorpage' element={<ErrorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext>
    </>
  );
}


