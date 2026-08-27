import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';
import { TodosComponent } from '@components/todos/todos.component';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  imports: [HeaderComponent, TodosComponent, FooterComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
