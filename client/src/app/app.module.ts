import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { FabricjsEditorModule } from 'projects/angular-editor-fabric-js/src/public-api';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { EditorComponent } from './Components/editor/editor.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    DashboardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FabricjsEditorModule,
    FormsModule,
    ColorPickerModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
