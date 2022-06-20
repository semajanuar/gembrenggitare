/* This example requires Tailwind CSS v2.0+ */
import Navbar from './komponen/Navbar'
import { Footer } from './Footer';

export default function Example() {
    return (
        <>
        <Navbar/>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-semibold">
                GEMBRENG GITAR
              </p>
              <p className="text-gray-700"></p>
              <p> Gembreng Gitar hadir sebagai wujud sumbangsi terhadap dunia musik dengan menghadirkan chord-chord kunci gitar dasar dari semua jenis lagu.</p>
              <p> Sebelum kalian melangkah lebih jauh untuk menjelejahi situs ini, kami tekankan lagi bahwa hampir keseluruhan chord kunci gitar yang ada di situs ini di publikasikan menjadi chord dasar.
              <p>Untuk memberikan tingkat kenyamanan kami sudah melengkapi situs ini dengan alat transpose chord yang ada di bagian posting tepatnya di bawah judu setiap postingan. Ini sangat berguna saat anda ingin memainkan chord yang di situs ini dengan chord-chord yang lain.</p>
                <p>HAPPY GENJRENGG!!!</p>
              </p>
            </div>
            </div>
          </div>
          </div>
        <div>
            <a class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out text-yellow-400 hover:text-red-500 font-semibold">LIRIS CHORD TERBARU</a>
            <p><a href="Mangu" class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out font-semibold text-yellow-400 hover:text-red-500">Fourtwnty - Mangu (ft. Charita Utami)</a></p>
            <p><a href="Tulus" class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out font-semibold text-yellow-400 hover:text-red-500">Tulus - Hati-Hati Di Jalan</a></p>
            <p><a href="Akutenang" class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out font-semibold text-yellow-400 hover:text-red-500">Fourtwnty - Aku Tenang</a></p>
            <p><a href="Comingsoon" class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out font-semibold text-yellow-400 hover:text-red-500">COMINGSOON</a></p>
        </div>
    
      </>
    );
  };
