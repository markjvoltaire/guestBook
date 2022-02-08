import React, { useState } from 'react';

export default function GuestForm() {
  const [name, setName] = useState('');
  const [entry, setEntry] = useState('');

  return (
    <form>
      <div>
        <input placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <input placeholder="enter entry" value={entry} onChange={(e) => setEntry(e.target.value)} />
      </div>
      <div>
        <button>Submit Entry</button>
      </div>
    </form>
  );
}
