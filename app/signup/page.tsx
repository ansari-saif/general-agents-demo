import Footer from "../components/Footer";
import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Signup />
      </main>
      <Footer />
    </div>
  );
}
