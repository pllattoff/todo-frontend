import './App.css'
import TodoListPage from "./pages/TodoListPage.tsx";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<TodoListPage/>}/>
            </Routes>
        </>
    );
}

export default App
