import React from 'react';

import './index.scss';

export default () => {
  return (
    <ul className="bg-bubbles">{new Array(10).fill(0).map((i, idx) => <li key={idx} />)}</ul>
  )
}