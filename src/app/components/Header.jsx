export default function Header() {
  return (
    <div className="w-full h-12 fixed bg-gray-300 px-3 shadow-md flex justify-between items-center">
      <div>
        <a className='px-4 py-2 bg-gray-400 rounded-md text-gray-700 font-bold border-gray-400 border-2' href='/'>Logo</a>
      </div>
      <div className="text-gray-500 font-bold text-2xl">Mbye's Online</div>
      <div>
        <a className='px-4 py-2 bg-gray-400 rounded-md text-gray-700 font-bold border-gray-400 border-2' href='/checkout'>Cart</a>
      </div>
    </div>
  );
}
