export default function Message({ message, sent, name }) {
  return (
    <div
      className={`inline-block rounded-lg p-2 ${
        sent ? 'bg-green-400 text-white float-right' : 'bg-gray-300 text-gray-700 float-left'
      }`}
    >
      <span className="text-[0.7rem] font-bold">{name.toUpperCase()}</span>
      <p>{message}</p>
    </div>
  );
}
