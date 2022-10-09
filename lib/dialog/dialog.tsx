import {Icon} from '../index';
import React, { Fragment, ReactElement } from "react";
import './dialog.scss'
import { scopedClassMaker } from '../helper/classnames';
import ReactDOM from 'react-dom';

interface Props {
  buttons: Array<ReactElement>;
  children: JSX.Element;
  visible: boolean;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;

}

const scopedClass = scopedClassMaker('fui-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {

  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };

  const result = props.visible &&
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}>
      </div>
      <div className={sc('')}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>
          提示
        </header>
        <main className={sc('main')}>
          {props.children}
        </main>
        {props.buttons && props.buttons.length > 0 &&
        <footer className={sc('footer')}>
          {props.buttons && props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index})
          )}
        </footer>
        }
      </div>
    </Fragment>;
  return (
    ReactDOM.createPortal(result, document.body)
  );
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

export default Dialog;