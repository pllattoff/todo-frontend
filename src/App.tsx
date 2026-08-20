import './App.css'
import TodoListPage from "./pages/TodoListPage.tsx";
import {Route, Routes} from "react-router-dom";
import TodoDetailPage from "./pages/TodoDetailPage.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<TodoListPage/>}/>
                <Route path="/todos/:id" element={<TodoDetailPage/>} />
            </Routes>
        </>
    );
}

export default App
