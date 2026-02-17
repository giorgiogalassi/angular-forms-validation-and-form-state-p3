import { Routes } from '@angular/router';
import { EmailReactiveComponent } from './forms/reactive/email-reactive.component';
import { LoginReactiveComponent } from './forms/reactive/login-reactive.component';
import { ReactiveFormsHubComponent } from './forms/reactive/reactive-forms-hub.component';
import { StateReactiveComponent } from './forms/reactive/state-reactive.component';
import { EmailSignalComponent } from './forms/signal-forms/email-signal.component';
import { LoginSignalComponent } from './forms/signal-forms/login-signal.component';
import { SignalFormsHubComponent } from './forms/signal-forms/signal-forms-hub.component';
import { StateSignalComponent } from './forms/signal-forms/state-signal.component';
import { EmailTemplateComponent } from './forms/template-driven/email-template.component';
import { LoginTemplateComponent } from './forms/template-driven/login-template.component';
import { StateTemplateComponent } from './forms/template-driven/state-template.component';
import { TemplateDrivenFormsHubComponent } from './forms/template-driven/template-driven-forms-hub.component';

export const routes: Routes = [
  {
    path: 'forms',
    children: [
      {
        path: 'template-driven',
        component: TemplateDrivenFormsHubComponent,
        children: [
          { path: 'login', component: LoginTemplateComponent },
          { path: 'email', component: EmailTemplateComponent },
          { path: 'state', component: StateTemplateComponent },
          { path: '', redirectTo: 'login', pathMatch: 'full' },
        ],
      },
      {
        path: 'reactive',
        component: ReactiveFormsHubComponent,
        children: [
          { path: 'login', component: LoginReactiveComponent },
          { path: 'email', component: EmailReactiveComponent },
          { path: 'state', component: StateReactiveComponent },
          { path: '', redirectTo: 'login', pathMatch: 'full' },
        ],
      },
      {
        path: 'signal-forms',
        component: SignalFormsHubComponent,
        children: [
          { path: 'login', component: LoginSignalComponent },
          { path: 'email', component: EmailSignalComponent },
          { path: 'state', component: StateSignalComponent },
          { path: '', redirectTo: 'login', pathMatch: 'full' },
        ],
      },
      { path: '', redirectTo: 'template-driven', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'forms', pathMatch: 'full' },
];
