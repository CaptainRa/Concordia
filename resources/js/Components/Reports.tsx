import { Link } from "@inertiajs/react";

export default function Reports() {
    return (
        <>
              <h1 className="text-xl font-semibold">Further Reports</h1>
                <Link href="/terms-service" className="cursor-pointer hover:text-blue-300">
                    <h1>
                        Terms of Service
                    </h1>
                </Link>
                <Link href="/privacy-policy" className="cursor-pointer hover:text-blue-300">
                    <h1>
                        Privacy Policy
                    </h1>
                </Link>
                <Link href="/help" className="cursor-pointer hover:text-blue-300">
                    <h1>
                        Help
                    </h1>
                </Link>
        </>
    )
}