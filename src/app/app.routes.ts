import { Routes } from '@angular/router';
// import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // { path: '', component: AppComponent }, // Default route showing double code

    { path: "about", component: AboutComponent },
    {
        path: "main",
        loadComponent: () =>
            import("./components/main/main.component").then(m =>
                m.MainComponent
            )
        // component: MainComponent 
    }
];
