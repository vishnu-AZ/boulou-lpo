import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownClick = (key, url) => {
    if (openDropdown !== key) {
      navigate(url);
      setOpenDropdown(key);
    } else {
      setOpenDropdown(openDropdown === key ? null : key);
    }
  };

  return (
    <header className={`main-header ${showSticky ? "sticky" : ""}`} id="mobile-manu">
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/">
            <img src="/assets/img/boulo-ipo-logo.png" alt="Logo" className="mobile-nav-logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            {/* Roles Dropdown */}
            <li
              className="has-dropdown"
              onMouseEnter={() => setOpenDropdown("roles")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link to="/roles" onClick={() => handleDropdownClick("roles", "/roles")}>
                Roles
              </Link>
              {openDropdown === "roles" && (
                <ul className="dropdown">
                  <li><Link to="/Case-Coordinator">Case Coordinator</Link></li>
                  <li><Link to="/Case-Manager">Case Manager</Link></li>
                  <li><Link to="/Paralegal-Role">Paralegal Role</Link></li>
                  <li><Link to="/Secretary-Receptionist">Secretary/Receptionist</Link></li>
                  <li><Link to="/Legal-Admin">Legal Admin</Link></li>
                  <li><Link to="/Intake-Specialist">Intake Specialist</Link></li>
                </ul>
              )}
            </li>

            {/* Services Dropdown */}
            <li
              className="has-dropdown"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link to="/service" onClick={() => handleDropdownClick("services", "/service")}>
                Services
              </Link>
              {openDropdown === "services" && (
                <ul className="dropdown">
                  <li><Link to="/Paralegal-service">Paralegal Service</Link></li>
                  <li><Link to="/contract-life-cycle-management">Contract Life Cycle Management</Link></li>
                  <li><Link to="/document-review">Document Review</Link></li>
                  <li><Link to="/admin-supports">Admin Supports</Link></li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/internalguide" onClick={() => setMenuOpen(false)}>Practice Areas</Link></li>

          {/* Roles Dropdown */}
          <li className="has-dropdown">
            <button
              className="dropdown-toggle"
              style={{ border: "unset", background: "transparent" }}
              onClick={() => handleDropdownClick("roles", "/roles")}
            >
              Roles
            </button>
            {openDropdown === "roles" && (
              <ul className="dropdown">
                <li><Link to="/Case-Coordinator" onClick={() => setMenuOpen(false)}>Case Coordinator</Link></li>
                <li><Link to="/Case-Manager" onClick={() => setMenuOpen(false)}>Case Manager</Link></li>
                <li><Link to="/Paralegal-Role" onClick={() => setMenuOpen(false)}>Paralegal Role</Link></li>
                <li><Link to="/Secretary-Receptionist" onClick={() => setMenuOpen(false)}>Secretary/Receptionist</Link></li>
                <li><Link to="/Legal-Admin" onClick={() => setMenuOpen(false)}>Legal Admin</Link></li>
                <li><Link to="/Intake-Specialist" onClick={() => setMenuOpen(false)}>Intake Specialist</Link></li>
              </ul>
            )}
          </li>

          {/* Services Dropdown */}
          <li className="has-dropdown">
            <button
              className="dropdown-toggle"
              style={{ border: "unset", background: "transparent" }}
              onClick={() => handleDropdownClick("services", "/service")}
            >
              Services
            </button>
            {openDropdown === "services" && (
              <ul className="dropdown">
                <li><Link to="/Paralegal-service" onClick={() => setMenuOpen(false)}>Paralegal Service</Link></li>
                <li><Link to="/contract-life-cycle-management" onClick={() => setMenuOpen(false)}>Contract Life Cycle Management</Link></li>
                <li><Link to="/document-review" onClick={() => setMenuOpen(false)}>Document Review</Link></li>
                <li><Link to="/admin-supports" onClick={() => setMenuOpen(false)}>Admin Supports</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="backdrop" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
};

export default HeaderMobile;
