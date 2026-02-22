import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import {TasksProvider} from './pages/features/tasks/context/TasksContext.jsx';
import {UserProvider} from "./app/context/UserContext.jsx";
import {ConfirmProvider} from "./shared/modals/ConfirmModal/ConfirmContext.jsx";
import {SearchProvider} from "./app/context/SearchContext.jsx";



createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <SearchProvider>
            <UserProvider>
                <TasksProvider>
                    <ConfirmProvider>
                        <App />
                    </ConfirmProvider>
                </TasksProvider>
            </UserProvider>
            </SearchProvider>
        </Provider>
    </BrowserRouter>
);
