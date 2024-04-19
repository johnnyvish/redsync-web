import Link from "next/link";

export default function Payment() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ff2d55]">
      <div className="flex flex-col justify-center items-center text-white space-y-8">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h2 className="text-5xl font-bold">RedSync</h2>
          <div className="flex justify-center items-center space-x-2 font-semibold">
            <h2 className="text-7xl">$30</h2>
            <h2 className="leading-12 text-2xl">
              per <br /> month
            </h2>
          </div>
        </div>
        <Link href="https://buy.stripe.com/3cs9E37JZ2m4ati9AA">
          <button className="bg-white rounded-[32px] px-24 py-4">
            <h2 className="text-2xl text-gray-600">Subscribe</h2>
          </button>
        </Link>
        <div className="flex flex-col justify-center items-center space-y-4">
          <h3 className="text-xl font-semibold">Payment Methods</h3>
          <div className="flex justify-center items-center space-x-4">
            <img
              src="https://js.stripe.com/v3/fingerprinted/img/amex-b933c9009eeaf8cfd07e789c549b8c57.svg"
              alt="amex"
              className="h-6"
            />
            <img
              src="https://js.stripe.com/v3/fingerprinted/img/mastercard-86e9a2b929496a34918767093c470935.svg"
              alt="MasterCard"
              className="h-6"
            />
            <img
              src="https://js.stripe.com/v3/fingerprinted/img/visa-fb36094822f73d7bc581f6c0bad1c201.svg"
              alt="visa"
              className="h-6"
            />
            <img
              src="https://js.stripe.com/v3/fingerprinted/img/apple_pay-ab270d32249c6d7660ac5ac394ed62ac.svg"
              alt="apple pay"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
