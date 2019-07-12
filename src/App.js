import React from 'react';

function App() {

  const [email] = useInput('');
  const [password] = useInput('');

  return (
    <>
      <input {...email} />
    </>
  );
}

export default App;
