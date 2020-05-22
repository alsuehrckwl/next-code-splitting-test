import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/score/[type]', as: "/score/soccer", label: '축구' },
  { href: '/score/[type]', as: "/score/baseball", label: '야구' },
].map((link: any) => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link href="/score" as="/score">
          <a>스코어</a>
        </Link>
      </li>
      {links.map(({ key, href, label, as }) => (
        <li key={key}>
          <Link href={href} as={as}><a>{label}</a></Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Header
