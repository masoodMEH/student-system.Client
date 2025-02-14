import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-button',
  imports: [RouterModule, CommonModule, NgIconsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() textSize: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' = 'base';
  @Input() icon: string = '';
  @Input() iconSize: 'small' | 'medium' | 'large' | 'xlarge' = 'medium';
  @Input() iconColor: string = 'text-white';
  @Input() size: 'tiny' | 'small' | 'medium' | 'large' | 'huge' = 'medium';
  @Input() rounded: boolean = true;

  // رنگ‌های دکمه
  @Input() bgColor: string = 'bg-indigo-500'; // پس‌زمینه‌ی دکمه
  @Input() textColor: string = 'text-white'; // رنگ متن دکمه

  // تنظیم گردی گوشه‌های دکمه (Tailwind)
  @Input() roundedSize: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' = 'full';

  @Input() loading: boolean = false; // حالت لودینگ

  get buttonClasses() {
    const textSizeClasses = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl'
    };
    const sizeClasses = {
      tiny: 'py-1.5 px-3.5 text-xs',
      small: 'py-2.5 px-6 text-sm',
      medium: 'py-3 px-7 text-base',
      large: 'py-3.5 px-8 text-lg',
      huge: 'py-4 px-9 text-xl'
    };
    const roundedClasses = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full'
    };

    return `flex !items-center !justify-center gap-2 cursor-pointer font-medium text-center shadow-xs transition-all duration-500 hover:opacity-80
     ${sizeClasses[this.size]} ${textSizeClasses[this.textSize]} ${roundedClasses[this.roundedSize]} ${this.bgColor} ${this.textColor}
      ${this.loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'}
     `;
  }

  get iconClasses() {
    const iconSizeClasses = {
      small: 'w-4 h-4',
      medium: 'w-5 h-5',
      large: 'w-6 h-6',
      xlarge: 'w-8 h-8',
    };
    return `${iconSizeClasses[this.iconSize]} ${this.iconColor} flex-shrink-0`;
  }
}
