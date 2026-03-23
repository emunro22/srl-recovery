import styles from './Ticker.module.css'

const items = [
  '24/7 Emergency Recovery',
  'Glasgow & Surrounding Areas',
  'Cars · Vans · Commercial',
  'Fault & Non-Fault Accidents',
  'Rapid Response Guaranteed',
  'Fully Insured Service',
  'No Upfront Accident Claim Cost',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
