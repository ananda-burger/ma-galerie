import MainNavigation from './MainNavigation.js'

export default function Layout({children}) {
  return (
    <div>
      <MainNavigation />
      <div>{children}</div>
    </div>
  )
}
