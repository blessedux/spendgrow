"use client"
import { createContext, useEffect, useState } from "react"
import { AppConfig, UserSession, showConnect } from "@stacks/connect"
import { StacksNetwork, StacksTestnet } from "@stacks/network"

const appConfig = new AppConfig(["store_write", "publish_data"])
export const userSession = new UserSession({ appConfig })
export const network = new StacksTestnet()

interface UserContextType {
  userData: any
  authenticated: boolean
  handleSignIn: () => void
  handleSignOut: () => void
}

export const UserContext = createContext<UserContextType>({
  userData: null,
  authenticated: false,
  handleSignIn: () => {},
  handleSignOut: () => {},
})

export default function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<any>(null)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData)
        setAuthenticated(true)
      })
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData())
      setAuthenticated(true)
    }
  }, [])

  const handleSignIn = () => {
    showConnect({
      appDetails: {
        name: "SpendGrow",
        icon: window.location.origin + "/logo.png",
      },
      redirectTo: "/",
      onFinish: () => {
        window.location.reload()
      },
      userSession,
    })
  }

  const handleSignOut = () => {
    userSession.signUserOut()
    setUserData(null)
    setAuthenticated(false)
  }

  return (
    <UserContext.Provider value={{ userData, authenticated, handleSignIn, handleSignOut }}>
      {children}
    </UserContext.Provider>
  )
} 