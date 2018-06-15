import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './routing/app.routing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MouldComponent } from './mould/app.mould';
import { SizeComponent } from './size/app.size';
import { IssueMaterialComponent } from './issuematerial/app.issuematerial';
import { FabricatorComponent } from './fabricator/app.fabricator';
import { ArticleComponent } from './article/app.article';
import { ColorComponent } from './color/color.list';


@NgModule({
  declarations: [
    AppComponent ,ColorComponent ,MouldComponent,SizeComponent,IssueMaterialComponent,FabricatorComponent,ArticleComponent
  ],
  imports: [   
    BrowserModule,
    ROUTING    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
