import Link from "next/link";


import data from './api.json';

const YourComponent = () => {
  // Access data from the imported JSON file
  const users = data.users;

  return (
    <div>
      <h1>User Details:</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {users.map((users) => (
          <li key={users.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={users.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{users.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{users.email}</p>
                
            <Link className="text font-lightbold text-2xl cursor-pointer" href={`/Detail/${users.name}`}>Atmosoft</Link>
          
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{users.role}</p>
              {users.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time dateTime={users.lastSeenDateTime}>{users.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div>






        <h1>Detais of product</h1>
        <ul>
          <li>
            <Link className="text font-lightbold text-2xl cursor-pointer" href='/Detail/Atmosoft'>Atmosoft</Link>
          </li>
          <li>
            <Link className="text font-lightbold text-2xl cursor-pointer" href='/Detail/AtHob'>AtHob</Link>
          </li>
          <li>
            <Link className="text font-lightbold text-2xl cursor-pointer" href='/Detail/AtMart'>AtMart</Link>
          </li>
        </ul>
      </div>
    </div>


  );
};

export default YourComponent;

//<li key={user.id}></li>
