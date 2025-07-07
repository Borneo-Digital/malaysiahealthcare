import { Metadata } from 'next'
import { Header } from '@/components/home4/header'
import { Footer } from '@/components/home4/footer'
import { Container } from '@/components/home4/ui/container'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/home4/ui/button'
import { Shield, FileText, Eye, AlertTriangle, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corporate Governance | Malaysia Healthcare Travel Council',
  description: 'Promoting integrity and excellence in healthcare standards for a trusted medical tourism experience. Learn about our anti-bribery, anti-corruption, and whistleblowing policies.',
}

const policies = [
  {
    id: 'anti-bribery',
    title: 'Anti-Bribery & Anti-Corruption Policy',
    icon: Shield,
    content: [
      'Malaysia Healthcare Travel Council(MHTC) is committed to fostering a culture of integrity and combating bribery and corruption in all aspects of our business. We maintain a zero-tolerance approach towards all forms of bribery and corruption, and pledge to act with the highest level of integrity in our business dealings and relationships across all jurisdictions in which we operate.',
      'This policy outlines our expectations for employees, directors, top-level management, external parties, and business associates. As a foundation for ethical conduct, we adhere to the following principles:',
      [
        'MHTC staff are **PROHIBITED** from soliciting, accepting, or offering any form of bribery.',
        'Comply with provisions governing the Malaysian Anti-Corruption Commission Act and other relevant acts, regulations, policies, and procedures.',
        'Provide channels and encourage reporting of corruption activities and abuse of power through MHTC\'s Whistleblowing Policy and Procedure.',
        'Understand, practice, and comply with the implementation and compliance requirements of MHTC\'s Code of Ethics and Anti-Bribery and Anti-Corruption Policy in all business matters.',
        'Implement strategic control and continuous improvement of the Anti-Bribery and Anti-Corruption Policy within MHTC.',
        'Take appropriate action according to relevant laws, policies, procedures, directives, and guidelines in cases of violation of MHTC\'s Anti-Bribery and Anti-Corruption Policy.'
      ]
    ]
  },
  {
    id: 'personal-data',
    title: 'Personal Data Protection Notice & Policy',
    icon: Eye,
    content: [
      'At all times during the engagement of our services, Malaysia Healthcare Travel Council ("MHTC") prioritises the safety of your personal information. We are committed to ensuring your personal information and your sensitive personal information provided to us remain secured and safe from any unauthorised and unwanted access.',
      'This Personal Data Protection Notice sets out how we collect, use, access, transfer, store and handle ("process") your Personal Information under the Malaysian Personal Data Protection Act 2010.',
      '**1. What is Personal Information / Sensitive Personal Information?**',
      'Under Section 4 of the Malaysian Personal Data Protection Act 2010:',
      [
        'personal information (or personal data) means any information that could directly or indirectly help distinguish, identify or contact you. These may include (but is not limited to) your name, personal contact number, picture, NRIC number, passport number, images recorded by the closed-circuit television (CCTV) or location tracking/GPS information and sensitive personal information;',
        'sensitive personal information (or sensitive personal data) means any personal information consisting of information relating to your physical or mental health or condition, your medical history, allergies and diagnostics.'
      ],
      '**2. Where do we get your Personal Information?**',
      'MHTC collects your personal information directly from you or indirectly from your legal representatives (family members or next of kin), agents (such as medical tourism agents), outsourcing partners, etc, when you submit any completed enquiry forms or registration forms to us through various means, including online and physical copies at public venues or any other premises, web analytics services such as Google Analytics and comments and shares you posted about MHTC on social media.',
      'By providing your or another individual\'s personal information to us, you or the person which you are representing consent to our process of the personal information. If you do not consent for us to process the personal information, you may refrain from providing us with personal information of you or the person which you are representing.',
      '**3. Why do we collect Personal Information?**',
      'Subject to any laws and regulations (including guidelines and/or by-laws) imposed on us, we process your personal information to undertake your requested commercial transactions, including (but not limited to):',
      [
        'performing a contract to which you have entered with MHTC;',
        'fulfilling your request of entering into a contract with our affiliated hospitals and/or any other medical healthcare facilities;',
        'to administer and communicate with you in relation to our services, webinars, talks, and/or events;',
        'for collaborations with a third party to advertise and market products and services to you',
        'to conduct internal marketing analysis and customer patterns and choices;',
        'to comply with MHTC\'s legal obligations in the course of our business;',
        'to optimise the customer and user experience of MHTC sites;',
        'for MHTC\'s internal records management;',
        'to allow affiliated hospitals and/or any other medical healthcare facilities to contact you for further enquiries and/or performance of the relevant contract;',
        'to support research and innovation of our products and services;',
        'for insurance purposes;',
        'to send you season\'s greetings, special occasion messages or other similar communications;',
        'to ensure the contents on MHTC\'s website are up to date and represented in the most effective manner for you and your computer and/or device',
        'for internal investigations, audit or security purposes;',
        'to create a more personalised experience for you to enhance customer experience;',
        'to store and carry out data analytics processes; and',
        'for other legitimate business purposes.'
      ],
      'You are obligated to provide us with the personal information which we have requested for unless stated otherwise. Should you fail to provide us with such requested information, we may be unable to process your request, enquiry and/or provide you with our services.',
      'Where you have consented to receive any marketing or promotional updates from MHTC and wish to opt-out from our updates, you may select the "unsubscribe" option provided in MHTC\'s email blasts or contact us at our details below.',
      '**4. Disclosure of Personal Information**',
      '**Entities within MHTC**',
      'Your personal information may be transferred to entities (in or outside of Malaysia) within MHTC in the provision of any services related to the purposes stated above. Access to your personal information shall be limited to our staff, employees and/or agents who are contractually required by their scope of work to process your personal information.',
      '**Disclosure to Third Parties**',
      'Your personal information (including sensitive personal data and non-sensitive data) may be processed by relevant third parties (in or outside of Malaysia) pursuant to the relevant contractual relationship. For example, we may appoint third-party providers to engage in the purposes stated above.',
      'This includes (but is not limited to) disclosure to:',
      [
        'consultants;',
        'contractors;',
        'professional advisors;',
        'service providers;',
        'conference/training/event organisers;',
        'travel agencies;',
        'hotels;',
        'airline companies;',
        'rehabilitation and well-being centres;',
        'technology and healthcare service providers;',
        'insurance companies;',
        'law enforcement agencies, including the local police;',
        'relevant government authorities, statutory authorities i.e. Ministry of Health;',
        'relevant accreditation bodies such as the Malaysian Society for Quality Health;',
        'local council and industry regulators;',
        'our affiliates who may jointly provide the service requested for (such as third-party hotels, transportation services, our affiliated hospitals and our other affiliated healthcare providers.'
      ],
      'In the event of a proposed or actual sale of a business, disposal, acquisition, merger or re-organisation, your personal information may be required to be disclosed or transferred to a third party as a result of or to facilitate the aforementioned events.',
      '**Transfer of your personal information outside Malaysia.**',
      [
        'It may be necessary for us to transfer your personal information outside Malaysia if any of the third parties mentioned above are located or have processing facilities in countries outside of Malaysia.',
        'By providing us with your or another individual\'s personal information, you or the individual which you are representing consent to us transferring your or his/her personal information outside Malaysia to such third parties in order to undertake the purposes stated above.',
        'We shall implement strict standards and security to ensure that such third parties are contractually bound to safeguard your personal information and can only process your personal information under our instructions and/or request.'
      ],
      '**5. What happens when you access our website?**',
      '**Websites**',
      'Our website may provide links to other sites for your ease of convenience. Our Personal Data Protection Policy applies solely to MHTC\'s website and does not apply to any third party websites. We recommend you to read and understand their respective Personal Data Protection Policy if you visit any linked websites.',
      '**Location enabled products or applications**',
      'We may utilise data analytic tools to help us build and improve on our customer experience by collecting your information.',
      '**Cookies**',
      'Our website may use cookies to help remember your preferences and habits. A cookie is a text file that contains an ID unique to your computer and/or device and it is stored in your computer. Each time when you visit a website that uses a cookie, your cookie will be exchanged to the network server (website). This in turn helps a website to identify you and suggest information based on your preferences and your habits online.',
      '**6. Your rights of access and correction**',
      'At all times during the processing of your personal information, you are entitled by right to access, correct and update any of your personal information. Should you wish to do so, you may contact us at our contact information set out below. Please allow us reasonable time to respond and effect any requested changes.',
      '**7. Limiting the processing of Personal Information**',
      'If you would like to make further enquiries on how to limit the processing of your personal information, make a complaint or have further enquiries regarding the processing of your personal information, you may contact us at our contact information set out below.',
      '**8. Changes to this Personal Data Protection Notice**',
      'We may review and update this Personal Data Protection Notice from time to time and without prior notice. Any changes made will supersede any and all previous versions. We encourage you to check our Personal Data Protection Notice page before you submit additional personal data to ensure that you are aware of the latest version.',
      '**9. Email Communication**',
      'It is our usual practice to send all official communications between ourselves and clients or other third parties using email accounts from the domains "@MHTC.org.my". We have a strict policy of NOT issuing unsolicited emails and DOES NOT issue email soliciting engagements. Any such email purporting to be from us is a case of identity theft by a person or persons unknown to us. If you have received an email from any other domain, that communication does not represent and/or relate to our official business and neither will it be deemed to be endorsed by us. We are not liable for the content of such communications, or for the consequences of any actions taken based on such communications, regardless of any claims of association with us or any of our partners.',
      '**10. Questions and contact information**',
      'You may contact our Customer Service Officer at:',
      'Malaysia Healthcare Travel Council',
      'Call Centre: +603 2726 8688',
      'Toll Free- Inside Malaysia: 1-800-188-688',
      'Email: callcentre@mhtc.org.my'
    ]
  },
  {
    id: 'whistleblowing',
    title: 'Whistleblowing Policy & Procedure',
    icon: AlertTriangle,
    content: [
      'Malaysia Healthcare Travel Council ("MHTC") is committed to conducting business dealings with integrity and in compliance with applicable laws, including but not limited to the Whistleblower Protection Act 2010, Companies Act 2016, and Malaysian Anti-Corruption Commission Act 2009. In cases where multiple documents contradict one another in relation to the same subject matter, the more stringent provisions shall apply.',
      'This Policy applies to Employees, the Board, Business Associates, and any third parties who have business dealings with the Company.',
      'The Whistleblower\'s identity and reports will be protected and kept confidential unless otherwise required by applicable laws or for the purposes of any proceedings by or against the Company. Reports will only be disclosed to those authorized to conduct investigations into matters relating to the report. Any whistleblowing must be disclosed and made in good faith.',
      'Protection for the Whistleblower will not be accorded by MHTC under the following circumstances:',
      [
        'The Whistleblower has participated in the Improper Conduct.',
        'The Whistleblower has willfully made a material false statement in their disclosure of Improper Conduct.',
        'The disclosure of Improper Conduct primarily involves questioning the merits of government policy.',
        'The disclosure of Improper Conduct is made solely or substantially with the motive of avoiding dismissal or other disciplinary action.'
      ],
      'Whistleblowers are advised to make their disclosures through MHTC\'s whistleblowing channels as stated below:',
      [
        'Email to MHTC Governance Committee: governance@mhtc.org.my',
        'Anonymous letter to MHTC Whistleblowing Box.',
        'Whistleblowing reporting Download Whistleblowing Form'
      ]
    ]
  },
  {
    id: 'oacp',
    title: 'OACP 2014-2028',
    icon: FileText,
    content: [
      'In line with the national commitment to fostering a corruption-free Malaysia, as outlined in the National Anti-Corruption Strategy (NACS) 2024-2028, MHTC is proud to launch our Organisational Anti-Corruption Plan (OACP). The NACS sets a comprehensive roadmap for promoting good governance, integrity, and ethical conduct across all sectors. Our OACP reflects our dedication to upholding these national aspirations and further strengthening our commitment to ethical practices within the healthcare travel industry.',
      'At MHTC, we are committed to fostering the highest ethical standards in everything we do. Our newly launched **Organisational Anti-Corruption Plan (OACP)** reflects this commitment and outlines our comprehensive strategy to ensure integrity, accountability, and ethical conduct across all aspects of our operations.',
      '**Key Components of the OACP:**',
      [
        '**Promoting a Culture of Integrity:** We cultivate a work environment where ethical behaviour is expected and encouraged.',
        '**Ensuring Transparency:** We maintain open communication and clear processes to promote trust and ethical decision-making.',
        '**Upholding Compliance:** We adhere to the highest legal and ethical standards in all our business practices.',
        '**Empowering Reporting:** We provide safe and confidential channels for employees to report any potential ethical concerns.'
      ],
      '**Benefits of the OACP:**',
      [
        '**Enhanced Reputation:** The OACP strengthens our reputation as a trustworthy and reliable partner in the healthcare travel industry.',
        '**Employee Engagement:** A culture of integrity fosters a more engaged and motivated workforce.',
        '**Improved Decision-Making:** Ethical considerations ensure responsible and sustainable business practices.',
        '**Stronger Partnerships:** The OACP builds trust and transparency with our partners, healthcare providers, and patients.'
      ]
    ]
  }
]

