import "./App.css";
import Card from "./components/card";
import { Hero } from "./components/Hero";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <h1 class="text-blue-300 border-2 p-4">
        Learn to integrate css in react from tailwind
      </h1>

      <div className="flex justify-center gap-4">
        <Card
          title="Javascript"
          btnText="Enroll Now"
          imgUrl="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
        ></Card>
        <Card imgUrl="https://images.unsplash.com/photo-1587691592099-24045742c181?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXJsfGVufDB8fDB8fHww"></Card>
        <Card></Card>
      </div>
    </>
  );
}

export default App;
