import './App.css';
import { Modal } from '@rewind-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { supabaseClient } from './supabase/client';
import { useToast } from '@rewind-ui/core';
import UserChat from './components/UserChat';
function App() {
  const toast = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!logged) {
      setOpen(true);
    }
  }, [logged]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Obtener name del formulario
    const name = e.target.name.value;
    if (name === '' || name === 'undefined') {
      setLoading(false);
      toast.add({
        id: 'unique-id',
        closeOnClick: true,
        color: 'red',
        description: '',
        duration: 700,
        iconType: 'error',
        pauseOnHover: true,
        radius: 'lg',
        shadow: 'none',
        shadowColor: 'none',
        showProgress: true,
        title: 'Empty name!',
        tone: 'solid',
      });
      return;
    }
    // Insertamos el usuario en la base de datos.
    try {
      // Si el usuario ya existe
      const { data: user } = await supabaseClient.from('user').select('*').eq('name', name);
      if (user.length !== 0) {
        setUser(user[0]);
        setOpen(false);
        toast.add({
          id: 'unique-id',
          closeOnClick: true,
          color: 'green',
          description: '',
          duration: 700,
          iconType: 'success',
          pauseOnHover: true,
          radius: 'lg',
          shadow: 'none',
          shadowColor: 'none',
          showProgress: true,
          title: 'Bienvenido!',
          tone: 'solid',
        });
        setLogged(true);
        return;
      }
      setLoading(false);
      //Si el usuario no existe
      const { error } = await supabaseClient.from('user').insert({
        name: name,
      });
      if (error) {
        setLoading(false);
        throw error;
      }
      const { data: userExists } = await supabaseClient.from('user').select('*').eq('name', name);
      toast.add({
        id: 'unique-id',
        closeOnClick: true,
        color: 'green',
        description: '',
        duration: 700,
        iconType: 'success',
        pauseOnHover: true,
        radius: 'lg',
        shadow: 'none',
        shadowColor: 'none',
        showProgress: true,
        title: 'Bienvenido!',
        tone: 'solid',
      });
      setOpen(false);
      setUser(userExists[0]);
      setLogged(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
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
        {loading ? (
          <>Cargando ...</>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col my-10 gap-5 justify-center items-center" action="">
              <h1 className="text-2xl">Introduce un nombre</h1>
              <input className="p-4 outline-none border-2 rounded-lg" name="name" type="text" placeholder="Nombre" />
              <button className="p-3 bg-blue-500 text-white rounded-lg">Entrar</button>
            </form>
          </>
        )}
      </Modal>
      <main className="bg-slate-300">
        <section className=" container mx-auto min-h-screen">
          {logged ? (
            <>
              <UserChat user={user} />
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center items-center h-screen gap-4 p-5">
                <h1 className="text-3xl text-center">No has introducido ningún nombre.</h1>
                <button className="p-3 bg-blue-500 text-white rounded-lg" onClick={() => setOpen(true)}>
                  Login
                </button>
              </div>
            </>
          )}
          <div className=" grid grid-cols-1"></div>
        </section>
      </main>
    </>
  );
}

export default App;
