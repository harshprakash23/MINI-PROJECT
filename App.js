import React, { useState } from 'react';
import './App.css';
import navbar from './navbar.js'

const App = () => {
  const [score, setScore] = useState(0);

  const submitQuiz = () => {
    let newScore = 0;

    const q1_answer = document.querySelector('input[name="q1"]:checked');
    if (q1_answer && q1_answer.value === 'China') {
      newScore++;
    }

    const q2_answer = document.querySelector('input[name="q2"]:checked');
    if (q2_answer && q2_answer.value === 'Bhutan') {
      newScore++;
    }

    const q3_answer = document.querySelector('input[name="q3"]:checked');
    if (q3_answer && q3_answer.value === 'Japan') {
      newScore++;
    }

    const q4_answer = document.querySelector('input[name="q4"]:checked');
    if (q4_answer && q4_answer.value === 'Pakistan') {
      newScore++;
    }

    const q5_answer = document.querySelector('input[name="q5"]:checked');
    if (q5_answer && q5_answer.value === 'Kathmandu') {
      newScore++;
    }

    const q6_answer = document.querySelector('input[name="q6"]:checked');
    if (q6_answer && q6_answer.value === 'India') {
      newScore++;
    }

    const q7_answer = document.querySelector('input[name="q7"]:checked');
    if (q7_answer && q7_answer.value === 'India') {
      newScore++;
    }

    const q8_answer = document.querySelector('input[name="q8"]:checked');
    if (q8_answer && q8_answer.value === 'Nepal') {
      newScore++;
    }

    const q9_answer = document.querySelector('input[name="q9"]:checked');
    if (q9_answer && q9_answer.value === 'Sri Lanka') {
      newScore++;
    }

    const q10_answer = document.querySelector('input[name="q10"]:checked');
    if (q10_answer && q10_answer.value === 'India') {
      newScore++;
    }

    setScore(newScore);
    alert(`Your score: ${newScore}/10`);
  };

  return (
    <div>
      <h1><u>Assessment</u></h1>

      <div className="question">
        <p>1. Which of the following countries is not located in South Asia?</p>
        <div className="options">
          <input type="radio" id="q1_option1" name="q1" value="India" />
          <label htmlFor="q1_option1">India</label><br />
          <input type="radio" id="q1_option2" name="q1" value="China" />
          <label htmlFor="q1_option2">China</label><br />
          <input type="radio" id="q1_option3" name="q1" value="Sri Lanka" />
          <label htmlFor="q1_option3">Sri Lanka</label><br />
          <input type="radio" id="q1_option4" name="q1" value="Nepal" />
          <label htmlFor="q1_option4">Nepal</label>
        </div>
      </div>
      <div className="question">
        <p>2. Which South Asian country is known as the "Land of the Thunder Dragon"?</p>
        <div className="options">
        <input type="radio" id="q2_option1" name="q2" value="India"/>
        <label for="q2_option1">India</label><br/>
        <input type="radio" id="q2_option2" name="q2" value="Bangladesh"/>
        <label for="q2_option2">Bangladesh</label><br/>
        <input type="radio" id="q2_option3" name="q2" value="Bhutan"/>
        <label for="q2_option3">Bhutan</label><br/>
        <input type="radio" id="q2_option4" name="q2" value="Pakistan"/>
        <label for="q2_option4">Pakistan</label>
      </div>
    </div>
    <div class="question">
  <p>3. Which country is known as the "Land of the Rising Sun"?</p>
  <div class="options">
    <input type="radio" id="q3_option1" name="q3" value="Japan"/>
    <label for="q3_option1">Japan</label><br/>
    <input type="radio" id="q3_option2" name="q3" value="Thailand"/>
    <label for="q3_option2">Thailand</label><br/>
    <input type="radio" id="q3_option3" name="q3" value="Singapore"/>
    <label for="q3_option3">Singapore</label><br/>
    <input type="radio" id="q3_option4" name="q3" value="Malaysia"/>
    <label for="q3_option4">Malaysia</label>
  </div>
</div>

<div class="question">
    <p>4. Which South Asian country is known as the "Land of the Pure"?</p>
    <div class="options">
      <input type="radio" id="q4_option1" name="q4" value="India"/>
      <label for="q4_option1">India</label><br/>
      <input type="radio" id="q4_option2" name="q4" value="Bangladesh"/>
      <label for="q4_option2">Bangladesh</label><br/>
      <input type="radio" id="q4_option3" name="q4" value="Sri Lanka"/>
      <label for="q4_option3">Sri Lanka</label><br/>
      <input type="radio" id="q4_option4" name="q4" value="Pakistan"/>
      <label for="q4_option4">Pakistan</label>
    </div>
  </div>
  
  
  <div class="question">
    <p>5. What is the capital city of Nepal?</p>
    <div class="options">
      <input type="radio" id="q5_option1" name="q5" value="Kathmandu"/>
      <label for="q5_option1">Kathmandu</label><br/>
      <input type="radio" id="q5_option2" name="q5" value="Dhaka"/>
      <label for="q5_option2">Dhaka</label><br/>
      <input type="radio" id="q5_option3" name="q5" value="Colombo"/>
      <label for="q5_option3">Colombo</label><br/>
      <input type="radio" id="q5_option4" name="q5" value="Islamabad"/>
      <label for="q5_option4">Islamabad</label>
    </div>
  </div>
  
 
  <div class="question">
    <p>6. Which South Asian country is known for the famous monument "Taj Mahal"?</p>
    <div class="options">
      <input type="radio" id="q6_option1" name="q6" value="India"/>
      <label for="q6_option1">India</label><br/>
      <input type="radio" id="q6_option2" name="q6" value="Bangladesh"/>
      <label for="q6_option2">Bangladesh</label><br/>
      <input type="radio" id="q6_option3" name="q6" value="Pakistan"/>
      <label for="q6_option3">Pakistan</label><br/>
      <input type="radio" id="q6_option4" name="q6" value="Sri Lanka"/>
      <label for="q6_option4">Sri Lanka</label>
    </div>
  </div>
  
  
  <div class="question">
    <p>7. Which South Asian country is known for its famous tea plantations in regions like Darjeeling and Assam?</p>
    <div class="options">
      <input type="radio" id="q7_option1" name="q7" value="Nepal"/>
      <label for="q7_option1">Nepal</label><br/>
      <input type="radio" id="q7_option2" name="q7" value="India"/>
      <label for="q7_option2">India</label><br/>
      <input type="radio" id="q7_option3" name="q7" value="Bangladesh"/>
      <label for="q7_option3">Bangladesh</label><br/>
      <input type="radio" id="q7_option4" name="q7" value="Sri Lanka"/>
      <label for="q7_option4">Sri Lanka</label>
    </div>
  </div>
  
  
  <div class="question">
    <p>8. Which South Asian country has the world's highest mountain, Mount Everest?</p>
    <div class="options">
      <input type="radio" id="q8_option1" name="q8" value="Nepal"/>
      <label for="q8_option1">Nepal</label><br/>
      <input type="radio" id="q8_option2" name="q8" value="India"/>
      <label for="q8_option2">India</label><br/>
      <input type="radio" id="q8_option3" name="q8" value="Pakistan"/>
      <label for="q8_option3">Pakistan</label><br/>
      <input type="radio" id="q8_option4" name="q8" value="Sri Lanka"/>
      <label for="q8_option4">Sri Lanka</label>
    </div>
  </div>
  
 
  <div class="question">
    <p>9. Which South Asian country is known as the "Land of a Thousand Lakes"?</p>
    <div class="options">
      <input type="radio" id="q9_option1" name="q9" value="India"/>
      <label for="q9_option1">India</label><br/>
      <input type="radio" id="q9_option2" name="q9" value="Bangladesh"/>
      <label for="q9_option2">Bangladesh</label><br/>
      <input type="radio" id="q9_option3" name="q9" value="Sri Lanka"/>
      <label for="q9_option3">Sri Lanka</label><br/>
      <input type="radio" id="q9_option4" name="q9" value="Nepal"/>
      <label for="q9_option4">Nepal</label>
    </div>
  </div>
  
  
  <div class="question">
    <p>10. Which South Asian country has the largest population?</p>
    <div class="options">
      <input type="radio" id="q10_option1" name="q10" value="India"/>
      <label for="q10_option1">India</label><br/>
      <input type="radio" id="q10_option2" name="q10" value="Bangladesh"/>
      <label for="q10_option2">Bangladesh</label><br/>
      <input type="radio" id="q10_option3" name="q10" value="Pakistan"/>
      <label for="q10_option3">Pakistan</label><br/>
      <input type="radio" id="q10_option4" name="q10" value="Sri Lanka"/>
      <label for="q10_option4">Sri Lanka</label>
    </div>
  </div>
  

      <button onClick={submitQuiz}>Submit</button>
    </div>
  );
};

export default App;