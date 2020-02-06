import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs(props=>({
  style: {
    backgroundPosition: `0 ${props.offset*.5}px`,
  },
}))`
  height: 200vh;
  box-shadow: inset 0 -150px 200px -96px rgba(255,127,0,.2);
  background-color: #0f0700;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='196' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23252100' fill-opacity='0.2' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const TitleBox = styled.div`
  text-align: center;
  color: white;
  font-family: var(--font-header);
  font-size: 5vw;
  font-weigth: normal;
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
  p {
    margin: 0;
  }
`;

const tagline = ['web developer','designer','game designer','composer','animator'];

export default function Landing() {

  const [taglineStep, setTaglineStep] = useState(0);
  const [mount, setMount] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(()=>{
    if (!mount) {
      setMount(true);
      window.addEventListener('scroll',handleScroll,true);
    }
    setTimeout(()=>{
      if (taglineStep===tagline.length-1) {
        setTaglineStep(0);
      } else {
        setTaglineStep(taglineStep+1);
      }
    },1000)
  },[taglineStep, mount]);

  function handleScroll() {
    setScrollY(window.scrollY);
  }

  // function getOffsetTop( elem ) {
  //   var offsetTop = 0;
  //   do {
  //     if ( !isNaN( elem.offsetTop ) )
  //     {
  //         offsetTop += elem.offsetTop;
  //     }
  //   } while( elem === elem.offsetTop );
  //   return offsetTop;
  // }

  return (
    <Container offset={scrollY}>
      <TitleSection>
        <TitleBox>
          <h1>Luke <span className="highlight">Peña</span></h1>
          {/* <h2>{tagline[taglineStep]}</h2> */}
        </TitleBox>
      </TitleSection>
      <div className="anchor" id="about"/>
      <AboutSection>
        <p></p>
        <p>This is what a second paragraph looks like.</p>
      </AboutSection>
    </Container>
  )

}