export default interface User {
    uuid: string
    email: string | null
    name: string | null
    token: string
    provider: string | undefined
    profileUrl: string | null
}