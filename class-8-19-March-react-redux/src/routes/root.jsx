import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { increment, decrement, incrementByAmount } from "../slice/counterSlice";

export default function Root() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log("STORE value: ", value);
  return (
    <>
      {/* <div id="sidebar">
        <h1>React Router Contacts</h1> */}
      <div>
        <h1>Counter Value: {value}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by Amount
        </button>

        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div id="search-spinner" aria-hidden hidden={true} />
          <div className="sr-only" aria-live="polite"></div>
        </form>
        <form method="post">
          <button type="submit">New</button>
        </form>
      </div>
      {/* <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div> */}
    </>
  );
}
