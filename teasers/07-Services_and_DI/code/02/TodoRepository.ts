export interface Todo {
    done: boolean;
    title: string;
}

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
