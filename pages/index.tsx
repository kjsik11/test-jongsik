/**
 * @template PageComponent
 */

import { Button } from '@components/ui';
import { fetcher } from '@lib/fetcher';
import React, { useState } from 'react';

export default function IndexPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birth, setBirth] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="pt-8 mx-auto max-w-3xl">
      <div className="flex space-x-2 items-center">
        <label>username</label>
        <input
          className="border-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex space-x-2 items-center">
        <label>password</label>
        <input
          className="border-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex space-x-2 items-center">
        <label>name</label>
        <input className="border-4" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="flex space-x-2 items-center">
        <label>birth</label>
        <input className="border-4" value={birth} onChange={(e) => setBirth(e.target.value)} />
      </div>
      <Button
        onClick={async () => {
          try {
            const response = await fetcher('https://backend-js.jongsik.site/api/auth', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, birth, name, password }),
            }).then((res) => console.log(res));
          } catch (err) {
            console.log('fetcherror', err.message);
          }
        }}
      >
        submit
      </Button>
      <div className="flex space-x-2 items-center">
        <label>username</label>
        <input
          className="border-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex space-x-2 items-center">
        <label>password</label>
        <input
          className="border-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        onClick={async () => {
          try {
            await fetcher('https://backend-js.jongsik.site/api/auth/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
            }).then((res) => console.log(res));
          } catch (err) {
            console.log('fetcherror', err.message);
          }
        }}
      >
        submit
      </Button>
      <Button
        onClick={async () => {
          try {
            await fetcher('https://backend-js.jongsik.site/api/auth/user').then((res) =>
              console.log(res),
            );
          } catch (err) {
            console.log('fetcherror', err.message);
          }
        }}
      >
        get
      </Button>
    </div>
  );
}
