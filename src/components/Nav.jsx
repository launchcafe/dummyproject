export default function Nav({ items = [], activeHref }) {
  return (
    <nav className="flex gap-4 border-b border-gray-200 px-4">
      {items.map((item) => {
        const isActive = item.href === activeHref;
        return (
          <a
            key={item.href}
            href={item.href}
            className={`border-b-2 px-1 py-3 text-sm font-medium ${
              isActive
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
