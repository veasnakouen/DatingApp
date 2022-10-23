import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangeGuard implements CanDeactivate<unknown> {

  // this.component for alert when leave but in the angular app/web
  canDeactivate(
    //name of componentwe gonna access
    component: MemberEditComponent):boolean{
      if(component.editForm.dirty){
        return confirm('Are you sure want to continue? Any unsave change will be lost');
      }
    return true;
  }

}
