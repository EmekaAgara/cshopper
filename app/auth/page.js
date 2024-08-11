import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <div className="relative ms-4 hidden md:block ">
                <Image
                  className="w-full p-6 object-fill sm:mt-20 mt-0 rounded"
                  width={300}
                  height={200}
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbmRzfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbmRzfGVufDB8fDB8fHww"
                  alt="Image Description"
                />
              </div>
            </div>
            <w3m-button />
          </div>
        </div>
      </div>
    </>
  );
}
