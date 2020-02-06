import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import './App.css';

//-----< Component Imports >-----\\
import NavBar from '../NavBar/NavBar';
import Landing from '../Landing/Landing';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';


const Marker = styled.div`
  background-color: orange;
  height: 200px;
  margin: 37px;
`;

const Container = styled.div`
  position: relative;
`;

export default function App() {

  let [mount, setMount] = useState(false);
  useEffect(()=>{
    if (!mount) {
      setMount(true);
      window.addEventListener('scroll',handleScroll,true);
    }
  },[mount])

  function handleScroll() {
    //console.log('I am scrolling!',window.scrollY);
  }

  function renderOffset(el) {
    const target = document.getElementById(el);
    if (target) {
      return getOffsetTop(target);
    }
    
  }

  function getOffsetTop( elem ) {
    var offsetTop = 0;
    do {
      if ( !isNaN( elem.offsetTop ) )
      {
          offsetTop += elem.offsetTop;
      }
    } while( elem === elem.offsetTop );
    return offsetTop;
  }
  
  return (
    <Container>
      <NavBar />
      
      <Landing />
      
      <Gallery id="gallery"/>
      

    </Container>
  );
}