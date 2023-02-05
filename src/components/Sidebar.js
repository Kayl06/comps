import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/buttons" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link className="py-2" key={link.label} to={link.path}>
        {link.label}
      </Link>
    );
  });

  return <div className="flex flex-col sticky top-0 overflow-y-auto">
    {renderedLinks}
  </div>;
}

export default Sidebar;
