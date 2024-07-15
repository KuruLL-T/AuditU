import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { BuildComponent } from './builds/build.component';
import { AddBuildComponent } from './builds/add-build/add-build.component';
import { RoomComponent } from './rooms/room.component';
import { AddRoomComponent } from './rooms/add-room/add-room.component';

const routes: Routes = [
  { path: '', component: MainComponent, data: { title: 'Главная' }, },

  { path: 'builds', component: BuildComponent, data: { title: 'Корпуса' }, },
  { path: 'addbuild', component: AddBuildComponent, data: { title: 'Добавление корпуса' }, },

  { path: 'rooms', component: RoomComponent, data: { title: 'Помещения' }, },
  { path: 'addroom', component: AddRoomComponent, data: { title: 'Добавление помещения' }, },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }