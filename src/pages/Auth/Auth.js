import React, {useState} from 'react';
import {Container} from 'semantic-ui-react';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './Auth.scss';


export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <Container fluid className='auth'>
      <div className='container-form'>
        {showLogin ? (
          <LoginForm

          />
          ) : (
          <RegisterForm
            setShowLogin={setShowLogin}
          />
        )}
      </div>

      <div className='change-form'>
        <p>
          {showLogin ? (
            <>
              ¿No tienes Cuenta?
              <span onClick={() => setShowLogin(!showLogin)}> Registrate</span>
            </>
          ) : (
            <>
              Entra con tu Cuenta!
              <span onClick={() => setShowLogin(!showLogin)}> Iniciar Sesion</span>
            </>
          )}
        </p>
      </div>
      </Container>
    </>
  )
}
