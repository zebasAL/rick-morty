import { useRouter } from 'next/router'

export const User = () => {
  const router = useRouter()
  const { user } = router.query

  return (
    <h3>
      USER VIEW
      current user: {user}
    </h3>
  )
}

export default User
