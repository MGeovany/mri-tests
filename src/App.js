import React from 'react'
import './App.css'
import { MriUnits } from './components/mri-list/MriUnits'
import { Header } from 'semantic-ui-react'

function App() {
  return (
    <>
      <div className='App'>
        <Header size='huge' color='grey'>
          MRI Units - Tests 🧪
        </Header>
        <MriUnits />
      </div>
    </>
  )
}

export default App
