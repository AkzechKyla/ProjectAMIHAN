import MapComponent from './components/MapComponent'
import SidePanel from './components/SidePanel'

function App() {
//   const fetchAPI = async () => {
//     const response = await axios.get("http://127.0.0.1:8080/api/users");
//     console.log(response.data);
//   }
//
//   useEffect(() => {
//     fetchAPI();
//   }, []);

  return (
    <div className="h-screen w-screen flex">
      <SidePanel />
      <MapComponent />
    </div>
  )
}

export default App
