import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components';

import getOffsetTop from '../../modules/getOffsetTop';


const rate = 3;

const Container = styled.div`
  height: 200vh;
  position: relative;
`;

const animTagline = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  15% {
    opacity: 0;
  }

  50% {
    transform: translateX(0px);
    opacity: 1;
  }


  85% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateX(-50px);
  }
`;

const TitleBox = styled.div`
  text-align: center;
  color: white;
  
  font-weigth: normal;
  font-size: 5vw; 
  pointer-events: none;

  h2 {
    animation: ${animTagline} ${rate}s linear;
    opacity: 0;
    font-size: .25em;
    margin: 0;
    font-family: monospace;
  }
  h1 {
    margin: 0;
    font-family: var(--font-header);
  }
`;

const TitleSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  max-width 500px;
  text-align: center;
  margin: 0 auto;
  transition: opacity .6s;
  pointer-events: none;
  opacity: ${props=>( (props.y<props.scrollY+(window.innerHeight*.5) && props.y>props.scrollY-(window.innerHeight*.5))? '1' : '0')};
  p {
    margin: 24px 0;
    font-family: monospace;
    font-size: 1.2em;
  }
  h2 {
    font-family: var(--font-header);
  }
`;

const tagline = [
  'game designer',
  'full-stack engineer',
  'visual designer',
  'SQL apprentice',
  'RESTful practitioner',
  'Kontakt maker',
  'late-night coder',
  'CSS3 aficionado',
  'jQuery curious',
  'React developer',
  'Node.js enthusiast',
  'GML master',
  'GLSL dabbler',

  'orchestral composer',
  'sound designer',
  'clarinetist',
  'pianist',

  'pixel artist',
  'animator',
];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(tagline);
tagline.unshift('web developer');

export default function Landing() {

  const [taglineStep, setTaglineStep] = useState(0);
  const [mount, setMount] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [aboutY, setAboutY] = useState(getOffsetTop('about'))

  useEffect(()=>{
    if (!mount) {
      setMount(true);
      window.addEventListener('scroll',handleScroll,true);
      setAboutY(getOffsetTop('about'));
    }
    
    setTimeout(()=>{
      setTaglineStep(taglineStep+1);
    },rate*1010);

    
    

  },[taglineStep, mount, scrollY]);

  function handleScroll() {
    setScrollY(window.scrollY);
  }

  return (
    <Container>
      
      
        <TitleSection id="home">
          <TitleBox>
            <h1><span>Luke</span> <span className="highlight">Peña</span></h1>
            <h2 key={taglineStep}>{tagline[taglineStep % (tagline.length)]}</h2>
          </TitleBox>
        </TitleSection>
        <AboutSection id="about" scrollY={scrollY} y={aboutY}>
          <h2 className="highlight">Nice to meet you.</h2>
          <p>I love making things and I can't seem figure out how to stop.</p>
          <p>Since I first started creating video games over fifteen years ago, I've coded everything from instrument interfaces in Kontakt to RESTful APIs.</p>
          <p>I think the internet could always use more fun, helpful, (sometimes beautiful) things.</p>
          <p>So I'm doing my best to be a part of that, one line of code at a time.</p>
        </AboutSection>
    </Container>
  )

}