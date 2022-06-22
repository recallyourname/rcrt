import { makeObservable, observable, action } from "mobx"
// import toggleTodo from "../actions/toggleTodo"
import ITodo from "../types/ITodo";


class Todo implements ITodo {
    id : number;
    title: string;
    finished: boolean;

    constructor(id: number, title: string, finished: boolean) {
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action
        })
        this.title = title
        this.id = id
        this.finished = finished
    }

    toggle() {
        this.finished = !this.finished
    }
}