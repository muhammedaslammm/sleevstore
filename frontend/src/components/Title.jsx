const Title = ({ title }) => {
  return (
    <div className="section__title ">
      <p className="font-semibold text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] text-center">
        {title}
      </p>
    </div>
  );
};

export default Title;
