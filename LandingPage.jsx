import React from "react";
import './style.css';

function LandingPage() {
    return ( 
        <>
        <header className="Header fixed top-0 left-0 right-0 text-3xl">
            Ini Header Saya
        </header>
        <main className="center">
            <div className="kereta-container">
                <h1>STASIUN KERETA API HIHANGHOHENG</h1>
                <div className="kereta-row">
                    <div className="kereta-item">
                        <p>Nama Kereta: Jaya Baya</p>
                        <p>Jurusan: Malang - Bandung</p>
                        <p>Jam: 06.00 - 15.33</p>
                    </div>
                    <div className="kereta-item">
                        <p>Nama Kereta: Argo Wilis</p>
                        <p>Jurusan: Bandung - Surabaya</p>
                        <p>Jam: 07.00 - 20.00</p>
                    </div>
                    <div className="kereta-item">
                        <p>Nama Kereta: Sembrani</p>
                        <p>Jurusan: Cirebon - Semarang</p>
                        <p>Jam: 11.40 - 14.30</p>
                    </div>
                </div>
            </div>
        </main>
        <footer className="footer fixed bottom-0 left-0 right-0 text-3xl">
            @copyright Stasiun Kereta Api HihangHoheng
        </footer>
        </>
    );
}

export default LandingPage;