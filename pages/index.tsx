/**
 * @template PageComponent
 */

import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function IndexPage() {
  const codeString = `
  Example 2: Generate random number between two numbers
  // generating random number in range [x, y)
  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // random number in range 5(inclusive) and 10(exclusive)
  var random_num = getRandomNum(5, 10);
  console.log(random_num);
  
  // random number in range 0(inclusive) and 100(exclusive)
  var random_num = getRandomNum(0, 100);
  console.log(random_num);`;
  return (
    <div>
      <SyntaxHighlighter language="python" style={docco} error={false}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
