import { Children } from 'react'
import { motion } from 'framer-motion'
import { Logo } from '@pmndrs/branding'
import { useStore } from './store'

const container = {
  hidden: { opacity: 0, height: 0, transition: { staggerChildren: 0.05 } },
  show: {
    opacity: 1,
    height: 'auto',
    transition: { when: 'beforeChildren', staggerChildren: 0.05 }
  }
}

const item = {
  hidden: { opacity: 0, y: '100%' },
  show: { opacity: 1, y: 0 }
}

function List({ children, open }) {
  return (
    <motion.ul variants={container} initial="hidden" animate={open ? 'show' : 'hidden'}>
      {Children.map(children, (child) => (
        <li>
          <motion.div variants={item}>{child}</motion.div>
        </li>
      ))}
    </motion.ul>
  )
}

export function Overlay() {
  const state = useStore()
  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <a href="https://modere.studio/" style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
          PIERRE
          <br />
          MODERE
        </a>
        {/* <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>02/02/2023</div> */}
      </div>
      {/* <Logo style={{ position: 'absolute', top: 40, left: 40, width: 30 }} /> */}
      <div className="info">
        <h1>histoiresdeparfums</h1>
        <List open={state.open}>
          <h3>
            <span className="accent">Ceci n'est pas un flacon bleu</span>
          </h3>
          {/* <h4>Running Shoes</h4> */}
          <p className="price">195.00€</p>
          <p>
            Ceci est le parfum d’un magnétique Aldéhyde, le signal hypnotique d’une Orange Bigarade au plaisir fantasmé. Un tatouage au
            Patchouli sur une peau brûlante de désir. L’émotion ambrée d’un abîme profond.
          </p>
        </List>
      </div>
    </>
  )
}
