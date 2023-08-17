import './App.css';
import w from './app/Wrapper.module.scss'
import m from './app/Main.module.scss'
import c from './app/Container.module.scss'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <div className={App}>
      <div className={w.wrapper}>
        <Header />
        <main className={m.main}>
          <div className={c.container}>
            <div>Container</div>
          </div>
        </main>
        <Footer />
      </div>
    </div >
  );
}

export default App;