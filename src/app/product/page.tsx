"use client"
import { useRouter } from "next/navigation"
const product = () => {
    const router = useRouter();
    return (
        <div>
            hello from product
            <button onClick={() => router.push("/")}>back</button>
        </div>
    )
}
export default product