import './App.css';
import c from './App/Container.module.scss'
import w from './App/Wrapper.module.scss'
import m from './App/Main.module.scss'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className={w.wrapper}>
        <Header />
        <main className={m.main}>
          <div className={c.container}>
            Container
          </div>
        </main>
        <Footer />
      </div>
    </div >
  );
}

export default App;