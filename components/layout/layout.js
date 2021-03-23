import MainHeader from "./main-header";

function LayoutWrapper({children}) {
  return (
    <>
      <MainHeader />
      <main>
        {children}
      </main>
    </>
  )
}

export default LayoutWrapper;
