import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { hello } from '../modules/hello/hello';
import { inner } from '../data/data.json';


// CSS in JS
const H2 = styled.h2`
  color: red;
`;


// Component
function Inner() {
  // Hooks
  const [title, setTitle] = useState('内容が無いよう');
  const [text, setText] = useState('へんじがない、ただのしかばねのようだ。');

  useEffect(() => {
    hello();
  });

  // JSX
  return (
    <>
      {
        // inner.length >= 5 // test
        inner.length >= 1
          ? inner.map((inner, index) =>
            <section key={ index }>
              <H2>{ inner.title }</H2>
              <p dangerouslySetInnerHTML={{ __html: inner.text }}></p>
            </section>
          )
          : <section>
              <h2>{ title }</h2>
              <p>{ text }</p>
          </section>
      }
    </>
  );
}

export default Inner;
