import Link from "next/link";

const Home = () => {
  return (
      <header className="grid grid-cols-3 font-work">
        <div>Avinash logo</div>
        <nav>
            <ul className="flex gap-6">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">about</Link>
                </li>
                <li>
                    <Link href="/signup">signup</Link>
                </li>
                <li>
                    <Link href="/clientcomp">Clientcomp</Link>
                </li>
                <li>
                    <Link href="/servercomp">ServerComp</Link>
                </li>
                <li>
                    <Link href="/contact">contact</Link>
                </li>
                <li>
                    <Link href="/services">services</Link>
                </li>
            </ul>
        </nav>
      </header>
  )
}

export default Home
