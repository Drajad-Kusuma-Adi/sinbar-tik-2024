import Auth from "./pages/Auth";
import Router from "./Router";

export default function App() {
  return (
    <>
      {/* <Router /> */}
      {localStorage.getItem('userData') ? <Router /> : <Auth />}
    </>
  )
}