import React from 'react';
import style from './input.module.scss';
let Input = React.memo(
  ({
    name,
    InputActive,
    Error,
    value,
    setInputActive,
    setErrorMassege,
    changeInput,
    updateButtonStatus,
  }) => {
    return (
      <>
        <div className={style.messageError}>{InputActive && Error}</div>
        {InputActive ? (
          <div>
            <input
              className={style.input}
              autoFocus
              onBlur={(e) => {
                if (value == '') setInputActive(false);
              }}
              onChange={(event) => {
                setErrorMassege(event);
                changeInput(event);
                updateButtonStatus();
              }}
              type={name}
              name={name}
              value={value}
            />
          </div>
        ) : (
          <div
            className={style.input__hover}
            onClick={() => {
              setInputActive(true);
            }}>
            {name}
          </div>
        )}
      </>
    );
  },
);

export default Input;
