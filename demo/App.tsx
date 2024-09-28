import {FixedFooterLayout} from 'reaqt'

function App() {

  return (
    <FixedFooterLayout
      mainContent={<div>Hello</div>}
      footerContent={<div>footer</div>}
      footerHeight={50}
    />
  )
}

export default App
