import React from 'react';
import './Certificates.css';
import cert1 from '../../assets/Certificates 1.jpg';
import cert2 from '../../assets/Certificate 2.jpg';
import cert3 from '../../assets/Certificate 3.jpg';

const Certificates = () => {
 const certificateData = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    image: cert1,
    description: 'Completed a Full Stack Web Development.',
    pdf: './../../../public/1000115331.pdf' 
  },
  {
    id: 2,
    title: 'UI/UX Masterclass',
    image: cert2,
    description: 'Hands-on advanced UI/UX training with projects.',
    pdf: './../../../public/certificate1.pdf'
  },
  {
    id: 3,
    title: 'Frontend Developer',
    image: cert3,
    description: 'Certified in modern UI/UX principles and design tools.',
    pdf: './../../../public/certificate2.pdf'
  }
];


  return (
    <section className="certificates">
      <div className="certificates-container">
        <h2><span>My</span> Certificates</h2>
        <p>Here are some of the certifications I’ve earned along my journey.</p>

        <div className="certificates-grid">
          {certificateData.map(cert => (
            <div key={cert.id} className="certificate-card">
              <img src={cert.image} alt={cert.title} />
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
                
                {/* View button */}
               <a href={cert.pdf} className="btn" download>
  Download PDF
</a>


                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
