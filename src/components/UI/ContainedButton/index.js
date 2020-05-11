
import React, { lazy, Suspense } from 'react';

import './contained-button.css';

const LoadingSpinner = lazy(
  () => import(/* webpackPrefetch: true, webpackChunkName: 'loading-spinner' */ 'components/LoadingSpinner')
);

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
        <Suspense fallback=''>
          <LoadingSpinner
            width={2}
            height={2}
            borderWidth={.3}
            margin={0} />
        </Suspense>
      </>
    )}
  </button>
);

export default ContainedButton;
