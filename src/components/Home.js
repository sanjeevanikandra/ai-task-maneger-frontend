import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/task/new');
  };

  return (
    <div>
      <h3 className='text-center'>Organize, Track, and Achieve with Ease</h3>
      <div className='container'>
        <p>
          "Manage your tasks smarter, not harder. This app leverages AI to help
          you create, organize, and prioritize your tasks, making sure nothing
          slips through the cracks. Click 'Start' to experience the future of
          task management."
        </p>
      </div>
      <div className='container'>
        <button className='btn btn-primary' onClick={handleClick}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Home;
