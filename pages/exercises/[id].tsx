import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import { IExercise, getExerciseById } from '../../lib/exercises'

import styles from './ExerciseEdit.module.css'

const Exercise = ({ exercise }: { exercise: IExercise }) => {
  const router = useRouter()
  const { id } = router.query

  const [name, setName] = useState(exercise.name);
  const [sets, setSets] = useState(exercise.sets);
  const [reps, setReps] = useState(exercise.reps);
  const [weight, setWeight] = useState(exercise.weight);
  const [unit, setUnit] = useState(exercise.unit);
  const [status, setStatus] = useState(exercise.status);
  const [type, setType] = useState(exercise.type);

  const exerciseTypes = ['triceps', 'chest', 'shoulders', 'biceps', 'back', 'legs'];
  const exerciseStatus = ['soft', 'moderate', 'hard'];

  const handleUpdate = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.put('/api/exercise', {
      id: Number(id),
      name,
      sets,
      reps,
      weight,
      unit,
      status,
      type,
    });
    router.push('/exercises');
  }

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await axios.delete('/api/exercise', { data: {id: Number(id) }});
    router.push('/exercises');
  }

  return (
    <>
      <Head>
        <title>Edit Exercise</title>
      </Head>
      <Header title={exercise.name}>
        <Link href="/exercises">Back</Link>
      </Header>
      <form onSubmit={handleUpdate}>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Name</label>
          <input type="text" className={styles.input} name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Type</label>
          <select className={styles.select} value={type} onChange={(e) => setType(e.target.value)}>
            {exerciseTypes.map(etype => <option className={styles.option} key={etype}>{etype}</option>)}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Sets</label>
          <input type="number" className={styles.input} name="sets" value={sets} onChange={(e) => setSets(parseFloat(e.target.value))} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Reps</label>
          <input type="number" className={styles.input} name="reps" value={reps} onChange={(e) => setReps(parseFloat(e.target.value))} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Weight</label>
          <input type="number" className={styles.input} name="weight" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Unit</label>
          <input type="text" className={styles.input} name="unit" value={unit} onChange={(e) => setUnit(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Status</label>
          <select className={styles.select} value={status} onChange={(e) => setStatus(e.target.value)}>
            {exerciseStatus.map(estatus => <option className={styles.option} key={estatus}>{estatus}</option>)}
          </select>
        </div>
        <div className={styles.wrapButtons}>
          <button type="submit" className={styles.button}>Save</button>
          <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id;
  const exercise = await getExerciseById(id as string);

  return {
    props: {
      exercise,
    },
  }
}

export default Exercise
