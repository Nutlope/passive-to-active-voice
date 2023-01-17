import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Transform passive voice into active voice."
          />
          <meta
            property="og:site_name"
            content="passive-to-active.vercel.app"
          />
          <meta
            property="og:description"
            content="Transform passive voice into active voice."
          />
          <meta property="og:title" content="Active Voice Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Active Voice Generator" />
          <meta
            name="twitter:description"
            content="Transform passive voice into active voice."
          />
          <meta
            property="og:image"
            content="https://og.anuragroy.dev/api?theme=zinc&title=Passive+to+Active+Generator&description=Turn+your+passive+voice+into+active+voice+using+AI.&avatar=https%3A%2F%2Fgithub.com%2Fnutlope.png&author=Hassan+El+Mghari&logo=%F0%9F%90%A6"
          />
          <meta
            name="twitter:image"
            content="https://og.anuragroy.dev/api?theme=zinc&title=Passive+to+Active+Generator&description=Turn+your+passive+voice+into+active+voice+using+AI.&avatar=https%3A%2F%2Fgithub.com%2Fnutlope.png&author=Hassan+El+Mghari&logo=%F0%9F%90%A6"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
