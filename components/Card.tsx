import { useState, useId } from 'react'
import styles from './Card.module.css'

const Card = () => {

  const [weight, setWeight] = useState(10);
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(12);
  const [status, setStatus] = useState(['soft', 'moderate', 'hard']);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        Leg Press
      </h2>

      <div className={styles.block}>
        <button className={styles.button} onClick={() => setWeight(weight - 1)}>-</button>
        <input
          className={styles.input}
          type="text"
          value={weight}
          readOnly
        />
        <button className={styles.button} onClick={() => setWeight(weight + 1)}>+</button>
        <div className={styles.unit}>kg</div>
      </div>

      <div className={styles.block}>
        <button className={styles.button} onClick={() => setSets(sets - 1)}>-</button>
        <input
          className={styles.input}
          type="text"
          value={sets}
          readOnly
        />
        <button className={styles.button} onClick={() => setSets(sets + 1)}>+</button>
        <div className={styles.unit}>reps</div>
      </div>

      <div className={styles.block}>
        <button className={styles.button} onClick={() => setReps(reps - 1)}>-</button>
        <input
          className={styles.input}
          type="text"
          value={reps}
          readOnly
        />
        <button className={styles.button} onClick={() => setReps(reps + 1)}>+</button>
        <div className={styles.unit}>sets</div>
      </div>

      <div className={styles.block}>
        <select className={styles.statusSelect} defaultValue="moderate" onChange={(e) => setStatus(e.target.value)}>
          {status.map(values => <option key={values}>{values}</option>)}
        </select>
        <label className={styles.statusLabel}>status</label>
      </div>
    </div>
  );
}

export default Card;
