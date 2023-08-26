import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sev: {
          green: {
            10: "#97cdaf",
            100: "#013000",
          },
          gray: {
            10: "#f2f2f2",
          },
          orange: {
            100: "#ed7d31",
          },
        },
      },
      gridTemplateRows: {
        "auto-1fr": "auto 1fr",
      },
      borderStyle: {
        dashed: "dashed",
      },
    },
  },
}
export default config
