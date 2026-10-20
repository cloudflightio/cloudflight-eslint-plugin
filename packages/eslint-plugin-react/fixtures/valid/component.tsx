export function ItemList(props: {items: {id: string; label: string}[]}): JSX.Element {
    const entries = props.items.map((item) => <li key={item.id}>{item.label}</li>);

    return (
        <>
            <h2>Items</h2>
            <ul>{entries}</ul>
        </>
    );
}
