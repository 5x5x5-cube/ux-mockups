import { Routes } from '@angular/router';
import { LoginComponent } from '@auth/login/login.component';
import { SignupComponent } from '@auth/signup/signup.component';
import { AlarmTemplateListComponent } from '@app/alarm-templates/list/alarm-template-list.component';
import { AlarmTemplateFormComponent } from '@app/alarm-templates/form/alarm-template-form.component';
import { ExternalIntegrationsListComponent } from '@app/external-integrations/list/external-integrations-list.component';
import { GithubIntegrationComponent } from '@app/external-integrations/github-integration/github-integration.component';
import { NotificationsListComponent } from '@app/notifications/list/notifications-list.component';
import { MainLayoutComponent } from '@layout/main-layout.component';

export const routes: Routes = [
  // Default redirect to login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // Auth routes (no layout)
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
        // GitHub integration (no layout)
        {
          path: 'external-integrations/:integrationName',
          component: GithubIntegrationComponent
        },
  // Main app routes (with layout)
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'alarm-templates',
        pathMatch: 'full'
      },
      {
        path: 'alarm-templates',
        component: AlarmTemplateListComponent
      },
      {
        path: 'alarm-templates/create',
        component: AlarmTemplateFormComponent
      },
      {
        path: 'alarm-templates/edit',
        component: AlarmTemplateFormComponent
      },
            {
              path: 'external-integrations',
              component: ExternalIntegrationsListComponent
            },
            {
              path: 'notifications',
              component: NotificationsListComponent
            }
    ]
  }
];
