// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
 // Import the routes

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configure the router with routes
  ],
  bootstrap: [], // Leave empty for standalone component bootstrapping
})
export class AppModule {}
