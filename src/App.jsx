import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import update1 from "./assets/edit.gif";
import update2 from "./assets/edit.png";
import delete1 from "./assets/delete.gif";
import delete2 from "./assets/delete.png";
import add1 from "./assets/add.gif";
import add2 from "./assets/add.png";
import updateTodo1 from "./assets/update.gif";
import updateTodo2 from "./assets/update.png";

function App() {
  const [Todo, setTodo] = React.useState("");
  const [Todos, setTodos] = React.useState([]);
  const [updateId, setupdateId] = React.useState(null);
  const [Finished, setFinished] = React.useState(true);
  const [isHovered1, setIsHovered1] = React.useState(false);
  const [isHovered2, setIsHovered2] = React.useState(false);
  const [isHovered3, setIsHovered3] = React.useState(false);
  const [isHovered4, setIsHovered4] = React.useState(false);

  const toggleFinished = (e) => {
    setFinished(!Finished);
  };
  React.useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    } else {
      setTodos([]);
    }
  }, []);

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(Todos));
  };

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAdd = () => {
    if (Todo.trim()) {
      if (updateId) {
        const updatedTodos = Todos.map((todo) =>
          todo.id === updateId ? { ...todo, text: Todo } : todo
        );
        setTodos(updatedTodos);
        setupdateId(null);
      } else {
        setTodos([
          ...Todos,
          { id: Date.now(), text: Todo, iscompleted: false },
        ]);
      }
      setTodo("");
    }
    saveToLS();
  };

  const handleupdate = (id) => {
    const todoToupdate = Todos.find((todo) => todo.id === id);
    if (todoToupdate) {
      setTodo(todoToupdate.text);
      setupdateId(id);
    }
    saveToLS();
  };

  const tickHandler = (id) => {
    const newTodos = Todos.map((todo) =>
      todo.id === id ? { ...todo, iscompleted: !todo.iscompleted } : todo
    );
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (id) => {
    const newTodos = Todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    saveToLS();
  };

  const handleMouseOver1 = () => {
    setIsHovered1(true);
  };
  const handleMouseOut1 = () => {
    setIsHovered1(false);
  };
  const handleMouseOver2 = () => {
    setIsHovered2(true);
  };
  const handleMouseOut2 = () => {
    setIsHovered2(false);
  };

  const handleMouseOver3 = () => {
    setIsHovered3(true);
  };
  const handleMouseOut3 = () => {
    setIsHovered3(false);
  };
  const handleMouseOver4 = () => {
    setIsHovered4(true);
  };
  const handleMouseOut4 = () => {
    setIsHovered4(false);
  };

  return (
    <div className="Container bg-purple-200 w-full h-screen">
      <Navbar />
      <div className="todoContainer w-full my-11 bg-purple-200 sm:bg-gray-100 rounded-lg xl:w-[38%] lg:w-[72%] md:w-[90%] m-auto min-h-[70vh] px-3 py-2 flex flex-col gap-2">
        <h1 className="text-center text-lg font-extrabold sm:text-2xl sm:font-semibold">
          iTask - Manage your task at one place
        </h1>
        <div className="addTodoContainer px-1 py-2 sm:p-5 flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-center underline">Add Todo</h1>
          <div className="addTodo flex justify-between">
            <input
              type="text"
              onChange={handleInputChange}
              className="input border border-black w-[320px] sm:w-[600px] h-[30px] sm:h-[40px] rounded-xl px-3 outline-none"
              placeholder="Add Todo"
              value={Todo}
            />
            <button
              onClick={handleAdd}
              className="w-[50px] sm:w-[60px] px-3 py-1 sm:px-4 border border-transparent rounded-xl mx-2 bg-violet-500 hover:bg-violet-400 text-slate-200 hover:text-white text-sm font-semibold h-[35px] sm:h-[40px]"
            >
              {updateId ? (
                <div
                  className="searchImageContainer w-full sm:w-[25px] place-items-center	"
                  onMouseOver={handleMouseOver3}
                  onMouseOut={handleMouseOut3}
                >
                  <img
                    className="w-[25px]"
                    src={isHovered3 ? updateTodo1 : updateTodo2}
                    alt="search"
                  />
                </div>
              ) : (
                <div
                  className="searchImageContainer w-full sm:w-[25px] place-items-center	"
                  onMouseOver={handleMouseOver4}
                  onMouseOut={handleMouseOut4}
                >
                  <img
                    className="w-[25px]"
                    src={isHovered4 ? add1 : add2}
                    alt="search"
                  />
                </div>
              )}
            </button>
          </div>
        </div>
        <div className="todoListContainer min-h-[60vh] py-5 flex flex-col gap-2 flex-grow">
          {Todos.length > 0 ? (
            <div className="showFinished mb-2">
              <input
                type="checkbox"
                checked={Finished}
                onChange={toggleFinished}
              />{" "}
              Show Finished
            </div>
          ) : (
            <div className="invisible">Show Finished</div>
          )}
          <div className="h-[1px] bg-black"></div>
          <h1 className="text-2xl font-bold text-center underline">
            Todo List
          </h1>
          {Todos.length === 0 && (
            <div className="w-full flex items-center justify-center min-h-[47vh] text-lg font-semibold">
              No Todos To Display
            </div>
          )}
          {Todos.map(
            (todo) =>
              (Finished || !todo.iscompleted) && (
                <div
                  key={todo.id}
                  className="Todo flex justify-between border-b border-b-black p-1 h-[40px] sm:h-[60px] items-center"
                >
                  <span className="checkBoxContainer w-[30px]">
                    <input
                      type="checkbox"
                      checked={todo.iscompleted}
                      className="checkbox"
                      onChange={() => tickHandler(todo.id)}
                    />
                  </span>
                  <div
                    className={`todoText h-full text-lg font-semibold overflow-y-none overflow-x-auto text-nowrap content-center w-full ${
                      todo.iscompleted ? "line-through" : ""
                    }`}
                  >
                    {todo.text}
                  </div>
                  <div className="updateDeletebtn flex gap-2">
                    <button
                      onClick={() => handleupdate(todo.id)}
                      className="rounded-xl px-4 py-1 bg-violet-500 hover:bg-violet-400 text-slate-200 hover:text-white text-sm font-semibold h-[40px] mb-2 sm:h-[35px]"
                    >
                      <div
                        className="searchImageContainer w-[25px]"
                        onMouseOver={handleMouseOver1}
                        onMouseOut={handleMouseOut1}
                      >
                        <img
                          className="w-[25px]"
                          src={isHovered1 ? update1 : update2}
                          alt="search"
                        />
                      </div>
                    </button>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="rounded-xl px-4 py-1 bg-violet-500 hover:bg-violet-400 text-slate-200 hover:text-white text-sm font-semibold h-[40px] mb-2 sm:h-[35px]"
                    >
                      <div
                        className="searchImageContainer w-[25px]"
                        onMouseOver={handleMouseOver2}
                        onMouseOut={handleMouseOut2}
                      >
                        <img
                          className="w-[25px]"
                          src={isHovered2 ? delete1 : delete2}
                          alt="search"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
