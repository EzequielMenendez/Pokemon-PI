import { Route, Routes, useLocation, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, restorePokemon } from "./redux/actions";
import axios from "axios";
import LandingPage from "./views/Landing-Page/Landing_page";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import './App.css';
import ErrorPage from "./views/ErrorPage/ErrorPage";

function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //Me suscribo a los estados que necesito
  const pokemons = useSelector((state)=> state.pokemons);
  const lastOrder = useSelector((state)=> state.lastOrder);
  const lastType = useSelector((state)=> state.lastType);
  const lastOrigin = useSelector((state)=> state.lastOrigin);
  const preName = useSelector((state)=> state.preName);
  const lastCreate = useSelector((state)=> state.lastCreate);
  const error = useSelector((state)=> state.error);

  //Creo estados locales para hacer el paginado
  const [ items, setItems ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);

  const elementsPage = 12;

  //cuando la pagina inicie carga a todos los pokemones y todos los tipos
  useEffect(()=>{
      dispatch(getPokemons("All"));
      dispatch(getTypes());
  },[]);

  //cada vez que aplico un filtro, un ordenamiento, una busqueda o creo un pokemon, actualizo las paginas
  useEffect(()=>{
    setItems([...pokemons].splice(0, elementsPage));
    setCurrentPage(0);
  }, [lastOrder, lastType, lastOrigin, preName, lastCreate]);

  //cada vez que creo un pokemon navego al detalle del mismo
  useEffect(()=>{
    if(lastCreate){
      navigate(`/detail/${lastCreate}`);
    };
  },[lastCreate]);

  //si hay un error lo muestro
  useEffect(()=>{
    if(error){
      navigate(`/*`);
    };
  },[error]);

  //logica para ir a la pagina anterior
  const prevHandler = ()=>{
    const prevPage = currentPage - 1;
    if(prevPage < 0)return;
    const firstIndex = prevPage	* elementsPage;
    setItems([...pokemons].splice(firstIndex, elementsPage));
    setCurrentPage(prevPage);
  };
  //logica para ir a la siguiente pagina
  const nextHandler = ()=>{
    const totalElements = pokemons.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * elementsPage;
    if(firstIndex >= totalElements)return;
    if(totalElements <= elementsPage)return;
    setItems([...pokemons].splice(firstIndex, elementsPage));
    setCurrentPage(nextPage);
  };

  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Header/>}
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        {/* Le paso a home la cantidad de paginas y las funciones para manipularlas */}
        <Route path="/home" element={<Home pokemons={items} prevHandler={prevHandler} nextHandler={nextHandler} currentPage={currentPage}/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/*" element={<ErrorPage />}/>
      </Routes>
      {location.pathname !== "/" && <Footer/>}
    </div>
  );
}

export default App;
