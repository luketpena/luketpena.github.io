import React from 'react';
import styled from 'styled-components';
import './App.css';

import {Parallax} from 'react-parallax';

//-----< Component Imports >-----\\
import NavBar from '../NavBar/NavBar';
import Landing from '../Landing/Landing';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';


const Container = styled.div`
  position: relative;
  background: rgb(25,29,50);
  background: linear-gradient(180deg, rgba(25,29,50,1) 0%, rgba(13,6,12,1) 100%);
`;

export default function App() {
  
  return (
    <Container>
      <Parallax
        bgImage={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjMTkxRDMyMDAiPjwvcmVjdD4KPHBhdGggZD0iTTI4IDY2TDAgNTBMMCAxNkwyOCAwTDU2IDE2TDU2IDUwTDI4IDY2TDI4IDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzAzQzUxIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KPHBhdGggZD0iTTI4IDBMMjggMzRMMCA1MEwwIDg0TDI4IDEwMEw1NiA4NEw1NiA1MEwyOCAzNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjgyRjQ0IiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KPC9zdmc+"}
        bgImageAlt="cubed"
        bgImageSizes="8px"
        strength={2000}
      >
        <NavBar />

        <Landing/>

        <Gallery/>
        
        <Contact />
      </Parallax>
    </Container>
  );
}