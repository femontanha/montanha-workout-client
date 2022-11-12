import { useState } from 'react'
import axios from 'axios'

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
    <div>
      <h2>Create new Exercise</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Sets</label>
        <input
          type="text"
          value={sets}
          onChange={e => setSets(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Reps</label>
        <input
          type="text"
          value={reps}
          onChange={e => setReps(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Weight</label>
        <input
          type="text"
          value={weight}
          onChange={e => setWeight(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Unit</label>
        <input
          type="text"
          value={unit}
          onChange={e => setUnit(e.target.value)}
        />
      </div>
      <div>
        <label>Status</label>
        <input
          type="text"
          value={status}
          onChange={e => setStatus(e.target.value)}
        />
      </div>
      <div>
        <label>Type</label>
        <input
          type="text"
          value={type}
          onChange={e => setType(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Create</button>
    </div>
  )
}

export default CreateExercise
