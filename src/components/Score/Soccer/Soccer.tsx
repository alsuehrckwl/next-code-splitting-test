import * as React from 'react';

const Soccer = ({ list }) => {
  return list.length > 0 ? (
    list.map((item, idx) => <div key={`soccer-item-${idx}`}>{item.id}</div>)
  ) : (
    <h1>empty data...</h1>
  );
};

export default Soccer;
