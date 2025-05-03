import React, { useRef } from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import { CSSTransition } from 'react-transition-group';

function ModalOverlay(props) {
  const content = (
    <div
      className={`modal ${props.className}`}
      style={props.style}
      ref={props.nodeRef}
    >
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
}

function Modal(props) {
  const nodeRef = useRef(null);
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel}></Backdrop>}
      <CSSTransition
        in={props.show}
        mounOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
        nodeRef={nodeRef}
      >
        <ModalOverlay {...props} nodeRef={nodeRef} />
      </CSSTransition>
    </>
  );
}

export default Modal;
