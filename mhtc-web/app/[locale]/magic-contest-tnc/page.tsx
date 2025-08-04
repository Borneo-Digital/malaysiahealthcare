import { Metadata } from "next";
import { Header } from "@/components/home4/header";
import { Footer } from "@/components/home4/footer";

export const metadata: Metadata = {
  title: "Magic Contest Terms and Condition | Malaysia Healthcare Travel Council",
  description: "#UnboxTheMYMT2026Magic Contest Terms and Conditions - Join our creative unboxing contest and showcase your MYMT2026 experience on social media.",
};

export default function MagicContestTnCPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image with Transparency */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ 
              backgroundImage: "url('/images/home4/MYMTcontesttnc.png')"
            }}
          ></div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/40"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-black">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                #UnboxTheMYMT2026Magic
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold">
                Contest
              </h2>
            </div>
          </div>
        </section>

        {/* Terms and Conditions Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Main Title */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold italic">
                <span className="text-black">Terms &</span>{" "}
                <span className="text-[#8B2635]">Conditions</span>
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              
              {/* Contest */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Contest</h3>
                <p className="text-black leading-relaxed">
                  This contest invites recipients of Malaysia Healthcare Travel Council (MHTC)&apos;s Malaysia Year of 
                  Medical Tourism 2026 (MYMT2026) commemorative tiffin to creatively showcase their unboxing 
                  experience on social media. Participants are encouraged to highlight MYMT2026&apos;s branding, tagline, and 
                  official hashtags. Participants are also encouraged to share what &quot;Healing in Malaysia&quot; means to them, or 
                  how Malaysia inspires wellness.
                </p>
              </div>

              {/* Contest Period */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Contest Period</h3>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <ul className="list-none space-y-2 text-black">
                    <li><strong>Start Date:</strong> 24 July 2025</li>
                    <li><strong>End Date:</strong> 7 August 2025</li>
                    <li><strong>Winner Announcement:</strong> 20 August 2025</li>
                  </ul>
                </div>
              </div>

              {/* Eligibility & Participation */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Eligibility & Participation</h3>
                <p className="text-black mb-4">
                  Any person who has fulfilled the criteria below is eligible to participate in this Contest (&quot;Participants&quot;).
                </p>
                <ul className="list-disc list-inside space-y-2 text-black ml-4">
                  <li>Open to recipients of the official MYMT2026 tiffin.</li>
                  <li>Participants must be aged 18 years or above.</li>
                  <li>Open to both Malaysian and international participants.</li>
                  <li>Employees and immediate families of the Organiser and its appointed vendors are not eligible for 
                  rewards.</li>
                </ul>
              </div>

              {/* How to Participate */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">How to Participate</h3>
                <ol className="list-decimal list-inside space-y-3 text-black ml-4">
                  <li>Creatively capture and share your MYMT2026 tiffin unboxing experience through a video post.</li>
                  <li>Post it on <a href="https://www.instagram.com/malaysiahealthcare" className="text-blue-600 hover:underline">Instagram (@malaysiahealthcare)</a> or <a href="https://www.tiktok.com/@malaysiahealthcare" className="text-blue-600 hover:underline">TikTok (@malaysiahealthcare)</a>.</li>
                  <li>Tag @malaysiahealthcare and include the hashtags:
                    <div className="bg-gray-100 p-4 rounded mt-2 ml-4">
                      <div className="font-mono space-y-2">
                        <div className="text-lg font-bold text-black">#UnboxTheMYMT2026MagicContest</div>
                        <div className="text-sm">#MYMT2026</div>
                        <div className="text-sm">#HealingMeetsHospitality</div>
                        <div className="text-sm">#experienceMalaysiaHealthcare</div>
                      </div>
                    </div>
                  </li>
                  <li>Set your post and account to public during the entire contest period.</li>
                  <li>In your video or caption, share what &quot;Healing in Malaysia&quot; means to you or how Malaysia inspires 
                  your wellness journey.</li>
                  <li>Entries must be submitted within the contest period.</li>
                </ol>
              </div>

              {/* Submission Guidelines */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Submission Guidelines</h3>
                <ul className="list-disc list-inside space-y-2 text-black ml-4">
                  <li>All content must be original and created by the participant.</li>
                  <li>The unboxing must clearly feature the MYMT2026 tiffin and campaign branding.</li>
                  <li>Content must not contain offensive, defamatory, or inappropriate material.</li>
                  <li>Each participant may submit multiple entries, but only one will be considered for selection.</li>
                  <li>Entries from private accounts or those not visible to the public will not be eligible for selection.</li>
                </ul>
              </div>

              {/* Judging Criteria & Winner Selection */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Judging Criteria & Winner Selection</h3>
                <p className="text-black mb-4">
                  The Top 2 most creative entries will be selected based on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black ml-4 mb-4">
                  <li>Creativity and originality of the unboxing concept.</li>
                  <li>Clear and engaging use of MYMT2026 branding, theme, and hashtags.</li>
                  <li>Relevance of message/caption to the spirit of &quot;Healing Meets Hospitality.&quot;</li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-black text-sm">
                    The Organiser reserves the right to reject any submissions failing to meet the requirements above. 
                    The Organiser&apos;s decisions are final and no correspondence thereon will be entertained.
                  </p>
                </div>
              </div>

              {/* Winner Announcement */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Winner Announcement</h3>
                <div className="space-y-4 text-black">
                  <p>
                    Contest Winner(s) will be announced on Malaysia Healthcare&apos;s Instagram and TikTok accounts and 
                    will be contacted directly for confirmation and logistics within the next fourteen (14) working days from 
                    the end of the Contest Period.
                  </p>
                  <p>
                    Contest Winner(s) are required to provide the following details via Private Message (PM) within 
                    seventy-two (72) hours after the Contest Winner(s) announcement:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Full name as per NRIC</li>
                    <li>Contact number</li>
                    <li>Email address</li>
                    <li>Mailing address</li>
                  </ul>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm">
                      The Organiser reserves the right to forfeit the prizes or assign the prizes to another Contest 
                      Participant should the originally selected winners fail to provide the required details within the 
                      stipulated time frame. Contest Prize(s) will be sent to Contest Winner(s) according to the mailing address given. Change of 
                      mailing address is not allowed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rewards */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Rewards</h3>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-black font-semibold mb-2">
                    Top 2 winners will get signed videography gear by MYMT2026&apos;s Brand Ambassador to continue 
                    inspiring and creating meaningful content.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-black text-sm ml-4">
                    <li>No cash alternatives will be provided.</li>
                    <li>The Organiser reserves the right to substitute any of the prizes stipulated with items of equivalent 
                    value and without prior notice.</li>
                  </ul>
                </div>
              </div>

              {/* Usage Rights */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Usage Rights</h3>
                <p className="text-black">
                  By entering the contest, participants grant the Organiser the right to repost, feature, and use submitted 
                  content (with credit) across the Organiser&apos;s official digital and print platforms for promotional purposes.
                </p>
              </div>

              {/* Disqualification */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Disqualification</h3>
                <p className="text-black mb-4">
                  The Organiser reserves the right to disqualify any entry that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black ml-4">
                  <li>Violates content guidelines or contains offensive material.</li>
                  <li>Is submitted from a private/unviewable account.</li>
                  <li>Is found to be plagiarised or misleading.</li>
                </ul>
              </div>

              {/* Rights of the Organiser */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Rights of the Organiser</h3>
                <div className="text-black text-sm space-y-4 leading-relaxed">
                  <p>
                    By participating in the Contest, Participants are taken to have read, understood and agreed to be 
                    bound by these Contest Terms & Conditions, and accept that all decisions by the Organiser are final 
                    and binding. The Organiser reserves the right to change, amend, add or delete any of the Contest 
                    Terms & Conditions at any time without prior notice to the Participants and the Participants agree to 
                    be bound by such changes.
                  </p>
                  
                  <p>
                    Participant(s) agree and acknowledge that all intellectual property rights thereto shall belong to the 
                    Organiser. The Organiser shall have the exclusive right to use, edit, modify and publish the entry 
                    submitted by all the Participant(s), publish the names of the Participant(s), in any way it deems fit for 
                    any advertising, trade, promotional purposes and for any other reason whatsoever, without any 
                    further notice to the Participant(s) and the Participant(s) shall not claim ownership or any payment or 
                    compensation on the materials.
                  </p>
                  
                  <p>
                    The Organiser is not responsible for any error, omission, interruption, deletion, defect, delay in 
                    operation or transmission, communications line failure, theft or destruction, unauthorised access to, 
                    or alteration of, user or member communications, or any problems or technical malfunction of any 
                    telephone network or lines, computer online systems, servers or providers, computer equipment, 
                    software, failure of email or players on account of technical problems or traffic congestion on the 
                    internet and/or websites.
                  </p>
                  
                  <p>
                    The Organiser, its partners and its sponsor(s) (if any) will not be held liable in the event of non-receipt 
                    or delayed delivery of the notification to the Contest Winner(s).
                  </p>
                  
                  <p>
                    All Contest Winner(s) must abide by the terms and conditions of the parties arranging and/or 
                    providing for the prizes and the terms and conditions attached to the prizes, if any.
                  </p>
                  
                  <p>
                    The Organiser makes no warranties or representations whatsoever with respect to the prizes and 
                    shall not be responsible nor liable for any problems and/or damage there to or arising there from.
                  </p>
                  
                  <p>
                    In the event a Contest Winner(s) chooses not to accept a prize, they will disclaim all rights, interests 
                    and claims to that prize and the prize will be dealt with according to the sole and absolute discretion 
                    of the Organiser.
                  </p>
                  
                  <p>
                    All prizes are accepted entirely at the risk of the Contest Winner(s), and the Organiser excludes all 
                    liabilities, representation and warranties in connection with any prize to the extent permitted by law. 
                    Contest Winner(s) shall comply with the terms and conditions of each prize.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-16 p-8 bg-blue-50 rounded-lg text-center">
                <h4 className="text-xl font-bold text-[#000000] mb-4">Questions?</h4>
                <p className="text-black">
                  For any inquiries regarding this contest, please contact Malaysia Healthcare Travel Council through our official social media channels.
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://www.instagram.com/malaysiahealthcare" className="text-blue-600 hover:underline">
                    @malaysiahealthcare (Instagram)
                  </a>
                  <span className="text-gray-400">|</span>
                  <a href="https://www.tiktok.com/@malaysiahealthcare" className="text-blue-600 hover:underline">
                    @malaysiahealthcare (TikTok)
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}