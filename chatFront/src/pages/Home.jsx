import React from 'react';

const Home = () => {
  return (
    <div 
      style={{
        height: '100vh',
        margin: 0,
        padding: 0,
        backgroundImage: "url('/cube.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <div >
        <h2 
          style={{
            fontSize: '6rem', // text-6xl
            padding: '0.75rem 0', // py-3
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // bg-white bg-opacity-80
            color: '#4A5568', // text-gray-700
            fontWeight: 'bold', // font-bold
            borderRadius: '0.75rem', // rounded-lg
            fontFamily: 'Anek', // fontAnek
            
          }}
        >
          ✋Welcome✋
        </h2>
        <button 
          style={{
            padding: '0.75rem', // p-3
            backgroundColor: '#2B6CB0', // bg-blue-600
            color: '#FFFFFF', // text-white
            fontSize: '1.875rem', // text-3xl
            fontWeight: 'bold', // font-blod (виправлено на font-bold)
            borderRadius: '0.75rem', // rounded-lg
            marginTop: '0.5rem', // mt-2
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2B6AB0'} // hover:bg-blue-800
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2B6CB0'} // revert color
        >
          Login / Register
        </button>
      </div>
    </div>
  );
};

export default Home;


// інший варіант
// const Home = () => {
//     return (
//       <div className='flex items-center justify-center h-screen bg-gray-100'>
//           <div style={{backgroundImage: "url('/cube.jpg')"}}
//           className='bg-cover w-2/4 h-[calc(100vh-60px)]'>
//               <div>
//                   <h2>Welcome</h2>
//                   <button>Login / Register</button>
//               </div>
//           </div>
//       </div>
//     )
//   }
  
