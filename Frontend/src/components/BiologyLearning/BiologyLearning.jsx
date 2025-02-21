import React, { useState } from 'react';
import './BiologyLearning.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Skeleton from '../../Learning/Skeleton/Skeleton';

const BiologyLearning = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);
  const [progress, setProgress] = useState(10);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  return (
    <div>
    <div className="biology-learning-container">
      <div className="left-bio">
        <Skeleton />
      </div>

      <div className="right-bio">
        <h4>📖 Course Contents</h4>

        <div className="sub-div">
          <h5 onClick={() => toggleSection(1)}>
            Human Body and its Movements {openSection === 1 ? '▲' : '▼'}
          </h5>
          {openSection === 1 && (
            <div className="content">
              <p onClick={() => navigate('/learn/subjects/biology/ballSocketJoint')}>⚙️ Ball and Socket Joints</p>
              <p onClick={() => navigate('/learn/subjects/biology/boneOfTheHand')}>🔄 Bone of the Hand</p>
              <p onClick={() => navigate('/learn/subjects/biology/hingeJoint')}>🔩 Hinge Joints</p>
              <p onClick={() => navigate('/learn/subjects/biology/ribCage')}>🛠️ Rib Cage</p>
              <p onClick={() => navigate('/learn/subjects/biology/backBone')}>🛠️ Back Bone</p>
            </div>
          )}
        </div>

        <div className="progress-bar">
          <p>📊 Course Completion: <strong>{progress}%</strong></p>
          <progress value={progress} max="100"></progress>
        </div>
      </div>

      {/* 📜 Text from Word File - Below Skeleton & Course Contents */}
      
    </div>

    <div className="biology-text">
        <h2>📖 Chapter 8: Body Movements</h2>

        <h3>🧠 Key Concepts</h3>
        <ul>
          <li>Movements in Humans & Animals</li>
          <li>Types of Joints & Their Functions</li>
          <li>Skeleton System & Its Importance</li>
          <li>How Different Animals Move</li>
        </ul>

        <h3>1️⃣ Human Body & Its Movements</h3>
        <p>Our body can move in different ways using bones, joints, and muscles.</p>
        <p>Some movements happen while staying in one place (blinking, breathing), while others involve movement from place to place (walking, running).</p>

        <h3>🔗 Types of Joints & Their Functions</h3>
        <table>
          <thead>
            <tr>
              <th>Joint Type</th>
              <th>Example</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ball & Socket Joint</td>
              <td>Shoulder, Hip</td>
              <td>Moves in all directions</td>
            </tr>
            <tr>
              <td>Hinge Joint</td>
              <td>Knee, Elbow</td>
              <td>Moves back and forth like a door</td>
            </tr>
            <tr>
              <td>Pivotal Joint</td>
              <td>Neck</td>
              <td>Allows partial rotation</td>
            </tr>
            <tr>
              <td>Fixed Joint</td>
              <td>Skull</td>
              <td>No movement</td>
            </tr>
          </tbody>
        </table>

        <h3>💀 Skeleton System & Its Importance</h3>
        <p>The skeleton is made of bones and cartilage. It:</p>
        <ul>
          <li>✅ Gives shape to the body</li>
          <li>✅ Protects internal organs (like the rib cage protects the heart & lungs)</li>
          <li>✅ Helps in movement with the help of muscles</li>
        </ul>

        <h3>🦶 How Different Animals Move? 🐦</h3>
        <table>
          <thead>
            <tr>
              <th>Animal</th>
              <th>Movement Type</th>
              <th>How They Move?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fish 🐠</td>
              <td>Swimming</td>
              <td>Streamlined body helps in water</td>
            </tr>
            <tr>
              <td>Birds 🐦</td>
              <td>Flying & Walking</td>
              <td>Hollow bones make them lightweight</td>
            </tr>
            <tr>
              <td>Snakes 🐍</td>
              <td>Slithering</td>
              <td>Long backbone & muscles push forward</td>
            </tr>
            <tr>
              <td>Earthworms 🪱</td>
              <td>Contracting & Expanding</td>
              <td>Use tiny bristles for grip</td>
            </tr>
          </tbody>
        </table>

        <h3>📝 Summary</h3>
        <ul>
          <li>✔ Joints help in movement (Ball & Socket, Hinge, Pivot, Fixed).</li>
          <li>✔ Skeleton gives structure & protection (Skull, Rib Cage, Spine).</li>
          <li>✔ Muscles move bones by contracting & relaxing.</li>
          <li>✔ Animals move differently based on body structure (Flying, Walking, Swimming, Slithering).</li>
        </ul>
      </div>

    </div>
  );
};

export default BiologyLearning;
