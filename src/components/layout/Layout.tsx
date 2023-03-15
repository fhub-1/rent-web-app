import React from "react"
import { Navbar } from "../navbar/Navbar"

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <h1 className="text-brand">footer</h1>
    </>

  )
}

export default Layout