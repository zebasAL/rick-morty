import { useRouter } from 'next/router'

export const UserConfig = () => {
  const router = useRouter()
  const { user } = router.query

  return (
    <h3>
      CONFIG VIEW
      current user: {user}
    </h3>
  )
}

export default UserConfig
