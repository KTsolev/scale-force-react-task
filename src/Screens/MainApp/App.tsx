import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { CountriesList } from '../Countries/Countries';
import './styles.scss';

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
