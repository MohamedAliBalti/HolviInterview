
import "./Header.css";

function Header(merchantName) {
  return (
    <div className="header">
      {console.log(merchantName)}
      <img
        src="https://independant.io/wp-content/uploads/Holvi_logo.png"
        className="holvi-logo"
        alt="holvi-logo"
      />
      <div className="merchant-name">Welcome to {merchantName.merchantName}'s store</div>
    </div>
  );
}

export default Header;
