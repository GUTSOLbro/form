import React from 'react';
import style from './Button.module.scss';
let Button = React.memo(({ action, buttonStatus }) => {
  return (
    <>
      {buttonStatus ? (
        <button className={style.button}>{action}</button>
      ) : (
        <button className={style.button} style={{ opacity: 0.3 }} disabled>
          {action}
        </button>
      )}
    </>
  );
});

export default Button;
