// src/app/page.tsx
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8 space-y-16">
      
      {/* 1. Hero */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <Image
          src="/images/avatar.png"
          alt="Mustafa Çakar"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div className="mt-6 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl font-bold">Mustafa Çakar</h1>
          <p className="text-lg text-gray-600">
            Full Stack & Game Developer.<br/>
            Next.js, Node.js, Unity, MySQL, Redis, WebSocket bilgisiyle projeler üretiyorum.
          </p>
        </div>
      </div>

      {/* 2. Projelerim */}
      <section id="projects" className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6">Projelerim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Örnek kart */}
          <a
            href="https://github.com/mustafackr0/auth-api-laravel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2">Project One</h3>
            <p className="text-gray-600">Kısa açıklama burada yer alır.</p>
          </a>
          {/* Birden fazla kart ekle */}
          <a
            href="https://github.com/mustafackr0/hotel-booking-API"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2">Project Two</h3>
            <p className="text-gray-600">Başka bir kısa açıklama.</p>
          </a>
        </div>
      </section>

      {/* 3. Referanslar */}
      <section id="references" className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6">Referanslar</h2>
        <div className="space-y-8">
          <blockquote className="pl-4 border-l-4 border-gray-300 italic">
            “Mustafa ile çalışmak tam bir zevkti. Projemiz zamanında ve kusursuz teslim edildi.”
            <cite className="block mt-2 text-sm text-gray-500">— Ali Yılmaz, XYZ Şirketi</cite>
          </blockquote>
          <blockquote className="pl-4 border-l-4 border-gray-300 italic">
            “Teknik becerileri ve iletişimi mükemmel. Kesinlikle tekrar çalışmayı isteriz.”
            <cite className="block mt-2 text-sm text-gray-500">— Ayşe Demir, ABC AŞ</cite>
          </blockquote>
        </div>
      </section>

    </main>
  )
}
