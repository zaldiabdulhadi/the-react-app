import { useEffect } from "react";

export default function Home() {
    useEffect(function () {
        document.title = "Home";
    }, []);
    return (
        <section className="section">
            <h1 className="section-title">Selamat Datang di Website Ku</h1>
            <p className="section-description">
                Halo Semua, Ini Website Baru Aku. Kamu bisa mendapatkan
                Informasi seputar Profileku disini. Salam Kenal Ya
            </p>
        </section>
    );
}
