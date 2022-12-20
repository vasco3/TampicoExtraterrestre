import Head from 'next/head';
import Image from 'next/image';
import libroPng from '../public/libro-ovnis-tampico.png';
import escafandraPng from '../public/escafandra.jpg';
import aliensPng from '../public/aliens-de-tampico.png';
import ovnisPng from '../public/ovnis-desviando-huracan.png';

export default function Home() {
  return (
    <div className={''}>
      <Head>
        <title>Tampico Extraterrestre</title>
        <meta
          name="description"
          content="Ovnis en Tampico. Extraterrestres en la playa Miramar protegen a Tampico de los huracanes. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'max-w-screen-lg mx-auto mt-12 px-4'}>
        <div className=" prose">
          <h1 className={''}>Tampico Extraterrestre</h1>
          <p className={''}>
            Ovnis en Tampico. Extraterrestres en la playa Miramar protegen a
            Tampico de los huracanes. Todo esto suena a ciencia ficción. Es una
            divertida leyenda urbana. Pero, ¿es cierto?{' '}
            <a href="https://www.elsoldetampico.com.mx/circulos/turismo/presentan-libro-sobre-ovnis-en-tampico-mas-de-45-testimonios-de-contactos-extraterrestres-8098017.html">
              Hay un libro que documenta 46 testimonios.
            </a>{' '}
            ¿Qué opinas?
          </p>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1DvULt3bZ5A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <h3>Enlaces relacionados</h3>

          <ol>
            <li>
              <a href="https://www.reddit.com/r/TampicoExtraterrestre/">
                Reddit Tampico Extraterrestre
              </a>
            </li>{' '}
            <li>
              <a href="https://m.facebook.com/groups/tampicoantiguo/permalink/2370517826307249/">
                Discusión en facebook sobre el tema
              </a>
            </li>
            <li>
              <a href="https://www.elsoldetampico.com.mx/circulos/turismo/presentan-libro-sobre-ovnis-en-tampico-mas-de-45-testimonios-de-contactos-extraterrestres-8098017.html">
                <Image
                  src={libroPng}
                  width="256"
                  alt={`Libro: "La historia de la base extraterrestre de la playa
                Miramar del sur de Tamaulipas" por Francisco Ramos`}
                />
                {` Libro: "La historia de la base extraterrestre de la playa
                Miramar del sur de Tamaulipas" por Francisco Ramos`}
              </a>
            </li>
            <li>
              <a href="https://www.amazon.com.mx/escafandra-y-otros-relatos-ebook/dp/B09X8HVWCW">
                <Image
                  src={escafandraPng}
                  width="256"
                  alt={`Libro: "La Escafandra y otros relatos" por Kristian Eichelman`}
                />
                {` Libro: "La escafandra y otros relatos" por Kristian Eichelman`}
              </a>
            </li>
          </ol>
          <div>
            <h3>Arte</h3>
            <p>
              <figure>
                <Image src={aliensPng} alt="Aliens en Tampico" />
                <figcaption>Aliens en la playa Miramar</figcaption>
              </figure>
              <figure>
                <Image
                  src={ovnisPng}
                  alt="Ovnis desviando huracan en Tampico"
                />
                <figcaption>Ovnis desviando un huracán</figcaption>
              </figure>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
