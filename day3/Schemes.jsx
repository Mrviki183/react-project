import React from 'react';
// import '/src/assets/css/farmersloanschemes.css'; // Import your CSS file if needed

const FarmersLoanSchemes = () => {
  const loanSchemes = [
    {
      id: 1,
      title: 'Crop Loan Scheme',
      // description: 'Financial support for purchasing seeds, fertilizers, and other inputs for crop cultivation.',
      image: 'https://res.cloudinary.com/dhrg61rig/image/upload/v1708742962/f2_bhyffn.jpg',
    },
    {
      id: 2,
      title: 'Kerla startup',
      // description: 'Loans for purchasing and maintaining livestock, such as cattle, poultry, and goats.',
      image: 'https://res.cloudinary.com/dhrg61rig/image/upload/v1708753536/f5_amcxmx.avif' // Adjust the image path
    },
    {
      id: 3,
      title: 'Livestock Development Loan',
      // description: 'Loans for purchasing and maintaining livestock, such as cattle, poultry, and goats.',
      image: 'https://res.cloudinary.com/dhrg61rig/image/upload/v1708748550/f4_oisrp1.webp' // Adjust the image path
    },
    {
      id: 4,
      title: 'agritech startup',
      // description: 'Loans for purchasing and maintaining livestock, such as cattle, poultry, and goats.',
      image: 'https://res.cloudinary.com/dhrg61rig/image/upload/v1708753866/f7_ymejeh.jpg' // Adjust the image path
    },
    {
      id: 5,
      title: 'Bank of baroda',
      // description: 'Loans for purchasing and maintaining livestock, such as cattle, poultry, and goats.',
      image: 'https://res.cloudinary.com/dhrg61rig/image/upload/v1708754141/f8_u8vz4l.png' // Adjust the image path
    },
    {
      id: 6,
      title: 'agricultural jewel scheme',
      // description: 'Loans for purchasing and maintaining livestock, such as cattle, poultry, and goats.',
      image: 'https://res.cloudinary.com/dhrg61rig/image/upload/v1708754815/f10_lvpufj.jpg' // Adjust the image path
    },
    // Add more loan schemes as needed
  ];

  // Define styles for specific image IDs
  const imageStyles = {
    1: { width: '300px', height: '250px' },
    2: { width: '300px', height: '250px' },
    3: { width: '300px', height: '250px' },
    4: { width: '300px', height: '250px' },
    5: { width: '300px', height: '250px' },
    6: { width: '300px', height: '250px' },
    // Add more styles for other IDs as needed
  };

  return (
    <div className="farmers-loan-schemes-container">
      <h2>Farmer's Loan Schemes</h2>
      <div className="loan-schemes" >
        {loanSchemes.map((scheme) => (
          <div key={scheme.id} className="loan-card">
            <img
              src={scheme.image}
              alt={scheme.title}
              style={imageStyles[scheme.id] || {}} // Use the style based on the ID or an empty object
            />
            <h3>{scheme.title}</h3>
            <p>{scheme.description}</p>
            {/* Add more details or buttons if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmersLoanSchemes;
