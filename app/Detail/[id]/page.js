// Assuming api.json contains user data
import data from '../api.json';

// Modify the function to fetch user data from the local JSON file
export async function generateStaticParams() {
  // Assuming data.users contains an array of user objects
  const users = data.users;

  // Return an array of parameters based on user data
  return users.map((user) => ({
    email: user.email, // Adjust this to the actual field containing email addresses
  }));
}

export default function Page({ params }) {
  const users = data.users;

  // Assuming params contains an object with an email property
  const user = users.find(user => user.email === params.email); // Adjust this to your actual user identification

  return (
    <div>
      <h1 className="text font-lightbold text-2xl p-2">
        Details of the user:
      </h1>
      {user ? (
        <div>
          <div>
            <img src={user.imageUrl} alt={user.name} className="w-24 h-24 rounded-full" />
          </div>
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <p>Last Seen: {user.lastSeen}</p>
          </div>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}
