import { Metadata } from 'next'
import CalendarPage from '@/components/CalendarPage'

export const metadata: Metadata = {
  title: 'Event Calendar | Malaysia Healthcare Travel Council',
  description: 'Stay updated with healthcare events, conferences, and activities in Malaysia.',
}

export default function CalendarPageWrapper() {
  return <CalendarPage />
}

