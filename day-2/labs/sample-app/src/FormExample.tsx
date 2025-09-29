import React, { useState, FormEvent, ChangeEvent } from "react";

const FormExample: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    return (
        <>
            <form>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                <br />
                <label>Email:</label>
                <input type="text" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default FormExample;