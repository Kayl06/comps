import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/buttons" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link className="px-4 py-2 rounded-full hover:bg-sky-400 hover:-translate-y-1 hover:scale-110 duration-200 hover:text-md hover:text-white " key={link.label} to={link.path}>
        {link.label}
      </Link>
    );
  });

  return <div className="border px-5 py-2 flex flex-col sticky top-0 overflow-y-auto">
    {renderedLinks}
  </div>;
}

export default Sidebar;
