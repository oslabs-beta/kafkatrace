import ReactParticles from "./ReactParticles";

export default function MainBanner () {
    return (
      <section className='relative text-center my-12 npmtext-white overflow-hidden'>
        <>
        <ReactParticles />
        </>
          <h2 className='md:text-5xl text-3xl mt-24 font-akkurat text-white font-bold mb-4 duration-700'>
            Welcome to KafkaTrace
          </h2>
          <p className='md:text-2xl text-lg font-akkurat text-white  mb-12'>
            Streamline Apache Kafka monitoring with OpenTelemetry
          </p>
          <div className='transform transition-transform mb-24 duration-700 hover:scale-110'>
            <a href='https://www.npmjs.com/package/kafkatrace' target='_blank' rel='noopener noreferrer'className='font-akkurat text-white border-white border px-8 py-3 rounded-xl'>
              Learn More
            </a>
          </div>
      </section>
    );
};