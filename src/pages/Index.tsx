import { MadeWithDyad } from "@/components/made-with-dyad";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <NavBar />
      <div className="text-center flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">
          Welcome to Your Blank App
        </h1>
        <p className="text-xl text-gray-600">
          Start building your amazing project here!
        </p>
      </div>
      <MadeWithDyad />
      <Footer />
    </div>
  );
};

export default Index;