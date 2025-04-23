import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'products', component: ProductComponent },
    { path: 'users', component: UserComponent },
    { path: '**', redirectTo: '' },
   
  ];
