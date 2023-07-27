
const About = () => {
  return (
    <section className="">
       {/* bg-emerald-500 */}
      <div>
        {/* <div id="recaptcha-container"></div> */}
        <h2 className="text-center font-medium text-2xl">
          The best bank you can find.
        </h2>
        <div className=" flex flex-col gap-4 rounded-lg p-4">
          <h1 className="text-center leading-normal font-medium text-3xl mb-6">
            Welcome to <br /> The Developers Bank.
          </h1>
          <p className="text-center leading-normal font-medium text-3xl mb-6">
            We provide a range of financial services to meet your needs.
          </p>
          {/* new  */}
          <div className="">
            <h2 className="leading-normal font-medium text-3xl mb-4 mx-6">About Our Bank</h2>
            <p className="leading-normal font-sm text-lg mb-6 mx-6">Welcome to our bank! We provide a range of financial services to meet your needs.</p>

            <h3 className="leading-normal font-medium text-3xl mb-4 mx-6">Our Mission</h3>
            <p className="leading-normal font-sm text-lg mb-6 mx-6">Our mission is to empower our customers with convenient and secure banking solutions.</p>

            <h3 className="leading-normal font-medium text-3xl my-6 mx-6">Services Offered</h3>
            <ul className="list-disc">
              <li className="leading-normal font-sm text-md mx-16 mb-2">Personal Banking</li>
              <li className="leading-normal font-sm text-md mx-16 mb-2">Business Banking</li>
              <li className="leading-normal font-sm text-md mx-16 mb-2">Loans and Mortgages</li>
              <li className="leading-normal font-sm text-md mx-16 mb-2">Investment Services</li>
              <li className="leading-normal font-sm text-md mx-16 mb-2">Online Banking</li>
            </ul>

            <h3 className="leading-normal font-medium text-3xl my-6 mx-6">Why Choose Our Bank?</h3>
            <ul className="list-disc">
              <li className="leading-normal font-sm text-md mx-16 mb-2">Wide range of financial products and services</li>
              <li className="leading-normal font-sm text-md mx-16 mb-2">Secure and reliable online banking platform</li>
              <li className="leading-normal font-sm text-md mx-16 mb-2">Experienced and friendly customer service</li>
              <li className="leading-normal font-sm text-md mx-16 mb-2">Competitive interest rates</li>
              <li className="leading-normal font-sm text-md mx-16 mb-2">Convenient branch locations</li>
            </ul>

            <h3 className="leading-normal font-medium text-3xl my-6 mx-6">Contact Us</h3>
            <p className="leading-normal font-sm text-md mx-16 mb-2">For any inquiries or assistance, please reach out to our customer support team:</p>
            <p className="leading-normal font-sm text-md mx-16 mb-2">Email: info@bank.com</p>
            <p className="leading-normal font-sm text-md mx-16 mb-2">Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;