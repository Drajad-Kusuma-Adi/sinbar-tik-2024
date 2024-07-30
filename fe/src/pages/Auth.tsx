// import { api } from "../utils/API";
import { useState } from 'react';

export default function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedUser, setLoggedUser] = useState(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // TODO:
    // fetch PUT {be url}/auth send username&password -> then((res) => {loggedUser = res})
    // localStorage.setItem('userData', loggedUser)

    const apiUrl = 'http://localhost:3000'; // replace with your API URL
    const userData = { username, password };

    fetch(apiUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoggedUser(data);
        localStorage.setItem('userData', JSON.stringify(data));
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div className="bg-[#64CCC5] w-screen h-screen flex justify-center items-center">

        {/* Box */}
        <div className="bg-white md:px-24 md:py-16 sm:px-16 sm:py-8 p-8 border-b-4 rounded-xl shadow-lg">

          <img src="Logo.svg" alt="logo" className="mx-auto mb-16" />

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <div className="border rounded-md mb-8 lg:w-[600px] md:w-[400px] flex">
                <img src="Person.svg" alt="person" className="inline p-2" width="35" />
                <input name="username" type="text" placeholder="Username" className="w-full" />
              </div>
              <div className="border rounded-md mb-8 lg:w-[600px] md:w-[400px] flex">
                <img src="Lock.svg" alt="lock" className="inline p-2" width="35" />
                <input name="password" type="password" placeholder="Password" className="w-full" />
              </div>
            </div>
            <button type="submit" className="button rounded-md w-full bg-[#04364A] text-white p-2">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}