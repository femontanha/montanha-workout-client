import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import styles from './CreateExercise.module.css'

const CreateExercise = () => {
  const [name, setName] = useState('');
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async () => {
    const response = await axios.post('/api/exercise', {
      name,
      sets,
      reps,
      weight,
      unit,
      status,
      type,
    });
    console.log(response.data);
  }

  return (
    <>
      <Head>
        <title>Add new</title>
      </Head>
      <Header title="Add new">
        <Link href="/exercises">Back</Link>
      </Header>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Name</label>
          <input
            className={styles.input}
            placeholder="eg: Remada Máquina"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Sets</label>
          <input
            className={styles.input}
            type="text"
            value={sets}
            onChange={e => setSets(parseFloat(e.target.value))}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Reps</label>
          <input
            className={styles.input}
            type="text"
            value={reps}
            onChange={e => setReps(parseFloat(e.target.value))}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Weight</label>
          <input
            className={styles.input}
            type="text"
            value={weight}
            onChange={e => setWeight(parseFloat(e.target.value))}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Unit</label>
          <input
            placeholder="eg: kg"
            className={styles.input}
            type="text"
            value={unit}
            onChange={e => setUnit(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Status</label>
          <input
            placeholder="eg: moderate"
            className={styles.input}
            type="text"
            value={status}
            onChange={e => setStatus(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Type</label>
          <input
            placeholder="eg: legs"
            className={styles.input}
            type="text"
            value={type}
            onChange={e => setType(e.target.value)}
          />
        </div>
        <div className={styles.wrapButtons}>
          <button onClick={handleSubmit} className={styles.button}>Save</button>
        </div>
        
    </>
  )
}

export default CreateExercise