export default function CorporateGovernancePage() {
  return (
    <div className="min-h-screen bg-grey-50">
      <Header />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-mhtc-primary to-mhtc-primary-hover py-16">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-white text-mhtc-primary border-white mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Governance & Compliance
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Corporate Governance
              </h1>
              <p className="text-xl text-grey-100 mb-8">
                Promoting integrity and excellence in healthcare standards for a trusted medical tourism experience.
              </p>
            </div>
          </Container>
        </section>

        {/* Policies Section */}
        <section className="py-16">
          <Container>
            <div className="space-y-12">
              {policies.map((policy) => (
                <Card key={policy.id} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-mhtc-primary/10">
                        <policy.icon className="h-6 w-6 text-mhtc-primary" />
                      </div>
                      <CardTitle className="text-2xl text-grey-900">
                        {policy.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {policy.content.map((item, index) => (
                      <div key={index}>
                        {Array.isArray(item) ? (
                          <ul className="space-y-2 ml-6">
                            {item.map((subItem, subIndex) => (
                              <li key={subIndex} className="flex items-start gap-3 text-grey-700">
                                <div className="w-2 h-2 rounded-full bg-mhtc-primary mt-2 flex-shrink-0" />
                                <span dangerouslySetInnerHTML={{ __html: subItem }} />
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p 
                            className="text-grey-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-grey-900 mb-6">
                Download Our Policies
              </h2>
              <p className="text-lg text-grey-600 mb-8">
                Access our complete governance documents and policies for detailed information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-mhtc-primary hover:bg-mhtc-primary-hover text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Whistleblowing Form
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-mhtc-primary text-mhtc-primary hover:bg-mhtc-primary hover:text-white"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Read Full OACP
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-grey-50">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-grey-900 mb-6">
                Questions About Corporate Governance?
              </h2>
              <p className="text-grey-600 mb-8">
                For questions about our governance policies or to report concerns, please contact our governance committee.
              </p>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="font-semibold text-grey-900 mb-2">Contact Information</h3>
                    <p className="text-grey-600 text-sm">
                      Unit 13A-1, Level 13A, Block 2A,<br />
                      Plaza Sentral, 5 Jalan Stesen Sentral 5,<br />
                      KL Sentral, 50470 Kuala Lumpur, Malaysia
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-grey-900 mb-2">Get in Touch</h3>
                    <p className="text-grey-600 text-sm">
                      Call Centre: +603 2726 8688<br />
                      Toll Free: 1-800-188-688<br />
                      Email: governance@mhtc.org.my
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
