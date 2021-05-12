import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import store from './store';
import { Home, CreatePost, Detail } from "./Containerr";
import history from './history';
function App() {
  return (
    <div >
      <Router history={history}>
        <Provider store={store}>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <Header />
            <div className='flex-row justify-center grow1'>

              <div style={{ flex: 1, maxWidth: "1300px", }}>

                <Switch>
                  <Route path='/createPost' component={CreatePost} />
                  <Route path='/details/:id' component={Detail} />
                  <Route path='/update/:id' key='1' component={CreatePost} />
                  <Route path='/' component={Home} />
                </Switch>

              </div>
            </div>
            <Footer />

          </div>

        </Provider>
      </Router>
    </div>
  );
}

export default App;
