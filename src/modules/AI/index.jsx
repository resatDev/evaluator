import React, { useState } from 'react';
import Input from '../../components/Input';

const AI = () => {
  const [text, setText] = useState('');

  return (
    <>
      <Input value={text} setText={e => setText(e.target.value)} />
      <button type='button'>Evaluate</button>
    </>
  );
};

export default AI;