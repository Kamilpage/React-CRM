import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { KanbanProvider } from './pages/Display/Kanban/Kanban/KanbanContext.jsx';
import {UserProvider} from "./pages/FixedComponents/SearchBar/UserContext.jsx";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <UserProvider>
                <KanbanProvider>
                    <App />
                </KanbanProvider>
            </UserProvider>
        </Provider>
    </BrowserRouter>
);
