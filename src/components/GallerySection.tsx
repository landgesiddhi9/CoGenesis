import { useInView } from '../hooks/useInView';
import { galleryImages, architecturalCampaign } from '../data/mockData';

const GallerySection = () => {
  const { ref: row1Ref, isInView: row1InView } = useInView({ threshold: 0.1 });
  const { ref: row2Ref, isInView: row2InView } = useInView({ threshold: 0.1 });
  const { ref: archRef, isInView: archInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-24 lg:py-32">
      {/* Three-column row 1 */}
      <div
        ref={row1Ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto mb-3 md:mb-4"
      >
        {galleryImages.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className={`img-zoom aspect-[3/4] transition-all duration-800 ${
              row1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Three-column row 2 - offset layout */}
      <div
        ref={row2Ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto mb-3 md:mb-4"
      >
        {galleryImages.slice(3, 6).map((image, index) => (
          <div
            key={index}
            className={`img-zoom ${
              index === 1 ? 'aspect-[3/4] md:aspect-[4/3]' : 'aspect-[3/4]'
            } transition-all duration-800 ${
              row2InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Full-width architectural campaign */}
      <div
        ref={archRef}
        className={`relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden transition-all duration-1000 ${
          archInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={architecturalCampaign.image.src}
          alt={architecturalCampaign.image.alt}
          className={`w-full h-full object-cover transition-transform duration-[2500ms] ease-out ${
            archInView ? 'scale-100' : 'scale-105'
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-deep-brown/20" />
      </div>
    </section>
  );
};

export default GallerySection;
