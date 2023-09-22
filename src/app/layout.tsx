import './globals.css'

export const metadata = {
  title: 'AlexEvans',
  description: 'Alex Evans HealthCare Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-1000 dark:bg-neutral-1000">
        {children}
      </body>
    </html>
  )
}
