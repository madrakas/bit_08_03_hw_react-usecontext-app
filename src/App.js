import './App.css';
import { ContextWrapper } from './components/context/GlobalContext';
import { CustomRouter } from './components/router/CustomRouter';




function App() {
    return (
    <ContextWrapper>
      <CustomRouter />
    </ContextWrapper>
  );
}

export default App;
