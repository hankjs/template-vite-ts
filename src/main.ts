import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { setupHearts }from'./snippets/hearts/index.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``
setupHearts(document.querySelector<HTMLButtonElement>('#hearts')!)

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
