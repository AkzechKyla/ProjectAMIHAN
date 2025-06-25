import MapComponent from './components/MapComponent'

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
    <div className="h-screen w-screen">
      <MapComponent />
    </div>
  )
}

export default App
