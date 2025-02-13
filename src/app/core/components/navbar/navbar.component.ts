import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuItems = [
    { label: 'خانه', path: '#' },
    {
      label: 'مدیریت',
      path: '/categories',
      children: [
        { label: 'دسته بندی ها', path: '/admin/categories' },
      ]
    },
  ];


  activeItem: any = this.menuItems[0];
  openDropdown: string | null = null;
  isDropdownOpen = false;
  isMobileMenuOpen = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveByRoute(event.urlAfterRedirects);
      }
    });
  }

  setActive(item: any) {
    this.activeItem = item;
  }

  toggleDropdown(item: any) {
    if (this.openDropdown === item.label) {
      this.openDropdown = null;
    } else {
      this.openDropdown = item.label;
    }
  }

  closeDropdown() {
    this.openDropdown = null;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const target = event.target as HTMLElement;

    if (!target.closest('.dropdown-container')) {
      this.openDropdown = null;
    }
  }

  setActiveByRoute(route: string) {
    for (const item of this.menuItems) {
      if (item.path === route) {
        this.activeItem = item;
        return;
      }

      if (item.children) {
        const foundChild = item.children.find(child => child.path === route);
        if (foundChild) {
          this.activeItem = item;
          return; // ⚠ اینجا `openDropdown` را مقدار نمی‌دهیم تا منو باز نشود
        }
      }
    }
  }

}
