import React from 'react';
import PDF from '../../src/Assets/Resume.pdf'

function Resume() {
  return (
    <div>
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