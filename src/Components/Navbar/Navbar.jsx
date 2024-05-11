const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content rounded-2xl">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">React</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://store-images.s-microsoft.com/image/apps.9292.f7586ead-cd6c-4334-ab74-e72395afdcb9.4de59ba4-5981-4862-b898-709027028523.b9793569-c375-4a5b-81d9-e5f53d8c96fc"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
