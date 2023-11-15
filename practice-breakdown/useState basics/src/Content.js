import { useState } from "react";

const Content = () => {
    const [name, setName] = useState('Emma');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Emma', 'Maria', 'Joseph'];
        const init = Math.floor(Math.random() * 3);
        setName(names[init]);
    }

    const handleClick = () => {
        setCount(count + 1); {/* the log function logs the state of count that comes into the function not the one updated*/}
        setCount(count + 1);
        console.log(count)
    }

    const handleClick2 = (name) => {
        console.log(count)
    }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Click It</button>
        <button onClick={handleClick2}>Click It</button>
    </main>
  )
}

export default Content