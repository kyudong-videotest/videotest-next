import Link from "next/link";

// Link 사용시 use client 필요없고 prefetch가 기본적용
const LinkPage = () => {
    return (
        <>
            <Link href={'/useroute'}>
                LinkPage
            </Link>
            <Link href={'/test'} prefetch={false}>
                LinkPage
            </Link>
        </>
    )
}

export default LinkPage;