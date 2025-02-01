import profile from '../assets/profile.jpg'

const Team = () => {
    return (
      <section className="py-20 bg-white shadow-xl rounded-lg mx-4 my-8" id="team">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Meet Our Founder</h2>
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <img
              src= {profile}
              className="w-48 h-48 rounded-full border-4  mb-6 md:mb-0 md:mr-8"
            />
            <div className="text-center md:text-left max-w-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Lucky Nwanekwu</h3>
              <p className="text-lg text-gray-600">
                Lucky Nwanekwu is the visionary founder behind 329 Capital. With extensive experience in the crypto industry, Lucky leads the firm with a commitment to providing transparent, strategic, and expert guidance to clients, ensuring they navigate the dynamic crypto landscape with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;