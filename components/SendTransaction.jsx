"use client";
import React, { useRef } from "react";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Link from "next/link";

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
            className="hidden"
            name="address"
            value={data.vendorWalletAddress}
            placeholder="0xA0Cf…251e"
            required
          />
          <input
            className="hidden"
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
        Buy Now
      </button>

      {/* {hash && <div>Transaction Hash: {hash}</div>} */}
      {isPending && (
        <div>
          Transaction Pending...
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {isConfirming && (
        <div>
          Waiting for confirmation...
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {isConfirmed && (
        <Dialog open>
          <DialogContent className="sm:max-w-[425px]">
            <div className="max-w-[600px] rounded-lg p-5 mx-auto flex flex-col">
              <iframe src="https://lottie.host/embed/c53eedee-7be7-4cde-935d-58d729760624/4QfObE68nv.json"></iframe>

              <div className="text-2xl font-bold">Congratulations !!</div>
              <div className="text-lg font-bold mt-2">
                Your order has been placed successfully.
              </div>
              <div className="text-base truncate mt-5">Transaction Hash:</div>

              <input className="max-w-[20rem]" type="text" value={hash} />
              <div className="text-base truncate mt-5">
                Vendor: {data.vendorName}{" "}
              </div>
              <div className="text-base mt-5">
                For any questions or enquiries contact us
              </div>
              <div className="underline">test@email.com</div>

              <Link href="/" className="font-bold mt-5">
                <button className=" w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                  Go Back
                </button>
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      )}
      {error && (
        <Dialog open>
          <DialogContent className="sm:max-w-[425px]">
            <div className="max-w-[600px] rounded-lg p-5 mx-auto flex flex-col">
              <div class="flex items-center justify-center">
                <iframe src="https://lottie.host/embed/53540b91-a400-4232-992f-d46e430dcf1d/0IgRzflALO.json"></iframe>
              </div>

              <div className="text-2xl font-bold">OOOPS !!</div>
              <div className="text-lg font-bold mt-2">An error occured</div>

              <div className="text-base mt-5">
                Error: {error.shortMessage || error.message}
              </div>

              <Link href="/" className="font-bold mt-5">
                <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                  Go Back
                </button>
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default SendTransaction;
