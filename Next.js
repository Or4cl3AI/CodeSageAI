import React from 'react';
import { useRouter } from 'next/router';

const NextApp = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/about');
  };

  return (
    <div>
      <h1>Welcome to CodeSageAI</h1>
      <p>A cloud-based AI code generator</p>
      <button onClick={handleButtonClick}>Go to About Page</button>
    </div>
  );
};

export default NextApp;