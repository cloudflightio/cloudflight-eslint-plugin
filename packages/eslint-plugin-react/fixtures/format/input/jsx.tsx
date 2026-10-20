export function Card(props: {title: string; done: boolean}): JSX.Element {
    return <div className = "card" >
          <h2>{ props.title }</h2>
              <input type="checkbox" checked={props.done} readOnly/>
    </div>;
}

export function Details(props: {open: boolean}): JSX.Element {
    return (
        <section>
            {props.open && <div
                className="details">
                details
            </div>}
        </section>
    );
}
