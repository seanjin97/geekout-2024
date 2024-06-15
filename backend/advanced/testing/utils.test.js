require("jest");
const fs = require("fs");
const { readExistingTodos, getSpecificTodo, saveTodos } = require("./utils");

jest.mock("fs");

describe("readExistingTodos", () => {
  it("should read and parse the existing todos from the file", () => {
    const mockTodos = [
      { id: 1, text: "Todo 1" },
      { id: 2, text: "Todo 2" },
    ];
    fs.readFileSync.mockReturnValue(JSON.stringify(mockTodos));

    const todos = readExistingTodos();

    expect(fs.readFileSync).toHaveBeenCalledWith("./todos.json", "utf-8");
    expect(todos).toEqual(mockTodos);
  });
});

describe("getSpecificTodo", () => {
  it("should return the todo with the specified id", () => {
    const mockTodos = [
      { id: 1, text: "Todo 1" },
      { id: 2, text: "Todo 2" },
      { id: 3, text: "Todo 3" },
    ];
    fs.readFileSync.mockReturnValue(JSON.stringify(mockTodos));

    const todo = getSpecificTodo(2);

    expect(fs.readFileSync).toHaveBeenCalledWith("./todos.json", "utf-8");
    expect(todo).toEqual({ id: 2, text: "Todo 2" });
  });

  it("should return undefined if the todo with the specified id is not found", () => {
    const mockTodos = [
      { id: 1, text: "Todo 1" },
      { id: 2, text: "Todo 2" },
    ];
    fs.readFileSync.mockReturnValue(JSON.stringify(mockTodos));

    const todo = getSpecificTodo(3);

    expect(fs.readFileSync).toHaveBeenCalledWith("./todos.json", "utf-8");
    expect(todo).toBeUndefined();
  });
});

describe("saveTodos", () => {
  it("should save the todos to the file", () => {
    const mockTodos = [
      { id: 1, text: "Todo 1" },
      { id: 2, text: "Todo 2" },
    ];

    saveTodos(mockTodos);

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "todos.json",
      JSON.stringify(mockTodos)
    );
  });
});
