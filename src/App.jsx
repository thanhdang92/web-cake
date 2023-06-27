import './App.scss'
import Header from './Components/Header/Header'
import SectionProduct1 from './Components/MainContent/SectionProduct1';
import SectionProduct2 from './Components/MainContent/SectionProduct2';
import SectionProduct3 from './Components/MainContent/SectionProduct3';
import SectionProduct4 from './Components/MainContent/SectionProduct4';
import SectionProduct5 from './Components/MainContent/SectionProduct5';
function App() {
  return (
    <div className="web-cake-app">
      <Header />
      <SectionProduct1 />
      <SectionProduct2 />
      <SectionProduct3 />
      <SectionProduct4 />
      <SectionProduct5 />
    </div>
  );
}
export default App;
