module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(340, 40%, 90%)",
        input: "hsl(340, 40%, 90%)",
        ring: "hsl(330, 50%, 50%)",
        background: "hsl(330, 100%, 98%)",
        foreground: "hsl(340, 60%, 30%)",
        primary: {
          DEFAULT: "hsl(330, 100%, 98%)",
          foreground: "hsl(340, 60%, 30%)",
        },
        secondary: {
          DEFAULT: "hsl(340, 85%, 75%)",
          foreground: "hsl(340, 60%, 30%)",
        },
        tertiary: {
          DEFAULT: "hsl(350, 90%, 80%)",
          foreground: "hsl(340, 60%, 30%)",
        },
        neutral: {
          DEFAULT: "hsl(320, 60%, 90%)",
          foreground: "hsl(340, 50%, 35%)",
        },
        success: {
          DEFAULT: "hsl(142, 40%, 45%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        warning: {
          DEFAULT: "hsl(34, 100%, 45%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(320, 60%, 90%)",
          foreground: "hsl(340, 50%, 35%)",
        },
        accent: {
          DEFAULT: "hsl(340, 85%, 75%)",
          foreground: "hsl(340, 60%, 30%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 70%, 50%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        card: {
          DEFAULT: "hsl(320, 60%, 95%)",
          foreground: "hsl(340, 60%, 30%)",
        },
        popover: {
          DEFAULT: "hsl(330, 100%, 98%)",
          foreground: "hsl(340, 60%, 30%)",
        },
        gray: {
          50: "hsl(40, 20%, 97%)",
          100: "hsl(38, 20%, 93%)",
          200: "hsl(36, 15%, 87%)",
          300: "hsl(36, 9%, 74%)",
          400: "hsl(35, 6%, 60%)",
          500: "hsl(34, 5%, 45%)",
          600: "hsl(33, 6%, 34%)",
          700: "hsl(32, 8%, 25%)",
          800: "hsl(32, 10%, 18%)",
          900: "hsl(30, 10%, 12%)",
        },
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
        headline: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(340, 85%, 75%) 0%, hsl(350, 90%, 80%) 100%)',
        'gradient-2': 'linear-gradient(135deg, hsl(320, 60%, 90%) 0%, hsl(330, 100%, 98%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsla(340, 85%, 75%, 0.9), hsla(350, 90%, 80%, 0.9))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
