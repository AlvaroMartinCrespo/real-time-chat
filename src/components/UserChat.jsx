import logo from '../../public/img/logo.svg';
import Message from './Message';

export default function UserChat({ user }) {
  const { name } = user;
  const { id } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="mx-5 py-5 flex flex-col">
        <div className=" flex justify-center">
          <img className="w-48 m-0 p-0" src={logo} alt="logo_chat" />
        </div>
        {/* Chat */}
        <div className="bg-slate-200 rounded-xl my-5 mx-4 shadow-md h-[calc(100vh-200px)] overflow-y-auto p-3 flex flex-col gap-3">
          <Message message="Bienvenido" sent={false} name={name} />
          <Message message="Bienvenido" sent={true} name={name} />
          <Message message="Bienvenido" sent={false} name={name} />
          <Message message="Bienvenido" sent={true} name={name} />
          <Message message="Bienvenido" sent={false} name={name} />
          <Message message="Bienvenido" sent={true} name={name} />
          <Message message="Bienvenido" sent={false} name={name} />
          <Message message="Bienvenido" sent={true} name={name} />
          <Message message="Bienvenido" sent={false} name={name} />
          <Message message="Bienvenido" sent={true} name={name} />
          <Message message="Bienvenido" sent={false} name={name} />
          <Message message="Bienvenido" sent={true} name={name} />
          <Message message="Bienvenido" sent={false} name={name} />
          <Message message="Bienvenido" sent={true} name={name} />
        </div>
        {/*  */}
        <div>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex justify-center gap-3">
              <input className="p-2 outline-none rounded-lg w-60" name="name" type="text" />
              <button className="p-2 bg-blue-500 text-white rounded-lg" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
