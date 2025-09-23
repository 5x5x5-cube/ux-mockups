import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute } from '@angular/router';
import { IntegrationType } from '../integration.enum';

@Component({
  selector: 'app-github-integration',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './github-integration.component.html',
  styleUrl: './github-integration.component.scss'
})
export class GithubIntegrationComponent implements OnInit {
  appName: string = 'Github';
  integrationType: IntegrationType = IntegrationType.GITHUB;

  private readonly INTEGRATION_NAMES = {
    [IntegrationType.JIRA]: 'Jira - Atlassian',
    [IntegrationType.GITHUB]: 'Github',
    [IntegrationType.GITLAB]: 'Gitlab'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get app name from path parameters using enum
    this.route.params.subscribe(params => {
      if (params['integrationName']) {
        this.integrationType = params['integrationName'] as IntegrationType;
        this.appName = this.INTEGRATION_NAMES[this.integrationType] || 'Github';
      }
    });
  }

  onAuthorize() {
    // TODO: Implement actual authorization logic
    this.router.navigate(['/dashboard/external-integrations'], {
      queryParams: {
        success: this.integrationType
      }
    });
  }

  onCancel() {
    this.router.navigate(['/dashboard/external-integrations']);
  }
}
