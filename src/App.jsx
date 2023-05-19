import Banner from "./components/banner/Banner";
import Home from "./components/home/Home";

export default function App() {
  return (
    <div className="flex flex-col w-full bg-black overflow-hidden">
      <Banner></Banner>
      <Home></Home>
    </div>
  )
}
