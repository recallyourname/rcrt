import { makeObservable, observable, computed } from "mobx"
import ITodoList from "../types/ITodoList"
import ITodo from "../types/ITodo"

export default class TodoList implements ITodoList {
    todos : [ITodo]

    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }

    constructor(todos : [ITodo]) {
        makeObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed
        })
        this.todos = todos
    }
}