/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import style from './btn__default.module.scss';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  variant: 'dark' | 'light';
}
const ButtonDefault = (props: Props) => {
  const { className, variant, children, ...otherProps } = props;
  const buttonKindStyle =
    variant === 'dark' ? style.btn__dark : style.btn__light;
  return (
    <button
      className={[style.btn, buttonKindStyle, className].join(' ')}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default ButtonDefault;
