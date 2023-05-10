import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'College of Engineering Chengannur',
  description: 'A demo landing page for College of Engineering Chengannur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
