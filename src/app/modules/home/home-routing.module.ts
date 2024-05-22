import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from '@modules/home/components/overview/overview.component';

const routes: Routes = [
    {
        path: '',
        component: OverviewComponent
    },
    {
        path: 'inversiones',
        loadChildren: () => import('@modules/inversiones/inversiones.module').then(m => m.InversionesModule)
    },
    {
        path: 'cartera',
        loadChildren: () => import('@modules/cartera/cartera.module').then(m => m.CarteraModule)
    },
    {
        path: 'aprobaciones',
        loadChildren: () => import('@modules/aprobaciones/aprobaciones.module').then(m => m.AprobacionesModule)
    },
    {
        path: 'garantias',
        loadChildren: () => import('@modules/garantias/garantias.module').then(m => m.GarantiasModule)
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
export class HomeRoutingModule {}
