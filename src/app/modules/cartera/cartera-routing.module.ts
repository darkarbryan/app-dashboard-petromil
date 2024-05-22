import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from '@modules/cartera/components/overview/overview.component';

const routes: Routes = [
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'overview',
    },
    {
        path: '**',
        pathMatch: 'prefix',
        redirectTo: 'overview',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CarteraRoutingModule {}
