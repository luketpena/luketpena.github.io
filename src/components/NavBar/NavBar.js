import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";
import getOffsetTop from '../../modules/getOffsetTop';

const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 48px;
  z-index: 100;
  display: flex;
  transition: all .3s;
  background-color: ${props=>(props.scrollY>props.fadePos? 'rgba(0,0,0,.8)' : '')};
  backdrop-filter: ${props=>(props.scrollY>props.fadePos? 'blur(4px)' : 'blur(0px)')};
  .menu-item {
    text-decoration: none;
    opacity: .6;
    color: white;
    padding: 0 8px;
    transition: opacity .3s;
    font-family: monospace;
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }

`;


const menuList = [
  {name: 'hello.', href: "home"},
  {name: `i am luke.`, href: 'about'},
  {name: `i believe things.`, href: 'principles'},
  {name: `i make stuff.`, href: 'gallery'},
  
]; //{name: 'say hi.', href: "contact"}

export default function NavBar() {

  let [scrollY, setScrollY] = useState(0);
  const [mount, setMount] = useState(false);
  const [galleryPos, setGalleryPos] = useState(0);

  useEffect(()=>{
    if (!mount) {
      setMount(true);
      setGalleryPos(getOffsetTop('galleryBox'));
      window.addEventListener('scroll',handleScroll,true);
    }
  },[scrollY, mount]);

  function handleScroll() {
    setScrollY(window.scrollY);
  }

  function renderMenuItems() {
    return menuList.map( (item,i)=>{
      return (
          <Link
              key={i}
              className="menu-item"
              activeClass="active"
              to={item.href}
              spy={true}
              smooth={true}
              offset={-48}
              duration= {200}
          >
            {item.name}
          </Link>
          

      )
    });
  }

  return (
    <Container scrollY={scrollY} fadePos={galleryPos}>
      {renderMenuItems()}
    </Container>
  )
}