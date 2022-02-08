import React, { useState } from 'react';

export default function GuestForm() {
  const [name, setName] = useState('');
  const [entry, setEntry] = useState('');

  return (
    <form>
      <div>
        <input placeholder="Enter Name" value={name} />
      </div>
      <div>
        <input placeholder="enter entry" value={entry} />
      </div>
      <div>
        <button>Submit Entry</button>
      </div>
    </form>
  );
}
