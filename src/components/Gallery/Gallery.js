import React from 'react';
import styled from 'styled-components';
import { faCodepen, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

//-----< Component Imports >-----\\
import GalleryCard from './GalleryCard';

//-----< Image Imports >-----\\
import image_tictactoe from '../../images/portfolio_tictactoe.png';
import image_functions from '../../images/portfolio_functions.png';
import image_greenNeighbor from '../../images/portfolio_greenNeighbor.png';
import image_nfwine from '../../images/portfolio_nfwine.png';
import image_pixelbox from '../../images/portfolio_pixelbox.png';

const Container = styled.div`
  
  h2 {
    font-family: var(--font-header);
    color: white;
    text-align: center;
    font-size: 8em;
    pointer-events: none;
  }
  
  
`;

const GalleryBox = styled.div`
  background-color: rgba(25,29,50,1);
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 10;
  ::before {
    box-shadow: 0 -50px 300px 100px rgba(255,127,0,.2);
    mix-blend-mode: darken;
    content: " ";
  
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;

const demoInfo = [
  {
    src: image_pixelbox,
    title: <span>Pixelbox <span className="highlight">Creator</span></span>,
    tagline: <span>Bringing Pixels to <span className="highlight">Life.</span></span>,
    description: 'Bring new depth to your art with this parallax image visualizer.',
    url: 'https://github.com/luketpena/pixelbox-creator',
    button: 'View on GitHub',
    icon: faGithub
  },
  {
    src: image_greenNeighbor,
    title: <span>The Green <span className="highlight">Neighbor</span> Project</span>,
    tagline: <span>Green Energy, made <span className="highlight">Accessible.</span></span>,
    description: 'A collaborative project to help find renewable energy near you.',
    url: 'https://github.com/luketpena/green-neighbor',
    button: 'View on GitHub',
    icon: faGithub
  },
  {
    src: 'https://i.imgur.com/GQuVIfN.gif',
    title: <span>Washed <span className="highlight">Up</span></span>,
    tagline: <span><span className="highlight">Adventure</span> on the High Seas</span>,
    description: 'Collect gold, unlock upgrades, fire your cannons, and face the elements in this adventure for mobile and PC.',
    url: 'https://www.youtube.com/watch?v=2cedKXnKlFE',
    button: 'View trailer on YouTube',
    icon: faYoutube
  },
  {
    src: image_nfwine,
    title: <span>The New France <span className="highlight">Wine</span> Company</span>,
    tagline: <span>Fine <span className="highlight">Wine</span> in the Twin Cities</span>,
    description: 'A suite of management tools to complement a beautiful customer-facing website.',
    url: 'https://github.com/luketpena/nf-wine-company',
    button: 'View on GitHub',
    icon: faGithub
  },
  {
    src: image_tictactoe,
    title: <span><span className="highlight">Smart</span> Tic Tac Toe</span>,
    tagline: <span><span className="highlight">More</span> than Random</span>,
    description: 'Play against code that knows how to win.',
    url: 'https://codepen.io/luketpena/full/rPJgzO',
    button: 'View on CodePen',
    icon: faCodepen
  },
  {
    src: 'https://i.imgur.com/99bsh6m.gif',
    title: <span>Dawg of the <span className="highlight">Dead</span></span>,
    tagline: <span><span className="highlight">Survive</span> with a Friend</span>,
    description: `The zombies are coming, and only your dog can stop them. A solo game-jam project created under 48 hours.`,
    url: 'https://gm48.net/game/1066/dawg-of-the-dead',
    button: 'Download now from GM48',
    icon: faGamepad
  },
  {
    src: image_functions,
    title: <span>Guide to Anonymous & Arrow <span className="highlight">Functions</span></span>,
    tagline: <span>The <span className="highlight">Lineage</span> of Functions</span>,
    description: 'The relationships between types of functions, visualized.',
    url: 'https://luketpena.github.io/functions-explained/',
    button: 'Visit GitHub Page',
    icon: faGithub
  }
]
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(demoInfo)

export default function Gallery() {

  function renderGallery() {
    return demoInfo.map( (item,i)=>{
      return <GalleryCard key={i} project={item}/>
    });
  }

  return (
    <Container id="gallery">
      <h2><span className="highlight">P</span>rojects</h2>
      <GalleryBox id="galleryBox">
        {renderGallery()}
      </GalleryBox>
    </Container>

  )
}