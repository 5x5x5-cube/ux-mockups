import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { DashboardComponent } from '@layout/dashboard/dashboard.component';

export interface Notification {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  isRead: boolean;
}

@Component({
  selector: 'app-notifications-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    DashboardComponent
  ],
  templateUrl: './notifications-list.component.html',
  styleUrl: './notifications-list.component.scss'
})
export class NotificationsListComponent {
  // Mock data for notifications
  notifications: Notification[] = [
    {
      id: 1,
      title: 'Análisis de Productividad',
      description: 'Basado en tu actividad reciente, has completado el 85% de las tareas programadas esta semana. Te recomendamos revisar las 3 tareas pendientes de "Plantillas de Alarmas" para mantener tu ritmo óptimo.',
      timestamp: 'Hace 2 horas',
      isRead: false
    },
    {
      id: 3,
      title: 'Patrón de Uso Detectado',
      description: 'He notado que tu mayor actividad en la aplicación ocurre entre 9:00-11:00 AM. Te sugiero programar tus tareas más complejas durante este horario para maximizar tu eficiencia.',
      timestamp: 'Ayer',
      isRead: true
    },
    {
      id: 4,
      title: 'Recomendación de Integración',
      description: 'Tu equipo ha estado trabajando con Jira esta semana. Considera conectar la integración de Jira para sincronizar automáticamente las alarmas con tus tickets de proyecto.',
      timestamp: 'Hace 3 días',
      isRead: false
    }
  ];

  onCloseNotification(notificationId: number) {
    this.notifications = this.notifications.filter(n => n.id !== notificationId);
  }

  onMarkAsRead(notificationId: number) {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.isRead = true;
    }
  }
}
