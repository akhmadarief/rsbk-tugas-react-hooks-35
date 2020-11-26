import React, { useState, useEffect, useRef } from "react";
import "./Index.css";

export default function Name() {
    const [name, setName] = useState('')
    const renderCount = useRef(1)

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    return (
        <div className="Main">
            <p className="Text">Kelompok 35</p>
            <input placeholder="Masukkan Nama" type="Text" value={name} onChange={e => setName(e.target.value)} />
            <p className="Text">Nama: {name}</p>
            <p>This page rendered {renderCount.current} times</p>
        </div>
    );
}