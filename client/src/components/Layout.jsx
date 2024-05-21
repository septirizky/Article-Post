import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div>
        <nav className="navbar sticky top-0 z-10 p-3 bg-base-200 shadow flex justify-between">
          <div className="navbar-start">
            <Link to="/" className="text-4xl font-bold px-6">
              <span className="text-accent">ARTICLE POST</span>
            </Link>
          </div>
          <div className="navbar-end">
            <Link to="/" className="text font-bold px-6">
              Publish
            </Link>
            <Link to="/draft" className="text font-bold px-6">
              Draft
            </Link>
            <Link to="/trash" className="text font-bold px-6">
              Trash
            </Link>
          </div>
        </nav>
        <div>{<Outlet />}</div>
      </div>
    </>
  );
}
