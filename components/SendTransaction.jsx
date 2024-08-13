"use client";
import React, { useRef } from "react";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";

function SendTransaction({ data }) {
  const formRef = useRef(null); // Create a ref for the form

  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();

  async function submit(e) {
    if (e) e.preventDefault(); // Prevent default behavior if e is passed

    const formData = new FormData(formRef.current); // Use the ref to get the form data
    const to = formData.get("address");
    const value = formData.get("value");
    sendTransaction({ to, value: parseEther(value) });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <div>
      <form ref={formRef} onSubmit={submit}>
        <div>
          <input
            name="address"
            value={data.vendorWalletAddress}
            placeholder="0xA0Cf…251e"
            required
          />
          <input
            name="value"
            value={data.newPrice}
            placeholder="0.05"
            required
          />
        </div>
      </form>

      <button
        onClick={submit}
        className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
      >
        Buy Noww {data?.currency}
      </button>

      {hash && <div>Transaction Hash: {hash}</div>}
      {isPending && <div>Transaction Pending...</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      {error && <div>Error: {error.shortMessage || error.message}</div>}
    </div>
  );
}

export default SendTransaction;
