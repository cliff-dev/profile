import programming from '../assets/Programming.png';

const cta = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
  <section className="rounded-lg  p-8" id="about">
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
      <img
        alt="Man"
        src={programming}
        className="aspect-square w-full rounded-lg object-cover"
      />

      <blockquote className="sm:col-span-2">
      <cite className="mb-2 inline-flex items-center not-italic">
          <span className="hidden h-px w-24 bg-green-500 sm:inline-block"></span>
          <p className="text-xl uppercase text-green-500 sm:ms-3">
            <strong>About Me</strong>
          </p>
        </cite>
        <p className="text-xl font-medium sm:text-xl text-green-600">
        Full Stack Developer creating responsive websites with a passion
        <br />   for building robust, scalable and user friendly applications.
        </p>

        
      </blockquote>
    </div>
  </section>
</div>
  );
};

export default cta;
