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
              
              <p className="mb-2 text-lg font-bold">Step 1 (Pelajari Kunci dasar)</p>

              <p className="text-gray-700">
              Sebelum kamu belajar memetik gitar, terlebih dahulu kamu perlu mengetahui kunci dasar dalam bermain gitar. Biasanya gitar memiliki 6 senar, mulai dari senar yang ada bagian paling bawah hingga paling atas sendiri.
              Selain itu, ada dua jenis gitar yang sering dimainkan oleh banyak orang, yakni gitar elektrik dan akustik. Meski keduanya memiliki nada yang hampir mirip, ada perbedaan dari kedua jenis gitar ini salah satunya pada bagian tuningnya.
              <p>Berikut kunci dasar yang perlu kamu ketahui:</p>
              <p>- Senar 1 hasilkan nada E</p> 
              <p>- Senar 2 hasilkan nada B</p>
              <p>- Senar 3 hasilkan nada G</p>
              <p>- Senar 3 hasilkan nada G</p>
              <p>- Senar 4 hasilkan nada D</p>
              <p>- Senar 5 hasilkan nada A</p>
              <p>- Senar 6 hasilkan nada E</p>
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
              <p className="mb-2 text-lg font-bold">Step 2 (Mempelajari cara tuning atau menyetel senar gitar)</p>
              <p className="text-gray-700">
              Ketika kamu sudah mendapatkan posisi yang nyaman, tahap selanjutnya adalah menyetel senar gitar. Pasalnya jika tidak setel, senar biasaya tidak mengeluarkan suara yang merdu. Belajar tuning perlu kamu lakukan agar gitar bisa menghasilkan suara petikan yang merdu.
              Belajar cara tuning senar gitar itu penting karena bisa membuat telingamu terbiasa mendengar nada yang tepat.
              <p>Cara menyetel senar gitar:</p>
              <p>- Ketahui nama-nama senar. Dari atas (yang paling tebal) ke bawah (yang paling tipis) urutannya adalah E, A, D, G, B, dan E'.</p>
              <p>- Atur tuner (putaran yang ada di kepala gitar) sesuai dengan kebutuhanmu. Kalau menginginkan nada yang tinggi, kencangkan senar gitarmu. Tapi jika kamu menginginkan nada rendah, putar tuner-nya sampai senar mengendur dengan tepat.</p>
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
              <p className="mb-2 text-lg font-bold">Step 3 (Awali dengan bermain satu lagu dengan kunci yang mudah)</p>
              <p className="text-gray-700">
              Supaya kamu tidak bosan dalam berlatih, maka pilihlah satu lagu dengan kunci yang sangat mudah atau menggunakan kunci dasar. Jika kamu sudah menguasai satu lagu, maka untuk tahap selanjutnya akan dengan mudah memahami dalam bermain gitar.
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
            src="https://musisi.org/wp-content/uploads/2015/08/gambar-kunci-dasar-gitar.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <Footer/>
      </>
    );
  };