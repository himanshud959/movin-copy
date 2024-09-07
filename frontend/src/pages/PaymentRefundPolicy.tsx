import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import '../assets/css/paymentRefundPolicy.css';
import { strings } from '../lang/home'

const PaymentRefundPolicy = () => {
  useEffect(() => {
    // Add any necessary onLoad functionality here
  }, []);

  return (
    <Layout strict={false}>
      <div className="payment-refund-policy">
        <h1 className="policy-heading">Payment & Refund Policy</h1>
        <div className="policy-content">
          <h2>Booking Policy</h2>
          <p>
            First, the resident must register with his mobile number in order to start the booking. Then the guest must 
            book the room or private home of his/her choice after a simple KYC application on the website. The application 
            is authorised automatically or manually based on the property type and the information given by the resident.
          </p>
          <p>
            After the application is approved, the user must pay the booking fee of INR 1000 to reserve the home for which 
            he or she has applied. This processing fee is non-adjustable with the monthly rent or the security deposit 
            amount and covers the cost associated with the first move such as cleaning, police verification, background 
            check, and service charges.
          </p>
          <p>
            Prior to check-in, we request the resident to pay the first month’s rent in advance as well as the whole security 
            deposit, which is equal to one month’s rent.
          </p>

          <h2>Refund Policy</h2>
          <p>
            The booking amount INR 1000 is not refundable as it is adjusted towards your move-in readiness, platform fee, 
            rent agreement, the police verification fee, and other background verification fees. However, the booking 
            amount is refundable if the guest plans to cancel it within 24 hours of the booking.
          </p>
          <p>
            The advance rent paid is non-refundable once the tenant has checked in and has stayed for more than 1 day, and 
            he or she must serve one month's notice per the company’s guidelines. If the resident leaves without giving 
            1 month's notice and before the lease expires, he or she must pay the remaining one month’s advance rent.
          </p>
          <p>
            The security deposit is refundable when the resident has settled for normal wear and tear on the property 
            during his stay.
          </p>

          <h2>Monthly Rent Payment Policy</h2>
          <p>
            The guest must pay his/her rent and all of your monthly obligations online via the website or directly into the 
            Company Account (Ohmyplace Solutions Pvt Ltd). For your first month of stay, rent must be paid in full before 
            check-in. For all future months, rent must be paid in full by the 5th of each month. Our rent cycle is from 1st 
            to 1st of the month. First month&rsquo;s rent is adjusted to start the rent cycle accordingly.
          </p>
          <p>
            If the rent payment is late, the following penalty will be assessed: There will be a penalty of Rs. 100 every 
            day calculated from the 1st day of the month. There will be an immediate eviction if the rent is not paid, 
            even after the 20th. Complete loss of the deposit sum, and, if necessary, legal action, may follow.
          </p>

          <h2>General Terms of Booking, Move In, Stay & Move Out</h2>
          <ul>
            <li>Residents must settle all dues, including booking amount, monthly rent, and security deposit, before moving in.</li>
            <li>All dues must be paid before the move-out day.</li>
            <li>Visitors require company approval, and no guests are allowed without prior consent.</li>
            <li>Residents must check out in the presence of a company representative.</li>
            <li>The security deposit amount is refundable without interest charge after adjusting any dues such as pending electricity bills, meals, or any breakage into the property by the tenant.</li>
            <li>Residents must give a check-out notice one month in advance; otherwise, the remaining rent will be charged and adjusted from the security deposit.</li>
            <li>Residents must acknowledge that the booking amount is non-adjustable to the rent or security amount. It is collected to cover platform fees, move-in preparation costs, and related documentation, including the rent agreement and KYC verification of tenants.</li>
          </ul>
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

export default PaymentRefundPolicy;
