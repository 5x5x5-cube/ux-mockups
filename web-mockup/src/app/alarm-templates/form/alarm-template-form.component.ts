import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardComponent } from '@layout/dashboard/dashboard.component';

@Component({
  selector: 'app-alarm-template-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    DashboardComponent
  ],
  templateUrl: './alarm-template-form.component.html',
  styleUrl: './alarm-template-form.component.scss'
})
export class AlarmTemplateFormComponent implements OnInit {
  alarmTemplateForm: FormGroup;
  allDayChecked = false;
  isEditMode: boolean = false;
  templateName: string = '';

  // Mock data for dropdowns
  alertLevels = [
    { value: 'low', label: 'Bajo' },
    { value: 'medium', label: 'Medio' },
    { value: 'high', label: 'Alto' },
    { value: 'critical', label: 'Crítico' }
  ];

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.alarmTemplateForm = this.fb.group({
      name: ['', [Validators.required]],
      alertLevel: ['', [Validators.required]],
      allDay: [false],
      startTime: ['08:30'],
      endTime: ['09:30']
    });
  }

  ngOnInit() {
    // Check if we're in edit mode by looking at the route
    this.isEditMode = this.route.snapshot.url.some(segment => segment.path === 'edit');
    
    // Get template name from query parameters if in edit mode
    this.route.queryParams.subscribe(params => {
      if (this.isEditMode && params['name']) {
        this.templateName = params['name'];
        
        // Populate form with template data (mocked)
        this.alarmTemplateForm.patchValue({
          name: this.templateName,
          alertLevel: 'high', // Mocked value
          allDay: false,
          startTime: '09:00',
          endTime: '18:00'
        });
      } else {
        this.templateName = this.isEditMode ? 'Editar Plantilla de Alarmas' : 'Crear Plantilla de Alarmas';
      }
    });
  }

  onAllDayChange() {
    this.allDayChecked = !this.allDayChecked;
    this.alarmTemplateForm.patchValue({ allDay: this.allDayChecked });
    
    if (this.allDayChecked) {
      this.alarmTemplateForm.get('startTime')?.disable();
      this.alarmTemplateForm.get('endTime')?.disable();
    } else {
      this.alarmTemplateForm.get('startTime')?.enable();
      this.alarmTemplateForm.get('endTime')?.enable();
    }
  }

  onSubmit() {
    if (this.alarmTemplateForm.valid) {
      this.router.navigate(['/dashboard/alarm-templates']);
    }
  }

  onCancel() {
    this.router.navigate(['/dashboard/alarm-templates']);
  }
}
