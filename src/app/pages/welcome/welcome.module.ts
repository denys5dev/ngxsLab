import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { NgxsModule } from '@ngxs/store';
import { PostState } from 'src/app/pages/welcome/+store/post.state';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    SharedModule,
    NgxsModule.forFeature([PostState]),
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
