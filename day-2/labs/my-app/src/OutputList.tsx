const OutputList: React.FC = () => {

    const names: string[] = ["Rohit", "Ram", "Mohan", "Ravi"];
    return (
        <ul>

            {names.map((name, index) => (
                <li key={index}>
                    {name}
                </li>
            ))}
        </ul>


    );

}

export default OutputList;
