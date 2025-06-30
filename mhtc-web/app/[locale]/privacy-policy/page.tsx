import { Metadata } from 'next'
import { Header } from '@/components/home4/header'
import { Footer } from '@/components/home4/footer'
import { Container } from '@/components/home4/ui/container'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, FileText, Eye, Lock, Users, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy & Terms of Use | Malaysia Healthcare Travel Council',
  description: 'Privacy policy and terms of use for the Malaysia Healthcare Travel Council website. Learn about data protection, user rights, and website usage terms.',
}

const privacySections = [
  {
    id: 'information-collection',
    title: 'Information We Collect',
    icon: Eye,
    content: [
      'Personal information (name, email, phone number) when you contact us',
      'Medical information you choose to share for healthcare inquiries',
      'Website usage data and analytics to improve our services',
      'Information provided through forms, surveys, or direct communication'
    ]
  },
  {
    id: 'data-usage',
    title: 'How We Use Your Information',
    icon: Users,
    content: [
      'To provide healthcare travel assistance and support',
      'To connect you with accredited healthcare facilities',
      'To improve our website and services',
      'To send relevant updates and newsletters (with your consent)',
      'To comply with legal obligations and regulations'
    ]
  },
  {
    id: 'data-protection',
    title: 'Data Protection & Security',
    icon: Lock,
    content: [
      'We implement industry-standard security measures to protect your data',
      'Your information is stored securely and accessed only by authorized personnel',
      'We do not sell, trade, or rent your personal information to third parties',
      'Data is retained only for as long as necessary to provide our services'
    ]
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links & Services',
    icon: Globe,
    content: [
      'Our website may contain links to third-party websites and services',
      'We are not responsible for the privacy practices of external sites',
      'We recommend reviewing the privacy policies of linked websites',
      'Third-party services are used only to enhance our service delivery'
    ]
  }
]

const termsSections = [
  {
    id: 'general-terms',
    title: 'General Terms of Use',
    content: `The Malaysia Healthcare Travel Council (MHTC), under the purview of the Ministry of Health Malaysia, maintains this website for the convenience of the public. By accessing and using the information and/or materials downloaded from this site which are owned and/or operated by MHTC or its affiliates, you are agreeing to comply with and be bound by the following terms of use, which may be updated and amended from time to time.`
  },
  {
    id: 'website-usage',
    title: 'Website Usage',
    content: `This website is provided for informational purposes only. The content is intended to help users understand healthcare travel options in Malaysia and connect with accredited healthcare facilities. Users are responsible for verifying information and making informed decisions about their healthcare journey.`
  },
  {
    id: 'healthcare-services',
    title: 'Healthcare Services Information',
    content: `The listed hospitals and healthcare professionals can be contacted directly regarding any query, consultation or treatment services through their listed mode of contact. Their services can be availed as per their individual terms and conditions. MHTC serves as a facilitator and does not provide direct medical services.`
  },
  {
    id: 'disclaimer',
    title: 'Medical Disclaimer',
    content: `In case of Medical discrepancies or conflict for importability of malpractice carried out by the patient, all concerned parties establish and agree that all judicial action must be carried out by the patient towards the medical professional / healthcare center / hospital and that action will not be extended towards www.mhtc.org.my, its managing company or any of its directors and employees as it is a body that puts at the disposition of the patient different professional options through listing their services without exercising medicine professionally.`
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: `MHTC strives to provide accurate and up-to-date information but makes no warranties about the completeness, accuracy, or reliability of the information on this website. We are not liable for any damages arising from the use of this website or reliance on its content.`
  }
]

export default function PrivacyPolicyPage() {
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
                Legal & Privacy
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-grey-900">
                Privacy Policy & Terms of Use
              </h1>
              <p className="text-xl text-grey-700 mb-8">
                Your privacy and trust are important to us. Learn about how we protect your information and the terms governing the use of our website.
              </p>
            </div>
          </Container>
        </section>

        {/* Privacy Policy Section */}
        <section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                
                <p className="text-lg text-grey-600">
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>

              <div className="grid gap-8 mb-16">
                {privacySections.map((section) => (
                  <Card key={section.id} className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-mhtc-primary/10">
                          <section.icon className="h-6 w-6 text-mhtc-primary" />
                        </div>
                        <CardTitle className="text-2xl text-grey-900">
                          {section.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-grey-700">
                            <div className="w-2 h-2 rounded-full bg-mhtc-primary mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Terms of Use Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-grey-900 mb-4">
                  Terms of Use
                </h2>
                <p className="text-lg text-grey-600">
                  By using this website, you agree to these terms and conditions
                </p>
              </div>

              <div className="space-y-8">
                {termsSections.map((section) => (
                  <Card key={section.id} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl text-grey-900 flex items-center gap-3">
                        <FileText className="h-5 w-5 text-mhtc-primary" />
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-grey-700 leading-relaxed">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Acceptance Notice */}
              <Card className="border-2 border-mhtc-primary bg-mhtc-primary/5 mt-12">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-grey-900 mb-4">
                      Acceptance of Terms
                    </h3>
                    <p className="text-grey-700 mb-4">
                      BY USING THE WEBSITE YOU SIGNIFY YOUR ACCEPTANCE TO OUR TERMS AND CONDITIONS. 
                      SHOULD YOU DISAGREE WITH THE ABOVE TERMS AND CONDITIONS, IT IS ADVISED THAT ITS USE IS TERMINATED.
                    </p>
                    <p className="text-sm text-grey-600">
                      These terms may be updated from time to time. Continued use of the website constitutes acceptance of any changes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-grey-50">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-grey-900 mb-6">
                Questions About Our Privacy Policy?
              </h2>
              <p className="text-grey-600 mb-8">
                If you have any questions about our privacy policy or terms of use, 
                please don&apos;t hesitate to contact us.
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
                      Phone: +603 8776 6168<br />
                      Email: info@mhtc.org.my
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
