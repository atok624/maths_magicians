import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/homePage';
import MyCalc from './routes/calculatorPage';
import Quote from './routes/quotesPage';
import NotMatch from './routes/notFound';
import Layout from './components/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="calculator" element={<MyCalc />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
