const CartAddress = ({ userAddress }) => {
  return userAddress.name ? (
    <div className="cart__address border border-red-300/45 bg-red-300/35 rounded-[.2rem] p-[.65rem] text-[.78rem] leading-[1rem] text-gray-950">
      <div className="name font-medium text-black">{userAddress.name}</div>
      <div className="address">{userAddress.address}</div>
      <div className="pincode text-[.75rem]">{userAddress.pincode}</div>
      <div className="phone text-[.75rem] mt-[.2rem]">{userAddress.phone}</div>
      <button className="text-[.7rem] text-red-950 capitalize underline mt-[.5rem]">
        change address
      </button>
    </div>
  ) : (
    <div className="border border-neutral-900/60 rounded-[.2rem] p-[.65rem] mt-[.7rem] ">
      <p className="note text-[.78rem]">
        Your address is not added. Add address for purchase.
      </p>
      <button className="text-[.7rem] underline text-purple-900 hover:text-purple-950  mt-[.2rem]">
        Add Address
      </button>
    </div>
  );
};

export default CartAddress;
