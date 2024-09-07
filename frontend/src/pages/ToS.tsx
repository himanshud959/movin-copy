import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import '../assets/css/tos.css';
import { strings } from '../lang/home'

const ToS = () => {
  useEffect(() => {
    // Add any necessary onLoad functionality here
  }, []);

  return (
    <Layout strict={false}>
      <div className="tos">
        <h1 className="tos-heading">Terms of Service</h1>
        <div className="tos-content">
          {/* <h2>Terms of Use</h2> */}

          <h4>GENERAL TERMS AND CONDITIONS</h4>
          <p>
            Please review these Terms and Conditions of Use carefully before accessing OhMyPlace.Com. 
            Your continued use of the website implies your acceptance of these terms. Ohmyplace Solutions 
            Private Limited (“Ohmyplace”) reserves the right to modify these terms at any time, and your 
            ongoing use indicates your agreement to the updated terms.
          </p>

          <h4>GENERAL TERMS OF BOOKING, MOVE IN, STAY & MOVE OUT</h4>
          <ul>
            <li>Residents must settle all dues, including booking amount, monthly rent, and security deposit, before moving in.</li>
            <li>All dues must be paid before the move-out day.</li>
            <li>Visitors require company approval, and no guests are allowed without prior consent.</li>
            <li>Residents must check out in the presence of a company representative.</li>
            <li>The security deposit amount is refundable without interest charge after adjusting any dues such as pending electricity bills, meals, or any breakage into the property by the tenant.</li>
            <li>Residents must give a check-out notice one month in advance; otherwise, the remaining rent will be charged and adjusted from the security deposit.</li>
            <li>Residents must acknowledge that the booking amount is non-adjustable to the rent or security amount. It is collected to cover platform fees, move-in preparation costs, and related documentation, including the rent agreement and KYC verification of tenants.</li>
          </ul>

          <h4>RESTRICTIONS FOR WEBSITE USERS</h4>
          <p>
            All content on this website is the intellectual property of Ohmyplace Solutions or authorized 
            third parties. You are granted a limited license to view, copy, and download materials for personal 
            use, provided you retain copyright and trademark notices. Unauthorized distribution or modification 
            of materials is strictly prohibited.
          </p>

          <h4>EXTERNAL CONTENT</h4>
          <p>
            Third-party content on OhMyPlace.Com is not reviewed or controlled by Ohmyplace Solutions. The opinions 
            expressed by third parties do not necessarily reflect those of the website. Ohmyplace Solutions is not 
            responsible for the accuracy or usefulness of third-party content.
          </p>

          <h4>HYPERLINKS TO AND FROM THIRD-PARTY WEBSITES</h4>
          <p>
            Links between OhMyPlace.Com and external websites do not imply endorsement by Ohmyplace Solutions. The 
            company is not responsible for the content or issues related to third-party websites. Users must promptly 
            remove any links objected to by Ohmyplace Solutions.
          </p>

          <h4>FEEDBACK</h4>
          <p>
            User feedback is protected by privacy regulations. By accepting the terms, you authorize OhMyPlace.Com 
            to conduct promotional calls and SMS messages through third-party platforms.
          </p>

          <h4>CHANGES TO TERMS AND CONDITIONS AND THE WEBSITE</h4>
          <p>
            Ohmyplace Solutions can modify the website and associated agreements/policies without prior notice. Users 
            are responsible for monitoring changes and deciding whether to continue using the website.
          </p>

          <h4>TERMINATION</h4>
          <p>
            Ohmyplace Solutions can terminate user access to the website at any time and for any reason. Users are 
            encouraged to promptly address any improper activity.
          </p>

          <h4>AGREEMENT ON PROPRIETARY MATERIALS</h4>
          <p>
            Materials on the website are the exclusive property of Ohmyplace Solutions, protected by copyright and other 
            laws. Users have a limited right to display, copy, and download materials for personal use. Distribution for 
            commercial purposes is prohibited without written permission.
          </p>

          <h4>THERE IS NO AGENCY OR PARTNERSHIP</h4>
          <p>
            The parties operate as independent contractors. No party can control the other’s actions or create legal 
            duties on their behalf.
          </p>

          <h4>NOTICES</h4>
          <p>
            Ohmyplace Solutions may send notifications to the user via the provided email address and mobile number. 
            Users must notify Ohmyplace Solutions of any changes to their contact information.
          </p>

          <h4>NO UNINTENTIONAL WAIVER; ENTIRE AGREEMENT; SEVERABILITY</h4>
          <p>
            This agreement, including the Privacy Policy, constitutes the complete agreement between the user and 
            Ohmyplace Solutions. No alterations are effective unless made in writing and signed by both parties.
          </p>

          <h4>NO THIRD-PARTY BENEFITS</h4>
          <p>
            This agreement benefits only the parties involved and is not intended to benefit any third party.
          </p>

          <h4>ASSIGNMENT</h4>
          <p>
            Ohmyplace Solutions can assign its rights and responsibilities under this agreement without user approval.
          </p>

          <h4>RULE OF LAW</h4>
          <p>
            Any conflicts or claims related to this agreement will be governed by Indian law, with the parties submitting 
            to the exclusive jurisdiction of the courts of Delhi.
          </p>

          <h4>WARRANTY DISCLAIMER</h4>
          <p>
            Ohmyplace Solutions disclaims all warranties related to the website and services provided. Users agree to 
            use the website at their own risk.
          </p>

          <h4>INDEMNITIES</h4>
          <p>
            Users agree to indemnify Ohmyplace Solutions from any claims arising from misuse of the website or services.
          </p>
        </div>
        {/* <footer>
          <div className="copyright">
            <span className="part1">{strings.COPYRIGHT_PART1}</span>
            <span className="part2">{strings.COPYRIGHT_PART2}</span>
            <span className="part3">{strings.COPYRIGHT_PART3}</span>
          </div>
        </footer> */}
      </div>
    </Layout>
  );
}

export default ToS;
