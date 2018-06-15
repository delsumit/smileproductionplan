import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { FabricatorComponent } from '../fabricator/app.fabricator';
import { IssueMaterialComponent } from '../issuematerial/app.issuematerial';
import { SizeComponent } from '../size/app.size';
import { MouldComponent } from '../mould/app.mould';
import { ArticleComponent } from '../article/app.article';
import { ColorComponent } from '../color/color.list';
 
export const AppRoutes: Routes = [
    { path: 'color', component: ColorComponent },
    { path: 'mould', component: MouldComponent },
    { path: 'size', component: SizeComponent},
    { path: 'issuematerial', component:IssueMaterialComponent },
    { path: 'fabricator', component: FabricatorComponent },
    { path: 'article', component: ArticleComponent }
    
    
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);