import React from 'react';
import UserNotFolloweds from './UserNotFollowed/UserNotFollowed';
import './Home.scss';


export default function Home() {

  return (
    <div className='home'>
        
        <h1>Bienvendi@ a Energy Masters!</h1>
        <section>
          <h2>Encuentra Profesores alrededor de todo el mundo!</h2>
          
          <h3>Que es Energy Masters?</h3>
          <article className='article'>
            <p>Energy Masters es una Red Social el cual puedes compartir, buscar y agregar Meditaciones. Todas las
            Meditaciones tienen sus beneficios pero te voy a compartir unos beneficios genericos de lo que aporta
            introducir la Meditacion en tu vida.
            Puedes comentar en cada articulo la experiencia de la meditacion, pudiendola agregar a favoritos, lo cual
            te permitira en un futuro ir a la pestaña favoritos para ver las que mas te gustan! Tambien puedes subir
            tu Meditacion con un simple Formulario.
            <span>Espero que te guste! Adelante!</span></p>
          </article>
          <h3>Para que meditar?</h3>
          <article className='article'>
            <p>La meditación puede producir un estado de relajamiento profundo y una mente tranquila. 
            Durante la meditación, concentras tu atención y eliminas el flujo de pensamientos confusos 
            que pueden estar llenando tu mente y provocándote estrés. 
            Este proceso puede resultar en un realce del bienestar físico y emocional.
            Hay numerosos estudios que demuestran que la práctica de la meditación mejora la atención, 
            concentración, creatividad y otros aspectos cognitivos del ser humano. Como he dicho 
            antes no hay nada divino o espiritual. Es una habilidad que se perfecciona con la práctica, 
            como cualquier otra.</p>
            <div>
            <h3>Los principales beneficios son:</h3>
              <ul>
                <li>Control de estres</li>
                <li>Reducir las emociones negativas</li>
                <li>Aumentar la imaginación y la creatividad</li>
                <li>Puedes lograr lo que tu deseas</li>
                <li>Aumentar la autoconciencia</li>
                <li>Enfocarse en el presente</li>
                <li>Aumentar la paciencia y la tolerancia</li>
                <li>Mejorar la calidad del sueño</li>
                <li>Y muchos mas...</li>
              </ul>
              <div>
                <UserNotFolloweds/>
              </div>
            </div>
            <h2>Comenta, agrega favoritos y comparte!</h2>
            <h2>Tambien puedes subir tu propia meditacion con un Formulario sencillo.</h2>
          </article>
        </section>
    </div>
  )
}
