import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardComponent } from '@layout/dashboard/dashboard.component';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { IntegrationType } from '../integration.enum';

@Component({
  selector: 'app-external-integrations-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    DashboardComponent,
    SuccessModalComponent
  ],
  templateUrl: './external-integrations-list.component.html',
  styleUrl: './external-integrations-list.component.scss'
})
export class ExternalIntegrationsListComponent implements OnInit {
  showSuccessModal = false;
  successAppName = 'Github';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Check for success query parameter
    this.route.queryParams.subscribe(params => {
      if (params['success']) {
        this.showSuccessModal = true;
        const successType = params['success'] as IntegrationType;
        // Find integration by type
        const integration = this.integrations.find(i => i.type === successType);
        
        if (integration) {
          this.successAppName = integration.name;
          integration.isConnected = true;
          integration.buttonText = 'Desconectar';
          integration.buttonType = 'disconnect';
        }
      }
    });
  }

  // Mock data for integrations
  integrations = [
    {
      id: 1,
      name: 'Jira - Atlassian',
      type: IntegrationType.JIRA,
      description: 'Great for issue tracking and project management.',
      logo: 'assets/images/jira-logo.png',
      isConnected: false,
      buttonText: 'Conectar',
      buttonType: 'connect'
    },
    {
      id: 2,
      name: 'Github',
      type: IntegrationType.GITHUB,
      description: 'Provides developers and teams with a service to host, manage, and collaborate on code and other project',
      logo: 'assets/images/github-logo.png',
      isConnected: false,
      buttonText: 'Conectar',
      buttonType: 'connect'
    },
    {
      id: 3,
      name: 'Gitlab',
      type: IntegrationType.GITLAB,
      description: 'Streamlines the entire software development lifecycle, from planning and coding to security, deployment, and operations.',
      logo: 'assets/images/gitlab-logo.png',
      isConnected: true,
      buttonText: 'Desconectar',
      buttonType: 'disconnect'
    }
  ];

  onConnect(integrationId: number) {
    const integration = this.integrations.find(i => i.id === integrationId);
    if (integration) {
      if (integration.isConnected) {
        // If already connected, disconnect it
        integration.isConnected = false;
        integration.buttonText = 'Conectar';
        integration.buttonType = 'connect';
      } else {
        // If not connected, redirect to integration authorization page
        this.router.navigate(['/external-integrations', integration.type]);
      }
    }
  }

  onCloseSuccessModal() {
    this.showSuccessModal = false;
    // Remove success query parameter from URL
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
      replaceUrl: true
    });
  }
}
