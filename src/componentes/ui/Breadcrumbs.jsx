import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ items = [], className = "" }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center text-sm text-gray-600">
        {items.map((it, i) => (
          <Fragment key={it.href + "-" + i}>
            {i > 0 && <span className="mx-2">/</span>}
            <li className="truncate max-w-full">
              {it.current ? (
                <span className="font-medium text-JisaCyan" aria-current="page">
                  {it.label}
                </span>
              ) : it.href ? (
                <Link to={it.href} className="hover:underline">
                  {it.label}
                </Link>
              ) : (
                <span>{it.label}</span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}