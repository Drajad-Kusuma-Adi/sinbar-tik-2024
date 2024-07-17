export default function Auth() {
  return (
    <>
      <div className="bg-[#64CCC5] w-screen h-screen flex justify-center items-center">
        <div className="bg-white md:px-24 md:py-16 sm:px-16 sm:py-8 p-8 border-b-4 rounded-xl shadow-lg">
          <img src="Logo.svg" alt="logo" className="mx-auto mb-16" />
          <form action="">
            <div className="border rounded-md mb-8 lg:w-[600px] md:w-[400px] flex">
              <img src="Person.svg" alt="person" className="inline p-2" width="35" />
              <input type="text" placeholder="Username" className="w-full" />
            </div>
            <div className="border rounded-md mb-16 lg:w-[600px] md:w-[400px] flex">
              <img src="Lock.svg" alt="lock" className="inline p-2" width="35" />
              <input type="password" placeholder="Password" className="w-full" />
            </div>
            <button className="button rounded-md w-full bg-[#04364A] text-white p-2">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}