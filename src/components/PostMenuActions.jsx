const PostMenuActions = () => {
  return (
    <div className="">
      <h1>Actions</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
        >
          <path
            d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <span>Save this Post</span>
      </div>      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer hover:bg-red-50 rounded-md px-2 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#dc2626"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3,6 5,6 21,6"></polyline>
          <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
        <span className="text-red-600">Delete this Post</span>
      </div>
    </div>
  );
}

export default PostMenuActions