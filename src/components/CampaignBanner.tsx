import { useInView } from '../hooks/useInView';
import { campaignData } from '../data/mockData';

const CampaignBanner = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden"
    >
      <img
        src={campaignData.image.src}
        alt={campaignData.image.alt}
        className={`w-full h-full object-cover transition-transform duration-[2500ms] ease-out ${
          isInView ? 'scale-100' : 'scale-110'
        }`}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/30 via-transparent to-transparent" />

      {/* Campaign text overlay */}
      {campaignData.title && (
        <div
          className={`absolute bottom-10 md:bottom-16 left-6 md:left-12 lg:left-16 transition-all duration-1000 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-accent text-[9px] tracking-wide-editorial uppercase text-white/70 block mb-3">
            {campaignData.subtitle}
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white tracking-wide">
            {campaignData.title}
          </h2>
        </div>
      )}
    </section>
  );
};

export default CampaignBanner;
