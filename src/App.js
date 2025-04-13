
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 space-y-6">
      <img src="https://avatars.githubusercontent.com/u/157082480?v=4" alt="Izumi" className="w-32 h-32 rounded-full shadow-lg" />
      <h1 className="text-3xl font-bold">Izumi Riyad</h1>
      <p className="text-center max-w-md">
        CyberSecurity Expert | Ethical Hacker | Pentester | Information Security | Networking
      </p>
      <div className="space-y-4 w-full max-w-xs">
        <a href="https://www.linkedin.com/in/zeroizumi/" className="block text-center bg-blue-600 py-2 rounded hover:bg-blue-700">LinkedIn</a>
        <a href="https://github.com/izumiriyad" className="block text-center bg-gray-800 py-2 rounded hover:bg-gray-700">GitHub</a>
        <a href="https://www.facebook.com/Xxx000r" className="block text-center bg-blue-800 py-2 rounded hover:bg-blue-900">Facebook</a>
        <a href="mailto:amiizumi007@gmail.com" className="block text-center bg-red-600 py-2 rounded hover:bg-red-700">Email</a>
        <a href="https://wa.me/8801700891234" className="block text-center bg-green-600 py-2 rounded hover:bg-green-700">WhatsApp</a>
      </div>
    </div>
  );
}

export default App;
