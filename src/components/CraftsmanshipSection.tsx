import { useInView } from '../hooks/useInView';
import { craftsmanshipDetails } from '../data/mockData';

const CraftsmanshipSection = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-espresso text-ivory">
      {/* Section header */}
      <div
        ref={headerRef}
        className={`text-center mb-12 md:mb-16 px-6 transition-all duration-800 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="font-accent text-[9px] tracking-wide-editorial uppercase text-warm-gray block mb-3">
          Craftsmanship
        </span>
        <div className="separator mx-auto mb-6 !bg-warm-gray/50" />
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-ivory tracking-wide">
          The Art of Detail
        </h2>
      </div>

      {/* Detail grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto"
      >
        {craftsmanshipDetails.map((detail, index) => (
          <div
            key={index}
            className={`transition-all duration-800 ${
              gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="img-zoom aspect-[3/2] mb-5">
              <img
                src={detail.image}
                alt={detail.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {detail.title && (
              <h3 className="font-accent text-[10px] tracking-editorial uppercase text-warm-gray mb-2">
                {detail.title}
              </h3>
            )}
            {detail.description && (
              <p className="font-display text-base md:text-lg text-ivory/80 leading-relaxed">
                {detail.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
