import { useState, useId } from 'react'
import styles from './Card.module.css'

type ExerciseProps = {
  name: string;
  sets: number;
  reps: number;
  weight: number;
  unit: string;
  status: string;
}

const Card = ({exercise}: {exercise: ExerciseProps}) => {

  const statusArr = ['soft', 'moderate', 'hard'];

  const [weight, setWeight] = useState(exercise.weight);
  const [sets, setSets] = useState(exercise.sets);
  const [reps, setReps] = useState(exercise.reps);
  const [status, setStatus] = useState(exercise.status);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(statusArr[e.target.selectedIndex]);
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {exercise.name}
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
        <div className={styles.unit}>{exercise.unit}</div>
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
        <select className={styles.statusSelect} value={status} onChange={handleSelectChange}>
          {statusArr.map(values => <option key={values}>{values}</option>)}
        </select>
        <label className={styles.statusLabel}>status</label>
      </div>
    </div>
  );
}

export default Card;