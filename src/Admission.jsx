import React from 'react';
import admissionData from './data.json';
import procedureData from './procedure.json';

const Admission = () => {
  return (
    <section>
      <div>
        <h3 style={{ textAlign: 'center' }}>Ilocos Sur Polytechnic State College</h3>
        <p style={{ textAlign: 'center' }}>Quirino, Tagudin, Ilocos Sur</p>

        <img src="/steps.png" className='image' alt="Steps" style={{ display: 'block', margin: 'auto', width: '50%' }} />

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Admission Requirements</h3>
              {admissionData.map(({ id, title, requirments }) => (
                <div key={id} className="border p-4 m-2">
                  <h3>{title}</h3>
                  <hr />
                  <ul>
                    {requirments.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="col-md-6">
              <h3>Enrollment Procedure</h3>
              {procedureData && procedureData.map(({ id, requirements, Office, Personnel, Name }) => (
                <div key={id} className="border p-4 m-2">
                  <h3>{Office}</h3>
                  <hr />
                  <ul>
                    {requirements && requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                  <p><strong>Personnel:</strong> {Personnel && Personnel.join(', ')}</p>
                  {Name && <p><strong>Name:</strong> {Name.join(', ')}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
