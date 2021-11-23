import { store } from './redux/store';
import { Provider } from 'react-redux';
import { CountriesList } from './Screens/Countries/Countries';
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <CountriesList />
        </div>
    </Provider>
  );
}

export default App;
