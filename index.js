const Notification = (props) => {
  const { className, card, text, link } = props;
  console.log(`${className}`);
  return (
    <div className={`${className} ${card}`}>
      <img src={`${link}`} />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div>
    <h1>Notifications</h1>
    <Notification
      className="blue"
      card="card"
      text="Information Message"
      link="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="green"
      card="card"
      text="Success Message"
      link="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="yellow"
      text="Warning Message"
      card="card"
      link="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="red"
      text="Error Message"
      card="card"
      link="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
