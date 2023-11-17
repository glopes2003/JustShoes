/* eslint-disable react/prop-types */
import { Modal, Button, Form } from 'react-bootstrap';

const LoginForm = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <div className='container_form'>
        <h1>JustShoes</h1>
        <p>Bem-Vindo(a)! Entre na sua conta!</p>

        <Form className='form-modal'>
          <label htmlFor="email"></label>
          <input type="email" placeholder="E-mail" id="email" />

          <label htmlFor="password"></label>
          <input type="password" placeholder="Senha" id="password" />
          <Button onClick={handleClose}> Entrar </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default LoginForm;
