/* This example requires Tailwind CSS v2.0+ */
import Navbar from './komponen/Navbar'
import { Footer } from './Footer';

export default function Example() {
    return (
        <>
        <Navbar/>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              
              <p className="mb-2 text-lg font-bold">Step 1 (Picking [pemetikan gitar])</p>

              <p className="text-gray-700">
              Saat anda menginginkan cara belajar melodi gitar. Anda juga akan dihadapkan dengan picking yang memang sangat menentukan permainan melodi yang akan anda mainkan. Untuk menambah kecepatan juga dibutuhkan teknik picking yang berbeda. Yang paling dasar harus anda kuasai dalam cara belajar melodi gitar untuk picking adalah up-down stroke picking, dalam strumming juga ada istilah up-down stroke namun itu untuk pola strummingnya.
              </p>
              
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Step 2 (Belajar Scale)</p>
              <p className="text-gray-700">
              Cara belajar melodi gitar selanjutnya yaitu tentang scale. Ketika anda menginginkan sebuah improvisasi atau menciptakan sendiri solo gitar, maka hal pertama yang wajib anda kuasai adalah hal yang satu ini. Scale ini juga terdiri dari banyak sekali jenisnya tergantung dari karakter musik yang anda inginkan. Namun untuk seorang pemula dalam bermain melodi gitar, anda hanya perlu menguasai sebuah scale diatonic pada masing masing nada dasar. Untuk pertama, anda dapat belajar dengan nada dasar C yang paling banyak digunakan pada lagu lagu populer.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Step 3 (Improvisasi)</p>
              <p className="text-gray-700">
              Ini merupakan tahap atau cara belajar melodi gitar yang terakhir pada panduan kali ini. Yaitu improvisasi, pada dasarnya improvisasi adalah sebuah cara yang dilakukan oleh gitaris untuk memperkaya dan membuat permainan melodinya sendiri dengan iringan musik yang ada. Misalnya anda adalah seorang gitaris lead dalam sebuah band, maka ketika memainkan sebuah lagu dan sampai pada bagian solo gitar, maka anda dapat membuat melodi sendiri dengan improvisasi. Namun perlu diingat bahwa sebelum anda membuat sendiri melodi, maka anda juga harus menguasai tentang scale dan samakan dengan iringan yang dimainkan band anda apakah menggunakan nada dasar C atau yang lainnya.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Step 4 (Berlatih secara rutin)</p>
              <p className="text-gray-700">
              Setelah kamu mengenal semuanya dengan baik, tahap selanjutnya adalah dengan rajin latihan. Cara ini terbilang cukup penting karena jika tidak terus diasah, maka kemampuan kamu dalam bermain gitar tidak akan berkembang, bisa saja kamu lupa dengan apa yang telah kamu pelajari sebelumnya.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-6 text-gray-600"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1">
              <p className="mb-2 text-lg font-bold">Success</p>
              <p className="text-gray-700" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="inset-0 object-cover object-bottom w-screen rounded shadow-lg h-screen lg:absolute lg:h-auto"
            src="https://1.bp.blogspot.com/-8y2PjUFOaEc/V8vl5JdAhUI/AAAAAAAAAnY/S9oSIQ-KCyUpBrPx1-2Lu_Mf6aTT9JoZACEw/s320/Panduan%2BLengkap%2BBermain%2BMelodi%2BGitar%2B%25283%2529.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <Footer/>
      </>
    );
  };