
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "BuildClock | Construction Management",
    description:
        "Manage construction employees, job sites, work hours, schedules, and payroll with BuildClock.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
