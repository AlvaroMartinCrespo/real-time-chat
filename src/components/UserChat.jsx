import logo from '../../public/img/logo.svg';
import Message from './Message';
import { supabaseClient } from '../supabase/client';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function UserChat({ user }) {
  const [counterMessages, setCounterMessages] = useState(0);
  const messagesEndRef = useRef(null);
  // Mensajes
  const [listMessages, setListMessages] = useState('');

  useEffect(() => {
    const messages = async () => {
      const { data: messages } = await supabaseClient.from('messages').select('*');
      setListMessages(messages);
    };
    messages();
  }, [counterMessages]);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [listMessages]);

  // Datos del usuario
  const { name } = user;
  const { id } = user;

  // Mensaje
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    if (message === '') return;
    e.target.message.value = '';
    const { error } = await supabaseClient.from('messages').insert({
      id_user: id,
      message: message,
    });
    setCounterMessages(counterMessages + 1);
    if (error) throw error;
  };

  return (
    <>
      <section className="mx-5 py-5 flex flex-col">
        <div className=" flex justify-center">
          <img className="w-48 m-0 p-0" src={logo} alt="logo_chat" />
        </div>
        {/* Chat */}
        <div className="bg-slate-200 grid rounded-xl my-5 mx-4 shadow-md h-[calc(100vh-200px)] overflow-y-auto p-3 gap-3">
          {listMessages ? (
            listMessages.map((message) => {
              return (
                <Message
                  key={message.id}
                  message={message.message}
                  sent={message.id_user === id}
                  id={message.id_user}
                />
              );
            })
          ) : (
            <> </>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex justify-center gap-3">
              <input className="p-2 outline-none rounded-lg w-60" name="message" type="text" />
              <button className="p-2 bg-blue-500 text-white rounded-lg" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
