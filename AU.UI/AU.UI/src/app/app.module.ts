import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { SearchPipe } from './search.pipe';

import { MainComponent } from './main/main.component';

import { BuildComponent } from './builds/build.component';
import { AddBuildComponent } from './builds/add-build/add-build.component';
import { ChangeBuildComponent } from './builds/change-build/change-build.component';
import { OpenBuildComponent } from './builds/open-build/open-build.component';

import { RoomComponent } from './rooms/room.component';
import { OpenRoomComponent } from './rooms/open-room/open-room.component';
import { AddRoomComponent } from './rooms/add-room/add-room.component';
import { ChangeRoomComponent } from './rooms/change-room/change-room.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    MainComponent,

    BuildComponent,
    AddBuildComponent,
    ChangeBuildComponent,
    OpenBuildComponent,

    RoomComponent,
    AddRoomComponent,
    ChangeRoomComponent,
    OpenRoomComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
