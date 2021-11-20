import { NgModule } from '@angular/core';
import { DefaultLayoutModule } from './themes/default-layout/default-layout.module';
import { PortalLayoutModule } from './themes/portal-layout/portal-layout.module';
import { MediaLayoutModule } from './themes/media-layout/media-layout.module';
import { SocialLayoutModule } from './themes/social-layout/social-layout.module';
import { StoreLayoutModule } from './themes/store-layout/store-layout.module';
import { VendorLayoutModule } from './themes/vendor-layout/vendor-layout.module';
import { ProfileLayoutModule } from './themes/profile-layout/profile-layout.module';
import { LayoutsComponent } from './layouts.component';

const layoutTheme = [
  DefaultLayoutModule,
  PortalLayoutModule,
  MediaLayoutModule,
  SocialLayoutModule,
  StoreLayoutModule,
  VendorLayoutModule,
  ProfileLayoutModule,
];

@NgModule({
  declarations: [LayoutsComponent],
  imports: [...layoutTheme],
  exports: [LayoutsComponent, ...layoutTheme],
})
export class LayoutsModule { }
