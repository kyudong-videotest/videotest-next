'use client' // 이걸 써야함
import { useRouter } from "next/navigation"

export default function DetailLink(props){
    let router = useRouter();
    
    return(
    <>
        <button onClick={()=>{router.push(`/test/test2/test3`)}}>
  			원하는 주소로 이동
            아래 함수를 이용함
            <pre>
            push
            이는 인자로 페이지 주소를 넣어주면 그 페이지로 이동한다.
            back
            이는 이전 페이지로 이동한다.
            forward
            이는 앞 페이지로 이동한다.
            refresh
            이는 페이지를 새로고침 해준다.
            prefetch
            이는 다른 것보다 조금 어려운 내용인데, 주소에 해당하는 페이지를 미리 로드해주는 함수이다. 그래서 페이지로 이동할때 매우 빠르게 이동할 수 있게 해준다.
            </pre>
    	</button>
    </>
    )
}