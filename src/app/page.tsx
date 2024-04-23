import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Main } from "./component/Main";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
