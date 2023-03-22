import { useRouter } from 'next/router'
import { unstable_getServerSession } from "next-auth/next"
import { useSession, signIn, signOut } from "next-auth/react"

export const UserConfig = (props) => {
  const router = useRouter()
  const { user } = router.query
  const { data: session } = useSession()
  console.log("props", props)

  if (session) {
    return (
      <>
        <h1>Protected Page</h1>
        <p>You can view this page because you are signed in.</p>
      </>
    )
  }

  return (
    <h3>
      CONFIG VIEW
      current user: {user}
    </h3>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      req: "hola",
      // session: await unstable_getServerSession(
      //   context.req,
      //   context.res,
      //   authOptions
      // ),
    },
  }
}

export default UserConfig
