import Auth from "./pages/Auth";
import Router from "./Router";

export default function App() {
  return (
    <>
      {localStorage.getItem('userData') ? <Router /> : <Auth />}
    </>
  )
}