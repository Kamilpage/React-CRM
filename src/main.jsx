import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { KanbanProvider } from './pages/Display/Kanban/Kanban/KanbanContext.jsx';
import {UserProvider} from "./pages/FixedComponents/SearchBar/UserContext.jsx";
import {ConfirmProvider} from "./pages/Reusable/ConfirmModal/ConfirmContext.jsx";
import {SearchProvider} from "./pages/FixedComponents/SearchBar/SearchContext.jsx";



createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <SearchProvider>
            <UserProvider>
                <KanbanProvider>
                    <ConfirmProvider>
                        <App />
                    </ConfirmProvider>
                </KanbanProvider>
            </UserProvider>
            </SearchProvider>
        </Provider>
    </BrowserRouter>
);
