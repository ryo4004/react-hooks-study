import React, { useEffect } from 'react';

const Child = ({props, parent}) => {
  const data = 'sample';
  useEffect(() => {
    console.log('[' + parent + ' Child] useEffect');
    props(data);
  }, [props, parent]);
  console.log('[' + parent + ' Child] render');
  return <div>Child Component: {props(data)}</div>;
};

export default Child;