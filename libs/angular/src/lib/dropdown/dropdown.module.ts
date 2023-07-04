import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggDropdownComponent } from './dropdown.component'
import { NggDropdownOptionDirective } from './dropdown-option.directive'
import { NggDropdownButtonDirective } from './dropdown-button.directive'
import { NggCoreWrapperModule } from '../../scoped-element/scoped-element.module'

@NgModule({
  declarations: [
    NggDropdownComponent,
    NggDropdownOptionDirective,
    NggDropdownButtonDirective,
  ],
  imports: [CommonModule, NggCoreWrapperModule],
  exports: [NggDropdownComponent, NggDropdownOptionDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggDropdownModule {}
