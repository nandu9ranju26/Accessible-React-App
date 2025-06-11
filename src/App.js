import React, { useState } from 'react';
import Modal from './components/Modal';

import { teamMembers } from './data';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>Accessible React App</h1>
      <h2>Team Members</h2>
      <ul>
        {teamMembers?.map((member) => (
          <li key={member.name}>
            <strong>{member.name}</strong> – {member.role}
          </li>
        ))}
      </ul>

      <button onClick={() => setIsModalOpen(true)}>
        Show Accessibility Info
      </button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default App;
