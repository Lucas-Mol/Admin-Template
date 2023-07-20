import Head from 'next/head'
import useAuthContext from "@/data/hook/useAuthContext"
import Loading from "../templates/Loading"
import { useRouter } from 'next/navigation'

export default function Authorization(props: any) {
    const router = useRouter()
    const { user, loading } = useAuthContext()

    function renderContent() {
       return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template-auth")) {
                                    window.location.href = "/"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
       )
    }

    if(!loading && user?.email) {
        return renderContent()
    } else if (loading){
        return <Loading className='bg-gray-800' />
    } else {
        router.push('/')
        return null
    }

}