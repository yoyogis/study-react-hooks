import React, { useState } from 'react';

function Filter(aaa) {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  const mm=(
    <div>
      <p>You {aaa} clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );



  return{ count, mm};
}
export default Filter;