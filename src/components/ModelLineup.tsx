import { useInView } from '../hooks/useInView';
import { modelLineup, brandStory } from '../data/mockData';

const ModelLineup = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });
  const { ref: badgeRef, isInView: badgeInView } = useInView({ threshold: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-cream">
      {/* Section header */}
      <div
        ref={headerRef}
        className={`text-center mb-12 md:mb-16 px-6 transition-all duration-800 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="font-accent text-[9px] tracking-wide-editorial uppercase text-warm-gray block mb-3">
          The Lookbook
        </span>
        <div className="separator mx-auto mb-6" />
        <h2 className="font-display text-2xl md:text-3xl text-charcoal tracking-wide">
          Spring / Summer
        </h2>
      </div>

      {/* Model grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto"
      >
        {modelLineup.map((model, index) => (
          <div
            key={index}
            className={`group transition-all duration-700 ${
              gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="img-zoom aspect-[3/4] mb-3">
              <img
                src={model.image}
                alt={model.look || `Look ${index + 1}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <span className="font-accent text-[9px] tracking-editorial uppercase text-warm-gray block">
                {model.name}
              </span>
              {model.look && (
                <span className="font-display text-sm text-stone mt-0.5 block">
                  {model.look}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 120 Years badge */}
      <div
        ref={badgeRef}
        className={`flex justify-center mt-16 md:mt-20 transition-all duration-1000 ${
          badgeInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border border-sand flex flex-col items-center justify-center bg-ivory/80">
          <span className="font-display text-3xl md:text-4xl text-charcoal leading-none">
            {brandStory.yearsOfCraft}
          </span>
          <span className="font-accent text-[7px] tracking-editorial uppercase text-warm-gray mt-1">
            {brandStory.yearsLabel}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ModelLineup;
