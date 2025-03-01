import razorpayLogo from "../assets/images/razorpay.png";
import stripeLogo from "../assets/images/stripe.png";

const CheckoutPayments = ({ selectedPayment, setSelectedPayment }) => {
  return (
    <div className="checkout__payments">
      <p className="section__head text-[.8rem] font-medium capitalize">
        payment options
      </p>
      <div className="payment-methods mt-[.5rem] grid grid-cols-2 gap-[.5rem]">
        <div
          className="payment-method flex items-center gap-[.5rem] border border-neutral-400/60 rounded-[.2rem] p-[.4rem]"
          onClick={() => setSelectedPayment("razorpay")}
        >
          <p
            className={`border border-neutral-500 w-[.7rem] h-[.7rem] rounded-full ${
              selectedPayment === "razorpay" ? "bg-green-700 border-none" : ""
            }`}
          ></p>
          <img
            src={razorpayLogo}
            alt=""
            className="w-[5rem] h-[1rem] object-cover"
          />
        </div>
        <div
          className="payment-method flex items-center gap-[.5rem] border border-neutral-400/60 rounded-[.2rem] p-[.4rem]"
          onClick={() => setSelectedPayment("stripe")}
        >
          <p
            className={`border border-neutral-500 w-[.7rem] h-[.7rem] rounded-full ${
              selectedPayment === "stripe" ? "bg-green-700 border-none" : ""
            }`}
          ></p>
          <img
            src={stripeLogo}
            alt=""
            className="w-[5rem] h-[1rem] object-contain"
          />
        </div>
        <div
          className="payment-method flex items-center gap-[.5rem] border border-neutral-400/60 rounded-[.2rem] p-[.4rem]"
          onClick={() => setSelectedPayment("cod")}
        >
          <p
            className={`border border-neutral-500 w-[.7rem] h-[.7rem] rounded-full ${
              selectedPayment === "cod" ? "bg-green-700 border-none" : ""
            }`}
          ></p>
          <p className="capitalize text-[.8rem] font-medium text-gray-600">
            cash on delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayments;
