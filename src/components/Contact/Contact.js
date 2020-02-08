import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  form {
    background-color: red;
    max-width: 500px;
    padding: 32px;
    box-sizing: border-box;
    margin: 0 auto;
    input {
      display: block;
      width: 90%;
      border: none;
      outline: none;
      margin: 0 auto;
    }
    button {
      display: block;
    }
    textarea {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 250px;
      border: none;
      outline: none;
    }
  }
`;

export default function Contact() {
  return (
    <Container>
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Subject" />
        <input type="email" placeholder="Email Address" />
        <textarea />
        <button>Submit</button>
      </form>
    </Container>
  )
}