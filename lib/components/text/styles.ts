import { cva } from "@/styled-system/css";

export const text = cva({
    base: {
        fontWeight: 600,
        color: 'text.0',
    },
    variants: {
        size: {
            tag: { fontSize: 14 },
            description: { fontSize: 16 },
            label: { fontSize: 18 },
            subtitle: { fontSize: { base: 20, md: 24 } },
            title: { fontSize: { base: 24, md: 30 } },
            mega: { fontSize: { base: 30, md: 40 } },
        },
        weight: {
            100: { fontWeight: 100 },
            200: { fontWeight: 200 },
            300: { fontWeight: 300 },
            400: { fontWeight: 400 },
            500: { fontWeight: 500 },
            600: { fontWeight: 600 },
            700: { fontWeight: 700 },
            800: { fontWeight: 800 },
            900: { fontWeight: 900 },
        },
        color: {
            red: { color: 'red.4' },
            inherit: { color: 'inherit' },
            orange: { color: 'orange.0' }
        }
    }
});