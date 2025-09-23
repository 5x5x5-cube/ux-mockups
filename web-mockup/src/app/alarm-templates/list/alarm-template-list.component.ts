import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '@layout/dashboard/dashboard.component';

@Component({
  selector: 'app-alarm-template-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    DashboardComponent
  ],
  templateUrl: './alarm-template-list.component.html',
  styleUrl: './alarm-template-list.component.scss'
})
export class AlarmTemplateListComponent {
  // Search functionality
  searchQuery = '';
  filteredTemplates: any[] = [];

  // Mock data for the table
  alarmTemplates = [
    { id: 1, name: 'Plantilla Alarma 1' },
    { id: 2, name: 'Plantilla Alarma 2' },
    { id: 3, name: 'Plantilla Alarma 3' },
    { id: 4, name: 'Plantilla Alarma 4' },
    { id: 5, name: 'Plantilla Alarma 5' }
  ];

  constructor(private router: Router) {
    this.filteredTemplates = [...this.alarmTemplates];
  }

  onSearchChange() {
    if (this.searchQuery.trim() === '') {
      this.filteredTemplates = [...this.alarmTemplates];
    } else {
      this.filteredTemplates = this.alarmTemplates.filter(template =>
        template.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  onCreateTemplate() {
    this.router.navigate(['/dashboard/alarm-templates/create']);
  }

  onEditTemplate(templateId: number) {
    const template = this.alarmTemplates.find(t => t.id === templateId);
    const templateName = template ? template.name : 'Plantilla Alarma';
    
    this.router.navigate(['/dashboard/alarm-templates/edit'], {
      queryParams: { name: templateName }
    });
  }
}
