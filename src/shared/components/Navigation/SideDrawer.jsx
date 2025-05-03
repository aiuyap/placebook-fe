import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './SideDrawer.css';
import { CSSTransition } from 'react-transition-group';

function SideDrawer(props) {
  const nodeRef = useRef(null);
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <aside onClick={props.onClick} ref={nodeRef} className="side-drawer">
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer;
