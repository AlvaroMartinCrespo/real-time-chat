import { supabaseClient } from '../supabase/client';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Message({ message, sent, id }) {
  const [user, setUser] = useState('');
  useEffect(() => {
    const user = async () => {
      const { data: user } = await supabaseClient.from('user').select('*').eq('id', id);
      setUser(user[0]);
    };
    user();
  }, []);

  return (
    <section className="">
      <div
        className={`inline-block rounded-lg p-2  ${
          sent ? 'bg-green-400 text-white float-right' : 'bg-gray-300 text-gray-700 float-left'
        }`}
      >
        {user ? (
          <>
            <span className="text-[0.7rem] font-bold">{user.name.toUpperCase()}</span>
          </>
        ) : (
          <></>
        )}
        <p>{message}</p>
      </div>
    </section>
  );
}
