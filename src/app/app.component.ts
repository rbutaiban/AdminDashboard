import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductComponent } from "./product/product.component";
import { UserComponent } from "./user/user.component";
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, UserComponent, HttpClientModule, MainComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AdminDashboard';
}
