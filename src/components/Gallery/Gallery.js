import React, {useEffect} from 'react';
import styled from 'styled-components';
import { faCodepen, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

//-----< Component Imports >-----\\
import GalleryCard from './GalleryCard';

//-----< Image Imports >-----\\
import image_tictactoe from '../../images/portfolio_tictactoe.png';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const demoInfo = [
  {
    src: 'https://images.pexels.com/photos/3380967/pexels-photo-3380967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: <span>Pixelbox <span className="highlight">Creator</span></span>,
    tagline: <span>Bringing Pixels to <span className="highlight">Life.</span></span>,
    description: 'Bring new depth to your art with this parallax image visualizer.',
    url: 'https://github.com/luketpena/pixelbox-creator',
    button: 'View on GitHub',
    icon: faGithub
  },
  {
    src: 'https://images.pexels.com/photos/3552948/pexels-photo-3552948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: <span>The Green <span className="highlight">Neighbor</span> Project</span>,
    tagline: <span>Green Energy, made <span className="highlight">Accessible.</span></span>,
    description: 'A collaborative project to help find renewable energy near you.',
    url: 'https://github.com/luketpena/green-neighbor',
    button: 'View on GitHub',
    icon: faGithub
  },
  {
    src: 'https://images.pexels.com/photos/3576265/pexels-photo-3576265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
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
    src: 'https://images.pexels.com/photos/3522094/pexels-photo-3522094.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    title: <span>Guide to Anonymous & Arrow <span className="highlight">Functions</span></span>,
    tagline: <span>The <span className="highlight">Lineage</span> of Functions</span>,
    description: 'The relationships between types of functions, visualized.',
    url: 'https://luketpena.github.io/functions-explained/',
    button: 'Visit GitHub Page',
    icon: faGithub
  },
  {
    src: 'https://images.pexels.com/photos/3378994/pexels-photo-3378994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    title: <span>Washed <span className="highlight">Up</span></span>,
    tagline: <span><span className="highlight">Adventure</span> on the High Seas</span>,
    description: 'Collect gold, unlock upgrades, fire your cannons, and face the elements in this adventure for mobile and PC.',
    url: 'https://www.youtube.com/watch?v=2cedKXnKlFE',
    button: 'View trailer on YouTube',
    icon: faYoutube
  },
]

export default function Gallery() {

  function renderGallery() {
    return demoInfo.map( (item,i)=>{
      return <GalleryCard key={i} project={item}/>
    });
  }

  return (
    <Container>
      <div className="anchor" id="gallery"/>
      {renderGallery()}
    </Container>

  )
}