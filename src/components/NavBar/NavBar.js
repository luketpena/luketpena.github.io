import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  position: fixed;
  width: 100vw;
  height: 48px;
  z-index: 10;
  display: flex;
  transition: all .3s;
  background-color: ${props=>(props.scrollY>((window.innerHeight*2)-48)? 'rgba(0,0,0,.8)' : '')};
  backdrop-filter: ${props=>(props.scrollY>((window.innerHeight*2)-48)? 'blur(4px)' : 'blur(0px)')};;
`;

const MenuItem = styled.a`
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
`;

const menuList = [
  {name: 'hello.', href: "#top"},
  {name: `i am luke.`, href: '#about'},
  {name: `i make stuff.`, href: '#gallery'},
  {name: 'say hi.', href: "#contact"}
];

export default function NavBar() {

  let [scrollY, setScrollY] = useState(0);
  const [mount, setMount] = useState(false);

  useEffect(()=>{
    if (!mount) {
      setMount(true);
      window.addEventListener('scroll',handleScroll,true);
    }
  },[scrollY, mount]);

  function handleScroll() {
    setScrollY(window.scrollY);
  }

  function renderMenuItems() {
    return menuList.map( (item,i)=>{
      return (
        <MenuItem key={i} href={item.href}>
          <p>{item.name}</p>
        </MenuItem>
      )
    });
  }

  return (
    <Container scrollY={scrollY}>
      {renderMenuItems()}
    </Container>
  )
}