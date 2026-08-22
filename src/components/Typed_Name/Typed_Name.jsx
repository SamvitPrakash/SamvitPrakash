import { useState, useEffect } from 'react';

function TypedName({fullText = "Hey, I'm", fullName = " Samvit Prakash", punctuation=".", id="typed-name"}) {
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [punctuated, setPunctuated] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        let nameIndex = 0;

        const toggleCursor = () => {
            setCursorVisible(v => !v);
        };

        const cursorInterval = setInterval(toggleCursor, 500);

        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else if (nameIndex < fullName.length) {
                setName(fullName.slice(0, nameIndex + 1));
                nameIndex++;
            } else {
                clearInterval(interval);
                setPunctuated(punctuation);
            }
        }, 100);

        return () => {
            clearInterval(interval);
            clearInterval(cursorInterval);
        };
    },[fullText, fullName, punctuation]);

    return (
        <h1 className='title' id={id}>
            {text}
            <span className="name">{name}</span>
            {punctuated}
            <span className='cursor' style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
        </h1>
    );
}

export default TypedName;