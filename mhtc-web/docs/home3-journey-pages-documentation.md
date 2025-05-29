# Home3 Journey Pages Documentation

This document outlines the structure and content for the Home3 journey pages:
- Pre-Arrival
- Arrival
- Treatment
- Post-Treatment

These pages will complement the main `home3/page.tsx` and provide a distinct user experience compared to `home2` journey pages. They will utilize components from `mhtc-web/components/home3/` where appropriate and introduce new components as needed, maintaining the `home3` design language which emphasizes interactivity, modern aesthetics, and potentially animations.

## Common Elements for All Home3 Journey Pages

- **Header**: Use `Header` from `@/components/home3/header`.
- **Footer**: Use `Footer` from `@/components/home3/footer`.
- **Navigation**: A new `Home3JourneyNavigation` component will be created. It will visually align with `home3`'s aesthetic (minimalist, modern, possibly animated transitions). It should clearly indicate the current stage and allow navigation to other stages. This component will be similar in purpose to `Home2JourneyNavigation` but styled for `home3`.
- **Container**: Use `Container` from `@/components/home3/ui/container` for consistent layout and spacing.
- **Responsive Design**: All sections must be fully responsive, adapting gracefully to various screen sizes.
- **Accessibility**: Adherence to WCAG AA guidelines is paramount.
- **Internationalization**: Content will be structured to facilitate easy translation and adaptation for different locales.
- **Visual Style**: Clean, spacious, with high-quality imagery and iconography consistent with `home3/page.tsx`. Focus on user experience with intuitive interactions.

## 1. Home3 - Pre-Arrival (`/home3-pre-arrival`)

### Purpose
To guide users through the essential planning and preparation steps before their healthcare journey to Malaysia. This page will offer a streamlined, interactive, and reassuring experience, consistent with the `home3` design philosophy.

### Key Sections & Components

1.  **Interactive Pre-Arrival Hero:**
    *   Component: New `Home3PreArrivalHero` (inspired by `InteractiveHero` from `home3/page.tsx`, but tailored for pre-arrival).
    *   Content: Theme: "Begin Your Journey with Confidence." Dynamic visuals could include an interactive checklist animación or a gentle animation of planning elements (calendar, passport, map icons).
    *   CTA: "Start Planning Now" / "View Preparation Guide".

2.  **Home3 Journey Navigation:**
    *   Component: `Home3JourneyNavigation` (current step: Pre-Arrival).

