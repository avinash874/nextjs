import Link from "next/link"

const About = () => {
  return (
    <>
      <h1 className="common_heading font-roboto">Hello Avinash this is the about section</h1>
      <button>
        <Link href="/">Home Page</Link>
      </button>
    </>
  )
}

export default About
