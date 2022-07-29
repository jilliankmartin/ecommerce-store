import React from 'react';
import ReactDOM from 'react-dom';

const mount = (element) => {
  ReactDOM.render(
    <h1>Discovery App</h1>, element
  )
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_discovery-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };