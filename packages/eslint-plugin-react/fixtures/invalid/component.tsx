import {useState} from 'react';

async function fetchItems(): Promise<string[]> {
    return Promise.resolve([]);
}

export function BrokenList(props: {items: string[]; eager: boolean}): JSX.Element {
    if (props.eager) {
        // react-hooks/rules-of-hooks: conditional hook call
        const [state] = useState('');
        // @typescript-eslint/no-floating-promises, needs type information
        fetchItems();
        void state;
    }

    // react/jsx-key: missing key in list rendering
    const entries = props.items.map((item) => <li>{item}</li>);

    return (
        <ul>
            {entries}
            {/* jsx-a11y/alt-text: image without alt attribute */}
            <img src="logo.png" />
            {/* react/no-danger, like innerHTML */}
            <li dangerouslySetInnerHTML={{__html: ''}} />
        </ul>
    );
}
