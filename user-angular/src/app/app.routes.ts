import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
        
    },
    {
        path: "cadastro",
        component: UserFormComponent
        
    }
];
