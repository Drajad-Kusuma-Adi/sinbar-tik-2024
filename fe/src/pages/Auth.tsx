// import { api } from "../utils/API";
import { useState } from 'react';

export default function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errmessage, setErrmessage] = useState(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // TODO:
    // fetch PUT {be url}/auth send username&password -> then((res) => {loggedUser = res})
    // localStorage.setItem('userData', loggedUser)

    const apiUrl = 'http://localhost:3000/auth';
    const userData = { username, password };

    fetch(apiUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.message == null) {
          localStorage.setItem('userData', JSON.stringify(data));
          location.reload();
        } else {
          setErrmessage(data.message);
        }
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
                <input name="username" type="text" placeholder="Username" className="w-full" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="border rounded-md mb-8 lg:w-[600px] md:w-[400px] flex">
                <img src="Lock.svg" alt="lock" className="inline p-2" width="35" />
                <input name="password" type="password" placeholder="Password" className="w-full" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </div>
            <button type="submit" className="button rounded-md w-full bg-[#04364A] text-white p-2">Submit</button>
          </form>
          <p className="rounded-md w-full p-2 bg-red-500 border-2 border-red-900 mt-2" style={errmessage == null ? {display: "none"} : {}}>{errmessage}</p>
        </div>
      </div>
    </>
  )
}