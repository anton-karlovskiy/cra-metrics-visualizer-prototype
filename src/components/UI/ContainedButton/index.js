
import React from 'react';

import LoadingSpinner from 'components/LoadingSpinner'; // TODO: lazy loading
import './contained-button.css';

const ContainedButton = ({
  className,
  type,
  loading,
  disabled,
  ...rest
}) => (
  <button
    {...rest}
    disabled={disabled || loading}
    className={`contained-button ${className}`}
    type={type || 'button'}>
    Analyze
    {loading && (
      <>
        <>&nbsp;</>
        <LoadingSpinner
          width={2}
          height={2}
          borderWidth={.3}
          margin={0} />
      </>
    )}
  </button>
);

export default ContainedButton;
