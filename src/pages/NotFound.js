import { useEffect } from "react";

export default function NotFound() {
    useEffect(function () {
        document.title = "NotFound";
    }, []);
    return <h1>Missing</h1>;
}
