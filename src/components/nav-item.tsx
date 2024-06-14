export default function NavItem({ href, children } : { href: string, children: React.ReactNode}) {
  return (
    <a
      href={href}
      className="pb-10 mx-8 ease-in-out hover:border-solid hover:border-b-4 hover:border-contrast"
    >
      {children}
    </a>
  )
}