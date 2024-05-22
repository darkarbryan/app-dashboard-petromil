import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from '@modules/garantias/components/overview/overview.component';

const routes: Routes = [
    {
        path: '',
        component: OverviewComponent
    },
    {
        path: '**',
        pathMatch: 'prefix',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GarantiasRoutingModule {}
