import React from 'react';
import PDF from '../../src/Assets/Resume.pdf'

function Resume() {
  return (
    <div classname="column">
    <img src= "https://www.goodfreephotos.com/cache/vector-images/office-document-vector-clipart.png" alt="Resume" style={{ width: 100, height: 100 }}/>
    <a
      href={PDF}
      download
    >
      Click to download
    </a>
  </div>
  );
}

export default Resume;