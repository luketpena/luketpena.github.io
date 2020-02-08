import React, {useState} from 'react';
import styled from 'styled-components';
import fitty from 'fitty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Container = styled.div`
  height: 40vh;
  flex-grow: 8;
  min-width: 256px;
  position: relative;
  overflow: hidden;
  margin: 2px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all .5s;
    position: absolute;
  }
  &:first-child, &:nth-child(5n) {
    min-width: 50%;
    @media(max-width: 320px) {
      min-width: 100%;
    }
  }
  &:nth-child(3n) {
    flex-grow: 1;
  }
`;

const Overlay = styled.div`
  background-color: rgba(24,29,50,.6);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  transition: transform 2s, opacity .8s;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  
  &:hover {
    opacity: 1;
    transform: scale(1.05);
    backdrop-filter: blur(8px);
    filter: saturate(1);
  }
  &:hover ~ img {
    cursor: pointer;
    transform: ${props=>(props.active? 'scale(1.5)' : 'scale(1.2)')};
  }
`;

const TitleBox = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: top 1s;
  top: ${props=>(props.active? '-200' : '0')}%;

  &:hover {
    cursor: pointer;
  }

  h3 {
    font-family: 'Major Mono Display', monospace;
  }
`;

const DetailBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: top 1s;
  padding: 5%;
  box-sizing: border-box;
  top: ${props=>(props.active? '0' : '100')}%;
  text-align: center;

  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "title" "body" "button";
  justify-content: center;
  align-items: center;

  h4 {
    font-family: 'Major Mono Display', monospace;
    grid-area: title;
  }
  p {
    grid-area: body;
    font-family: monospace;
    font-size: 1.25em;
  }
  button {
    grid-area: button;
    color: white;
    outline: none;
    border: 1px solid white;
    border-radius: 8px;
    background: none;
    padding: 4px 8px;
    transition: color .2s, background .2s, padding .4s;
    font-size: 18px;

    display: block;
    margin: 0 auto;

    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
      padding: 4px 24px;
    }
  }
  a {
    text-decoration: none;
  }
  
`;

export default function GalleryCard(props) {

  let [active, setActive] = useState(false);
  let [myTimeout,setMyTimeout] = useState(null);


  function handleExit() {
    setActive(false);
  }

  function handleEnter() {
    fitty('h3');
    if (myTimeout) {
      clearTimeout(myTimeout);
      setMyTimeout(false);
    }
  }

  return (
    <Container src={props.project.src} onClick={()=>setActive(true)}>
      
      <Overlay active={active} onMouseEnter={handleEnter} onMouseLeave={()=>setMyTimeout(setTimeout(handleExit,750))}>
        <TitleBox active={active} >
          <h3>{props.project.title}</h3>
        </TitleBox>
        <DetailBox active={active} >
          <h4>{props.project.tagline}</h4>
          <p>{props.project.description}</p>
          <a target="_blank" rel="noopener noreferrer" href={props.project.url}><button><FontAwesomeIcon icon={props.project.icon} />  {props.project.button}</button></a>
        </DetailBox>
      </Overlay>
      <img src={props.project.src} alt={props.project.title}/>
    </Container>
  )

}