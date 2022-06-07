import { useEffect } from "react";

export default function Contact() {
    useEffect(function () {
        document.title = "Contact";
    });
    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p className="section-description">
                Kamu dapat menghubungiku di bawah ini :{" "}
            </p>
            <ul>
                <li>WA: 0812345678</li>
                <li>Email : zaldiabdulhadi241@gmail.com</li>
            </ul>
            <p className="section-description">
                Atau kamu dapat melihatku di sosmed.
            </p>
            <ul>
                <li>
                    <a href="https://facebook.com">Facebook</a>
                </li>
                <li>
                    <a href="https://instagram.com">Instagram</a>
                </li>
            </ul>
        </section>
    );
}
