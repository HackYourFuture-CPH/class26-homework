import "./InfoPanel.css";

export default function InfoPanel(props) {
  return (
    <>
      <div className="container">
        <img className="my-img" src={props.imageUrl}></img>
        <div className="content">
          <h2 className="my-title">{props.title}</h2>
          {props.children}
        </div>
      </div>
    </>
  );
}