3.  **"Your Smooth Start" Planning Steps:**
    *   Component: New `Home3PlanningSteps`.
    *   Design: A modern, card-based layout or an interactive accordion. Steps could be revealed sequentially or allow users to jump to specific areas. Less dense than `home2`'s checklist approach.
    *   Content (inspired by `home2-pre-arrival` but refined for `home3`'s cleaner style):
        *   **Consult & Prepare Documents:** Focus on initial contact, gathering medical records, and passport/visa basics.
        *   **Discover Your Options:** Guidance on choosing hospitals and specialists (linking to a future `home3` member hospital directory).
        *   **Arrange Your Travel & Stay:** Tips on flights, accommodation, and local arrangements.
        *   **Understand Financials:** Overview of cost estimation and payment avenues.
    *   Each step to include:
        *   A unique, modern icon (from `lucide-react`, styled to match `home3`).
        *   A concise title and brief, encouraging description.
        *   An optional expandable section for key links or downloadable mini-guides.

4.  **"Malaysia Quick Facts" Carousel/Slider:**
    *   Component: New `QuickFactsSlider`.
    *   Design: Sleek, auto-playing or user-controlled slider with minimal text and impactful icons.
    *   Content: Key advantages like "Visa-Friendly Entry", "English Widely Spoken", "Internationally Accredited Hospitals", "Rich Cultural Experience".

5.  **Dedicated Support CTA:**
    *   Component: New `Home3DedicatedSupportCTA`.
    *   Content: "Need Help Planning? Our Concierge Team is Here."
    *   Options: Direct link to the main contact page, or a modal for quick inquiry.
    *   Design: Prominent, yet elegant, call-to-action button integrated into a clean section.

## 2. Home3 - Arrival (`/home3-arrival`)

### Purpose
To provide users with a clear, visually appealing, and comforting overview of the arrival process in Malaysia, highlighting MHTC's seamless support and the warmth of Malaysian hospitality, designed in the `home3` style.

### Key Sections & Components

1.  **"Welcome to Malaysia" Animated Hero:**
    *   Component: New `Home3ArrivalHero`.
    *   Content: Theme: "Your Seamless Welcome to Healthcare Excellence." Could feature an animation depicting a smooth transition from arrival to MHTC reception, possibly using imagery from `home3/interactive-hero.tsx` as inspiration for style.
    *   CTA: "View Our Arrival Services" / "Arrival Day Guide".

2.  **Home3 Journey Navigation:**
    *   Component: `Home3JourneyNavigation` (current step: Arrival).

3.  **"Your Arrival Experience" Interactive Timeline:**
    *   Component: New `InteractiveArrivalTimeline`.
    *   Design: A visually engaging, perhaps scroll-animated vertical or horizontal timeline. Each point could expand on click/hover to show more details.
    *   Content (streamlined from `home2-arrival`'s `arrivalExperience`):
        *   **Smooth Landing:** Assistance from aircraft to terminal.
        *   **MHTC Meet & Greet:** Personalized welcome by our team.
        *   **Efficient Clearances:** Support through immigration and customs.
        *   **Comfort & Relaxation:** Access to the Malaysia Healthcare Lounge.
        *   **Journey to Your Stay:** Premium transfer services.
    *   Each point features:
        *   A custom icon.
        *   Short title and brief description of the service.

4.  **"Airport Concierge Services" Showcase:**
    *   Component: New `AirportConciergeGrid`.
    *   Design: A clean grid of cards with icons and short descriptions, possibly with subtle hover effects.
    *   Content (concise, from `home2-arrival`'s `airportServices`):
        *   Personalized Welcome.
        *   Luggage Assistance.
        *   Fast-Track Services.
        *   Lounge Access.

5.  **"The Malaysian Hospitality Touch" Section:**
    *   Component: New `MalaysianHospitalityFocus`.
    *   Content: Emphasize cultural sensitivity, multilingual support, and creating a stress-free environment.
    *   Visuals: High-quality photography or subtle animations showcasing friendly interactions.
    *   CTA: "Book Your Arrival Assistance" / "Learn About Our Lounges".

## 3. Home3 - Treatment (`/home3-treatment`)

### Purpose
To confidently present Malaysia's world-class treatment options and patient-first care philosophy, utilizing the interactive, modern, and clean `home3` design language.

### Key Sections & Components

1.  **"Advanced Care, Personalized for You" Hero:**
    *   Component: New `Home3TreatmentHero`.
    *   Content: Theme: "Leading Medical Expertise, Compassionate Delivery." Dynamic visuals could showcase state-of-the-art facilities and diverse medical teams with an interactive element allowing users to highlight a specialty of interest.
    *   CTA: "Find Your Specialty" / "Why Choose Malaysia for Treatment?".

2.  **Home3 Journey Navigation:**
    *   Component: `Home3JourneyNavigation` (current step: Treatment).

3.  **"Explore Our Fields of Excellence" Interactive Grid:**
    *   Component: New `SpecialtiesExplorerGrid`.
    *   Design: A visually rich, filterable grid of specialties. Each card could have a striking icon and flip or expand on interaction to show key procedures or a brief intro video.
    *   Content (categories from `home2-treatment`'s `treatmentSpecialties`):
        *   Cardiology, Oncology, Orthopedics, Fertility, Neurology, Ophthalmology, and others.
        *   Each specialty card links to a (future) detailed page. Brief info includes 2-3 top procedures.

4.  **"Your Path to Wellness" Animated Flowchart:**
    *   Component: New `TreatmentFlowVisual`.
    *   Design: A clean, animated infographic illustrating the typical treatment journey stages. More abstract and modern than `home2`'s tabbed approach.
    *   Content (simplified from `home2-treatment`'s `treatmentJourney`):
        *   **Diagnosis & Consultation:** Understanding your needs.
        *   **Tailored Treatment Plan:** Collaboratively designed with you.
        *   **Expert Procedure & Care:** World-class medical intervention.
        *   **Focused In-Facility Recovery:** Initial healing and support.
    *   Emphasis on clarity, patient empowerment, and MHTC's role at each stage.

5.  **"Quality & Trust" Highlights:**
    *   Component: New `QualityTrustSection`.
    *   Design: Minimalist section with impactful statistics and icons, potentially using counters or subtle animations.
    *   Content (from `home2-treatment`'s `qualityMetrics` but more concise):
        *   Globally Recognized Accreditations.
        *   Internationally Trained Specialists.
        *   State-of-the-Art Technology.
        *   Commitment to Patient Safety & Outcomes.

6.  **"Consult with an Expert" CTA:**
    *   Component: New `Home3ExpertConsultCTA`.
    *   Content: "Connect with Our Medical Advisors Today."
    *   Options: Link to contact page for specialized inquiries, or an option to request information on a specific treatment.

## 4. Home3 - Post-Treatment (`/home3-post-treatment`)

### Purpose
To reassure patients about the comprehensive post-treatment support and resources available, fostering a sense of continued care and partnership, all within the `home3` interactive and supportive design framework.

### Key Sections & Components

1.  **"Your Journey to Lasting Wellness" Hero:**
    *   Component: New `Home3PostTreatmentHero`.
    *   Content: Theme: "Beyond Treatment: Our Ongoing Commitment to Your Health." Visuals of serene recovery environments, wellness activities, and supportive follow-up care. Maybe an animation showing a path extending into the future.
    *   CTA: "Discover Aftercare Services" / "Your Personalized Recovery Plan".

2.  **Home3 Journey Navigation:**
    *   Component: `Home3JourneyNavigation` (current step: Post-Treatment).

3.  **"Navigating Your Recovery" Interactive Modules:**
    *   Component: New `InteractiveRecoveryModules`.
    *   Design: A series of interactive cards or sections that users can click to explore. Each module focuses on a key aspect of post-treatment.
    *   Content (inspired by `home2-post-treatment`'s `recoveryPhases` but more topical):
        *   **Immediate Aftercare:** What to expect right after your procedure.
        *   **Rehabilitation & Therapy:** Options for physical and emotional recovery.
        *   **Long-Term Follow-Up:** Staying connected with your medical team (telehealth, local doctor coordination).
        *   **Lifestyle & Wellness:** Guidance for maintaining health post-recovery.
    *   Each module could offer links to resources, FAQs, or contact points.

4.  **"Our Circle of Support" Section:**
    *   Component: New `CircleOfSupportVisual`.
    *   Design: An elegant infographic or interactive visual representing the network of support services.
    *   Content (combining elements from `home2-post-treatment`'s `supportServices` and `continueCareOptions`):
        *   Tele-consultations.
        *   Medication Management.
        *   Assistance with Return Travel.
        *   Connection to Patient Communities.
        *   Access to Digital Health Records.

5.  **"Continue Your Story with MHTC" Section:**
    *   Component: New `Home3ShareExperienceCTA`.
    *   Content: Encourage patients to share their experiences and stay engaged with the MHTC community.
    *   Visuals: Positive, hopeful imagery.
    *   CTA: "Join Our Alumni Network" / "Share Your Healthcare Story" (linking to a testimonials page).

This documentation should serve as a solid foundation for developing the `home3` journey pages. 