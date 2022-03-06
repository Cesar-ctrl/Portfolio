import React from 'react';

const Inicio = () => {
  const css = `
  .card {
    width: 18rem;
  }
`
  
  return <main className='inicio main'>
    <section className="inicio introduccion">
      <h1 className='inicio h1'>Hello, my name is César Amado</h1>
      <p className='inicio p desc'>I'm a Web Development Student with strong HTML5, CSS, Bootstrap, JavaScript, React, Laravel, PHP, Flask, Python and SQL skills and eager
      to learn new technologies. Consider myself a full stack developer, have knowledge of both backend and frontend development, handling
      any part of the process with ease. Effective as a team player and able to work on his own, also adapt to new work situations and
      environment.</p>
    </section>
    
  <section className='inicio contenedor'>
    <section className='inicio section' >
      <style>css</style>
      <div className='inicio section contennido'>
        <h5 className='inicio h5'>Front-end Developer</h5>
        <p className='inicio p subt'>Description</p>
        <h6 className='inicio h6'>Languages I speak:</h6>
        <ul className='inicio ul'>
          <li className='inicio li'>HTML</li>
          <li className='inicio li'>CSS</li>
          <li className='inicio li'>JavaScript</li>
        </ul>
        <br/>
        <h6 className='inicio h6'>Dev Tools:</h6>
        <ul className='inicio ul'>
          <li className='inicio li'>Bootstrap</li>
          <li className='inicio li'>Sass</li>
          <li className='inicio li'>Parcel</li>
        </ul>
        
      </div>
    </section>

    <section className='inicio section' >
      <style>css</style>
      <div className='inicio section contennido'>
        <h5 className='inicio h5'>Back-end Developer</h5>
        <p className='inicio p subt'>Description</p>
        <h6 className='inicio h6'>Languages I speak:</h6>
        <ul className='inicio ul'>
          <li className='inicio li'>PHP</li>
          <li className='inicio li'>Python</li>
          <li className='inicio li'>Java</li>
          <li className='inicio li'>SQL</li>
        </ul>
        <br/>
        <h6 className='inicio h6'>Dev Tools:</h6>
        <ul className='inicio ul'>
          <li className='inicio li'>Laravel</li>
          <li className='inicio li'>Flask</li>
          <li className='inicio li'>Spring boot MVC</li>
        </ul>
        
      </div>
    </section>

  </section>
</main>;
};
export default Inicio;