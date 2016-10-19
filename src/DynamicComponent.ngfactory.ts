/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './DynamicComponent';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/linker/compiler';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
var renderType_DynamicComponent_Host:import0.RenderComponentType = (null as any);
class _View_DynamicComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _DynamicComponent_0_5:import3.DynamicComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DynamicComponent_Host0,renderType_DynamicComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('DynamicComponent',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DynamicComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DynamicComponent_0_5 = new import3.DynamicComponent(new import8.ElementRef(this._el_0),this._appEl_0.vcRef,this.parentInjector.get(import9.Compiler),this.parentInjector.get(import10.Http));
    this._appEl_0.initComponent(this._DynamicComponent_0_5,([] as any[]),compView_0);
    compView_0.create(this._DynamicComponent_0_5,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._appEl_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.DynamicComponent) && (0 === requestNodeIndex))) { return this._DynamicComponent_0_5; }
    return notFoundResult;
  }
}
function viewFactory_DynamicComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_DynamicComponent_Host === (null as any))) { (renderType_DynamicComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_DynamicComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const DynamicComponentNgFactory:import12.ComponentFactory<import3.DynamicComponent> = new import12.ComponentFactory<import3.DynamicComponent>('DynamicComponent',viewFactory_DynamicComponent_Host0,import3.DynamicComponent);
const styles_DynamicComponent:any[] = ([] as any[]);
var renderType_DynamicComponent:import0.RenderComponentType = (null as any);
class _View_DynamicComponent0 extends import1.AppView<import3.DynamicComponent> {
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DynamicComponent0,renderType_DynamicComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this.init(([] as any[]),([] as any[]),([] as any[]),([] as any[]));
    return (null as any);
  }
}
export function viewFactory_DynamicComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.DynamicComponent> {
  if ((renderType_DynamicComponent === (null as any))) { (renderType_DynamicComponent = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,styles_DynamicComponent,{})); }
  return new _View_DynamicComponent0(viewUtils,parentInjector,declarationEl);
}