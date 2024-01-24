import "./Link.css";
// props = { href: string, name: string}
export function Link(props) {
  const href = props.href;
  const name = props.name;
  return (
    <p>
      <a href={href}>Single sign-on</a> to see activity within the{" "}
      <strong>{name}</strong> organization.
    </p>
  );
}