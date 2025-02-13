import type { Config } from 'tailwindcss';
import tailwindFormPlugin from "@tailwindcss/forms";

export const tailwindColors: { [key: string]: string } = {
  current: "currentColor",
  transparent: "transparent",
  white: "#F9F9F9",
  primary: "#007BEC",
  "primary-content": "#FFFFFF",
  secondary: "#6c5ce7",
  "secondary-content": "#FFFFFF",
  accent: "#1FB2A5",
  "accent-content": "#FFFFFF",
  neutral: "#2a323c",
  "base-25": "#353d47",
  "base-50": "#2a323c",
  "base-75": "#20272e",
  "base-100": "#1d232a",
  "base-200": "#191e24",
  "base-300": "#15191e",
  "base-content": "#A6ADBB",
  info: "#3abff8",
  success: "#36d399",
  warning: "#fbbd23",
  error: "#f87272",
  "gradient-first": "#34eaa0",
  "gradient-second": "#0fa2e9",
};

const config: Config = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: tailwindColors,
      fontFamily: {
        yekanbakh: ["var(--font-yekanbakh)", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      screens: {
        'xs': '480px',   // موبایل کوچک
        'sm': '640px',   // موبایل متوسط
        'md': '768px',   // تبلت
        'lg': '1024px',  // لپ‌تاپ
        'xl': '1280px',  // دسکتاپ بزرگ
        '2xl': '1536px', // مانیتور‌های خیلی بزرگ
        '4k': '2560px'   // نمایشگرهای 4K
      }
    },
  },
  plugins: [
    tailwindFormPlugin({
      strategy: "class",
    }),
  ],
};

export default config;
