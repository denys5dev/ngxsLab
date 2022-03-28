import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from 'src/app/shared/ng-zorro-antd.module';

@NgModule({
  imports: [DemoNgZorroAntdModule, CommonModule],
  exports: [DemoNgZorroAntdModule, CommonModule],
})
export class SharedModule {}
