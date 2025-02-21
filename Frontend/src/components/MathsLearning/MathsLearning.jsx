import React from 'react';
import './MathsLearning.css';
import { assets } from '../../assets/assets';

const MathsLearning = () => {
  return (
    <div className='maths-container'>
      <h2>Knowing our Numbers</h2>
      <div className='maths-learn'>

        {/* Video Section */}
        <div className='maths-video'>
          <video width="640" height="360" controls>
            <source src={assets.video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Extracted PDF Text Section */}
      <div className="maths-text">
        <h3>Chapter 1: Knowing Our Numbers - Class 6 Mathematics Notes</h3>

        <h4>Introduction</h4>
        <p>Numbers help us count, compare, and perform calculations in daily life. This chapter introduces the concepts of large numbers, place value, estimation, and Roman numerals.</p>

        <h4>1. Comparing Numbers</h4>
        <ul>
          <li><strong>Bigger numbers have more digits.</strong> Example: <span className="highlight">786</span> is greater than <span className="highlight">78</span>.</li>
          <li>To compare numbers:
            <ul>
              <li>Count the number of digits.</li>
              <li>If digits are the same, compare the leftmost digits.</li>
              <li>Example: <span className="highlight">8,456 7 7,999</span> (since 8 is greater than 7).</li>
            </ul>
          </li>
        </ul>

        <h4>2. Large Numbers & Place Value</h4>
        <ul>
          <li><strong>Indian System of Numeration:</strong>
            <ul>
              <li>Places: Ones, Tens, Hundreds, Thousands, Ten Thousands, Lakhs, Ten Lakhs, Crores</li>
              <li>Example: <span className="highlight">53,24,678</span> (Fifty-three lakh, twenty-four thousand, six hundred seventy-eight)</li>
            </ul>
          </li>
          <li><strong>International System of Numeration:</strong>
            <ul>
              <li>Places: Ones, Tens, Hundreds, Thousands, Ten Thousands, Hundred Thousands, Millions, Billions</li>
              <li>Example: <span className="highlight">5,324,678</span> (Five million, three hundred twenty-four thousand, six hundred seventy-eight)</li>
            </ul>
          </li>
          <li><strong>Tip:</strong> Commas are placed differently in the Indian and International systems.</li>
        </ul>

        <h4>3. Estimation & Rounding Off</h4>
        <ul>
          <li><strong>Estimation helps in quick calculations</strong> by rounding numbers.</li>
          <li><strong>Rounding Rules:</strong>
            <ul>
              <li>Less than 5 → Round down (e.g., <span className="highlight">73 → 70</span>).</li>
              <li>5 or more → Round up (e.g., <span className="highlight">78 → 80</span>).</li>
            </ul>
          </li>
          <li>Used in real life for budgeting, distance estimation, and grocery calculations.</li>
        </ul>

        <h4>4. Roman Numerals</h4>
        <ul>
          <li><strong>Symbols:</strong> I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000</li>
          <li><strong>Rules:</strong>
            <ul>
              <li>Smaller before larger → <span className="highlight">Subtract</span> (IV = 4, IX = 9).</li>
              <li>Smaller after larger → <span className="highlight">Add</span> (VI = 6, XI = 11).</li>
              <li>No symbol repeats more than 3 times (XXX = 30 but 40 = XL, not XXXX).</li>
            </ul>
          </li>
        </ul>

        <h4>5. Use of Brackets (BODMAS Rule)</h4>
        <ul>
          <li><strong>Order of operations:</strong> BODMAS</li>
          <li>Brackets → Orders (exponents) → Division → Multiplication → Addition → Subtraction</li>
          <li>Example: <span className="highlight">(5 + 3) × 2 = 8 × 2 = 16</span></li>
        </ul>

        <h4>6. Word Problems on Large Numbers</h4>
        <ul>
          <li>Used in population count, distances, business transactions, and data analysis.</li>
          <li>Example:
            <ul>
              <li>The population of a city is <span className="highlight">27,34,865</span>. Round it to the nearest lakh.</li>
              <li>Answer: <span className="highlight">27,00,000</span> (Nearest lakh).</li>
            </ul>
          </li>
        </ul>

        <h4>Summary</h4>
        <p>✔️ Compare numbers based on digits.<br />
        ✔️ Learn place values in the Indian & International system.<br />
        ✔️ Use estimation for quick calculations.<br />
        ✔️ Understand Roman numerals and their rules.<br />
        ✔️ Apply the BODMAS rule for correct operations.</p>
      </div>
    </div>
  );
};

export default MathsLearning;
