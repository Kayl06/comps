import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/buttons" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link 
        className="px-4 py-2 mb-2 rounded hover:bg-sky-400 duration-200 hover:text-md hover:text-white" 
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        key={link.label} 
        to={link.path}>
        {link.label}
      </Link>
    );
  });

  return <div className="border px-5 py-2 flex flex-col sticky top-0 overflow-y-auto items-start">
    {renderedLinks}
  </div>;
}

export default Sidebar;
