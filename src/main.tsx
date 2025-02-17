// src/main.tsx
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // 전역 스타일

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);