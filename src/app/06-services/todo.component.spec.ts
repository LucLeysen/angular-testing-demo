import { expand } from 'rxjs/operators';
import * as assert from 'assert';
import { Observable } from 'rxjs/Observable';
import { TodoFormComponent } from '../04-forms/todo-form-component';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import 'rxjs/add/observable/from';

describe('TodosComponent', () => {
    let component: TodoComponent;
    let service: TodoService;

    beforeEach(() => {
        service = new TodoService(null);
        component = new TodoComponent(service);
    });

    it('should set todos property with the items returned from the server', () => {

        let todos = [1, 2, 3];
        spyOn(service, 'getTodos').and.callFake(() => {
            return Observable.from([todos]);
        });

        component.ngOnInit();

        expect(component.todos).toBe(todos);
    });
});
