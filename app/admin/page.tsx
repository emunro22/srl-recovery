import { isAdminAuthenticated } from '@/lib/auth'
import { getGalleryImages, getBlogPosts, getCustomers } from '@/lib/db'
import AdminLogin from './AdminLogin'
import AdminDashboard from './AdminDashboard'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Admin – SRL Recovery',
  robots: { index: false, follow: false },
}

export default async function AdminPage() {
  const authed = await isAdminAuthenticated()
  if (!authed) return <AdminLogin />
  const [images, posts, customers] = await Promise.all([
    getGalleryImages(),
    getBlogPosts(false),
    getCustomers(),
  ])
  return <AdminDashboard initialImages={images} initialPosts={posts} initialCustomers={customers} />
}