import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/buttons" },
    { label: "Modal", path: "/modal" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link 
        className="px-2 py-2 mb-2 rounded duration-200 hover:text-md hover:font-bold hover:bg-sky-900 hover:text-white" 
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        key={link.label} 
        to={link.path}>
        {link.label}
      </Link>
    );
  });

  return <div className="border px-5 py-2 flex flex-col sticky top-0 overflow-y-auto">
    {renderedLinks}
  </div>;
}

export default Sidebar;
