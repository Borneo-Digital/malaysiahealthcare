"use client";

export default function MYMT2026OurPartners() {
  return (
    <section 
      className="py-20 bg-gray-50 relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/home4/butterflies.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for high transparency */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Our Partners
          </h2>
          
          {/* Description */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-gray-700">
              We&apos;re thrilled to collaborate with trailblazers in healthcare and tourism. Check back soon to see who&apos;s joining the movement.
            </p>
            
            <p className="text-gray-700">
              Interested in becoming our partner? Reach out to{' '}
              <a 
                href="mailto:mymtsecretariat@mhtc.org.my"
                className="text-red-600 hover:text-red-700 font-medium underline transition-colors duration-300"
              >
                mymtsecretariat@mhtc.org.my
              </a>
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}