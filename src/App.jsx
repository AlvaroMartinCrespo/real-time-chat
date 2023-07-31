import './App.css';
import { Modal } from '@rewind-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Modal
        overlayOpacity="75"
        position="center"
        radius="lg"
        shadow="xl"
        size="md"
        open={open}
        onClose={() => setOpen(false)}
      >
        <form onSubmit={handleSubmit} className="flex flex-col my-10 gap-5 justify-center items-center" action="">
          <input className="p-5 outline-none border-2 rounded-lg" type="email" placeholder="Email" />
          <input className="p-5 outline-none rounded-lg border-2" type="password" placeholder="Password" />
          <button className="p-3 bg-blue-500 text-white rounded-lg">Entrar</button>
        </form>
      </Modal>
      <section className="bg-slate-300 container mx-auto min-h-screen">
        <div className=" grid grid-cols-1"></div>
      </section>
    </>
  );
}

export default App;
