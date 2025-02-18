import { useState } from 'react';
import './App.css';

function App() {
  // State for BMI Calculator
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');


  // Logic : 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (weight === '' || height === '') {
      setMessage('Please enter valid weight and height.');
      return;
    }

    // Convert weight and height to numbers
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || heightNum <= 0 || weightNum <= 0) {
      setMessage('Invalid input. Please enter numeric values.');
      return;
    }

    // BMI formula: weight (lbs) / height (inches)^2 * 703
    const bmiValue = (weightNum / (heightNum * heightNum)) * 703;
    setBmi(bmiValue.toFixed(2));

    // Setting the result message
    if (bmiValue < 18.5) {
      setMessage('You are underweight.');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage('You have a normal weight.');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage('You are overweight.');
    } else {
      setMessage('You are obese.');
    }
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <h2>BMI Calculator</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Weight (lbs) :</label>
              <input
                type="text"
                placeholder="Enter weight value :"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div>
              <label>Height (inches) : </label>
              <input
                type="text"
                placeholder="Enter height value"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button className="btn btn-outline" onClick={() => window.location.reload()} type="button">
                Reload
              </button>
            </div>

            <div className="center">
              <h3>Your BMI is: {bmi ? bmi : '--'}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
