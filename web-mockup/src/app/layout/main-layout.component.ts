import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  // Navigation state
  isCollapsed = false;
  isMobile = false;
  isMobileMenuOpen = false;

  // Navigation menu items
  menuItems = [
    {
      id: 'plantillas',
      label: 'Plantilla Alarmas',
      icon: 'alarm',
      route: '/dashboard/alarm-templates',
      badge: null
    },
    {
      id: 'tareas',
      label: 'Tareas',
      icon: 'list',
      route: '/dashboard/tareas',
      badge: null
    },
    {
      id: 'notificaciones',
      label: 'Notificaciones',
      icon: 'notifications',
      route: '/dashboard/notifications',
      badge: 3
    },
           {
             id: 'integraciones',
             label: 'Integraciones',
             icon: 'add_circle',
             route: '/dashboard/external-integrations',
             badge: null
           }
  ];

  // Settings menu items
  settingsItems = [
    {
      id: 'configuraciones',
      label: 'Configuraciones',
      icon: 'settings',
      route: '/dashboard/configuraciones',
      badge: null
    },
    {
      id: 'cerrar-sesion',
      label: 'Cerrar Sesión',
      icon: 'arrow_back',
      route: '/login',
      badge: null
    }
  ];

  onMenuItemClick(route: string) {
    // Navigation will be handled by Angular Router
    console.log('Navigate to:', route);
  }

  toggleCollapse() {
    if (this.isMobile) {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    } else {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    this.isMobile = width < 768;

    // Close mobile menu when switching to desktop
    if (!this.isMobile) {
      this.isMobileMenuOpen = false;
    }

    // Only auto-collapse on very small tablet screens (768px-900px)
    // Don't force expand on desktop - respect user's preference
    if (width >= 768 && width < 900) {
      this.isCollapsed = true;
    }
    // Removed the else if that was forcing expansion on desktop
  }
}
