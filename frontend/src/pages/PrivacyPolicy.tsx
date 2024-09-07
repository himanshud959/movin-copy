import React from 'react';
import Layout from '../components/Layout';
import '../assets/css/privacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  const onLoad = () => { };

  return (
    <Layout onLoad={onLoad} strict={false}>
      <div className="privacy-policy">
        <h1 className="main-heading">Privacy Policy</h1>
        <h2 className="consent-heading">Consent Agreement for Use of Personal Data</h2>
        <p>
          By accessing and using Ohmyplace.com, you acknowledge that you have read, understood, and agreed to the terms and conditions of this consent agreement for the use of your personal and professional data.
        </p>
        <h3>Consent for Data Collection and Use:</h3>
        <p>
          You hereby provide your consent for Ohmyplace.com to collect and use your personal and professional data for the following purposes:
          <ul>
            <li>To create and maintain your user account on Ohmyplace.com</li>
            <li>To provide you with access to the various features and services offered on the website</li>
            <li>To improve the user experience on the website</li>
            <li>To provide you with targeted advertisements and promotional offers</li>
            <li>To communicate with you regarding your account, transactions, and services</li>
          </ul>
        </p>
        <h3>Types of Data Collected:</h3>
        <p>
          The personal and professional data that Ohmyplace.com collects may include but is not limited to your name, email address, phone number, billing and shipping address, credit card information, and professional qualifications.
        </p>
        <h3>Data Storage and Protection:</h3>
        <p>
          Ohmyplace.com is committed to protecting the privacy and security of your personal and professional data. The website implements various security measures to ensure that your data is stored securely and protected against unauthorized access, disclosure, alteration, or destruction.
        </p>
        <h3>Disclosure of Data:</h3>
        <p>
          Ohmyplace.com may disclose your personal and professional data to third-party service providers who help us in operating the website, processing payments, or delivering services to you. Your data may also be disclosed if required by law or as necessary to protect the rights, property, or safety of Ohmyplace.com or its users.
        </p>
        <h3>Your Rights:</h3>
        <p>
          You have the right to access, modify, and delete your personal and professional data stored on Ohmyplace.com. You may also withdraw your consent to the use of your data at any time by contacting our customer service team.
        </p>
        <p className="bold-paragraph">
          By using Ohmyplace.com, you agree that you have read, understood, and consented to the terms and conditions of this agreement regarding the collection, storage, use, and disclosure of your personal and professional data.
        </p>
        <h2 className="consent-heading">We take your privacy seriously. <br/> Cookies</h2>
        <p>
          Your computer or mobile device may receive and access certain Cookies from this website and application, which are used to enhance your usage of the website and application. You will be shown a message bar seeking your consent to set such Cookies before the Website and Application puts cookies on your computer or mobile device. If you choose not to consent to the installation of Cookies, however, certain elements of the Website could stop working completely or as intended. In your internet browser, you may decide whether to enable or deactivate cookies. Most web browsers allow Cookies by default, however this may be adjusted. Please go to your internet browser’s help menu for further information.
        </p>
        <h2 className="consent-heading">PERSONALLY IDENTIFIABLE INFORMATION TRANSFER</h2>
        <p>
          The PII we gather from you may be transmitted to and kept in places outside of India. It may also be handled by personnel working for or on behalf of us who are located outside of India’s borders.
        </p>
        <h2 className="consent-heading">OTHER WEBSITE LINKS</h2>
        <p>
          Our website and application contain links to our social networking pages, such as Facebook, Twitter, LinkedIn, YouTube, and more that may be added in the future. Your visits and activity on those portals will be regulated by their respective privacy rules applicable to visitors to their sites. Please read their privacy policies to learn more about their privacy practices.
        </p>
        <h2 className="consent-heading">PARTNER</h2>
        <p>
          We may enter into contracts with various third-party providers from time to time in order to offer you with an upgraded and secure user experience. Such participation may entail the disclosure of your PII. If a third party gets access to your PII, we will ask them to safeguard it as carefully as they do personally identifiable information obtained from other permitted sources. We do not promote or sell your personal information to third parties.
        </p>
        <h2 className="consent-heading">How Long We Retain Your Data</h2>
        <p>
          We shall keep data for a reasonable period of time and/or for as long as is needed by relevant law/or for legitimate purposes. We will take reasonable efforts to remove or permanently de-identify PII that is no longer required, including PII handled by third-party suppliers that the Company may use from time to time.
        </p>
        <h2 className="consent-heading">UPDATING YOUR PERSONALLY IDENTIFYING INFORMATION</h2>
        <p>
          We provide you with the possibility to amend your PII at any time by submitting a request to [insert contact information]. We will, however, preserve PII you have asked to be removed in our files and databases in order to use it in some instances, such as resolving disputes, troubleshooting problems, and enforcing our Terms and Conditions of Use. Furthermore, owing to technological and regulatory restrictions, including stored “backup” systems, such past PII is never totally erased from our databases. As a result, you should not expect us to totally erase your PII from our databases in response to your requests.
        </p>
        <h2 className="consent-heading">YOUR CONSENT</h2>
        <p>
          By accepting this Privacy Policy and our Terms, you expressly consent to the use and dissemination of your Personal Information in accordance with this Privacy Policy.
        </p>
        <h3>Applicable Law Requirements:</h3>
        <p>
          We process your personal data on the basis of the consent you give by accepting this Privacy Policy. We respect your right to access, correction, deletion, limitation of processing, data portability, and opposition to the processing of your personal data. These rights, however, are not absolute and are subject to contract, relevant legislation, record keeping requirements under applicable statutes, current disputes, and potential conflicts. To exercise your rights in relation to your personal data, please email hello@ohmyplace.com.
        </p>
        <p>
          In the case of any misconduct/fraud/cybercrime, etc. on your part, the Company may use your PII as evidence in a court of law and may also undertake investigations/inquiries as it sees appropriate with the assistance of private agencies or authorities as it sees fit.
        </p>
        <h3>Questions and Disputes / Right to File a Complaint</h3>
        <p>
          If you believe that your personal data is not being processed in accordance with the objectives indicated in this Privacy Policy, or if you have any questions about your privacy or your rights under applicable legislation, please contact us at hello@ohmyplace.com.
        </p>
        <h3>Change Notification</h3>
        <p>
          We explicitly reserve the right, in its sole discretion, to amend this Privacy Policy at any time in the future without previous notification to Users. Users must examine our Privacy Policy on a regular basis to ensure that they are fully aware of our policies and processes in this area.
        </p>
        <h3>Suggestions and Questions</h3>
        <p>
          If you have any questions or comments regarding our privacy practices, please email us at hello@ohmyplace.com.
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
