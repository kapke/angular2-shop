import {InjectionToken} from "@angular/core";


export interface Todo {
    done: boolean;
    title: string;
}

//3/ It is very useful to make our type hints against interface(or general - abstraction) instead of implementation
export interface TodoRepository {
    getTodos(): Todo[];
}

export class InMemoryTodoRepository implements TodoRepository{
    public getTodos (): Todo[] {
        return [
            {title: 'my first todo', done: false},
            {title: 'my second todo', done: true}
        ];
    }
}

export const TodoRepositoryToken = new InjectionToken('TodoRepository');
