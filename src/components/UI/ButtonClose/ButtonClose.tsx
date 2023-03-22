/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import style from './btn_close.module.scss';

const ButtonClose = (props: React.ComponentPropsWithoutRef<'button'>) => {
  const { className, children, ...otherProps } = props;

  return (
    <button
      className={[style.btn_close, className].join(' ')}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default ButtonClose;
