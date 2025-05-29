import { Link } from "react-router"

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 xl:p-6 shadow-lg items-center justify-center gap-6">
      {/*LINKS*/}
      <div className="flex-1 flex items-center justify-between flex-wrap gap-2">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2 hover:bg-blue-900 transition-colors text-sm"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2 transition-colors text-sm"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 rounded-full px-4 py-2 transition-colors text-sm"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=database"
          className="hover:bg-blue-50 rounded-full px-4 py-2 transition-colors text-sm"
        >
          Database
        </Link>
        <Link
          to="/posts?cat=search-engines"
          className="hover:bg-blue-50 rounded-full px-4 py-2 transition-colors text-sm"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 rounded-full px-4 py-2 transition-colors text-sm"
        >
          Marketing
        </Link>
      </div>
      {/*SEARCH*/}
      <span className="text-xl font-medium">|</span>
      <div className="bg-gray-100 rounded-full flex items-center gap-2 px-3 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input
          type="text"
          placeholder="Search posts..."
          className="bg-transparent outline-none"
        ></input>
      </div>
    </div>
  );
}

export default MainCategories