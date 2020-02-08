import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { faGithubSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faHatWizard, faMountain, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import getOffsetTop from '../../modules/getOffsetTop';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity .6s;
  opacity: ${props=>( (props.y<props.scrollY+(window.innerHeight*.5) && props.y>props.scrollY-(window.innerHeight*.5))? '1' : '0')};
  .heading  {
    color: white;
    text-align: center;
    font-family: monospace;
    font-size: 1.5em;
  }
`;

const MainBox = styled.div`
  height: 60vh;
  width: 100%;
  display: grid;
  grid-template-areas: "cards" "links";
  grid-template-rows: 1fr auto;
`;

const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 48px 0;
`;

const Card = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin: 0 2%;
  .icon {
    font-size: 8em;
    color: white;
  }
  h4 {
    font-family: var(--font-title);
    color: white;
  }
  p {
    font-family: monospace;
    font-size: 1.5em;
  }
`;

const ButtonBox = styled.div`
  text-align: center;
`;

const Button = styled.a`
  font-size: 4em;
  margin: 8px;
  color: white;
  
  .icon { 
    opacity: .5;
    transition: all .2s;
    &:hover {
      opacity: 1;
      transform: scale(1.2);
    }
  }
  
`;

const contactData = [
  {icon: faGithubSquare, url: 'https://github.com/luketpena'},
  {icon: faLinkedin, url: 'https://www.linkedin.com/in/luke-pe%C3%B1a-669473122/'},
  {icon: faTwitterSquare, url: 'https://twitter.com/luketpena'}
];

const valueData = [
  {title: 'Creativity', icon: faHatWizard, text: 'From buttons and animations to API routes, everything can be improved with a little outside-the-box thinking.'},
  {title: 'Quality', icon: faMountain, text: 'No matter what I work on, I strive for three things in my code: consistency, reliability, and performance.'},
  {title: 'Personality', icon: faBook, text: 'One size never fits all, so I believe in crafting unique and fun experiences that tell the story best.'},
];

export default function Principles() {

  const [mount, setMount] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [y, setY] = useState(getOffsetTop('about'))

  useEffect(()=>{
    if (!mount) {
      setMount(true);
      window.addEventListener('scroll',handleScroll,true);
      setY(getOffsetTop('principles'));
    }
  },[mount, scrollY]);

  function handleScroll() {
    setScrollY(window.scrollY);
  }

  function renderButtons() {
    return contactData.map( (item,i)=>{
      return <Button key={i} href={item.url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={item.icon}/></Button>
    });
  }
  function renderCards() {
    return valueData.map( (item,i)=>{
      return (
        <Card key={i}>
          <FontAwesomeIcon icon={item.icon} className="icon"/>
          <h4>{item.title}</h4>
          <p className="highlight">{item.text}</p>
        </Card>
      )
    });
  }

  return (
    <Container id="principles" scrollY={scrollY} y={y}>
      <MainBox>
        <p className="heading">In everything I do, there are a few qualities I try to imbue into my work.</p>
        <CardBox>
          {renderCards()}
        </CardBox>
        <ButtonBox>
          {renderButtons()}
        </ButtonBox>
      </MainBox>
    </Container>
  )

}