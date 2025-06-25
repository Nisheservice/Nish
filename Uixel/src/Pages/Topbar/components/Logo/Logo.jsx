import "./Logo.css";

const Logo = ({ title, subtitle }) => {
  return (
    <div className="logo">
      <h1 className="logo-title">{title}</h1>
      {subtitle && <p className="logo-subtitle">{subtitle}</p>}
    </div>
  );
};

export default Logo;
