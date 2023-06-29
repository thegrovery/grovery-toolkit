import { h } from 'preact';
import { useState } from 'preact/hooks';
import { fetch } from 'astro/client';

function ChatGPT() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    async function callGptApi() {
        try {
            const res = await fetch('/.netlify/functions/chatGpt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: prompt,
                }),
            });
            const data = await res.json();
            setResponse(data.choices[0].text);
        } catch (error) {
            console.error('Error calling GPT-3 API:', error);
        }
    }

    return (
        <div>
            <textarea placeholder="Enter your prompt here" onInput={(e) => setPrompt(e.target.value)}></textarea>
            <button onClick={callGptApi}>Submit</button>
            <div>
                <h2>Response:</h2>
                <p>{response}</p>
            </div>
        </div>
    );
}

export default ChatGPT;
