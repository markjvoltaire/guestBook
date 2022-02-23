// import React, { useState } from 'react';

//we need local state to keep track of username & password
//we need a button that when we submit it will check if our username and password matches our env file
//if the user name and password is correct we want to set the user in context
// if they are the same we want to redirect them to the home component

export default function Login() {
  // const [userName, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // console.log(userName);
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          placeholder="username"
          type="text"
          onChange={() => {
            // setUsername();
          }}
        />
        <div />

        <div>
          <input placeholder="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
