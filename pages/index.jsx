import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-page">
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://next-blog-starter.vercel.app/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://next-blog-starter.vercel.app/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://next-blog-starter.vercel.app/favicon/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://next-blog-starter.vercel.app/favicon/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="https://next-blog-starter.vercel.app/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link
          rel="shortcut icon"
          href="https://next-blog-starter.vercel.app/favicon/favicon.ico"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link
          rel="alternate"
          type="application/rss+xml"
          href="https://next-blog-starter.vercel.app/feed.xml"
        />
        <meta
          name="description"
          content="A statically generated blog example using Next.js and Markdown."
        />
        <meta
          property="og:image"
          content="https://og-image.now.sh/Next.js%20Blog%20Starter%20Example.png?theme=light&amp;md=1&amp;fontSize=100px&amp;images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"
        />
        <title>Next.js Blog Example with Markdown</title>
        <meta name="next-head-count" content="15" />
        <link rel="preload" href="/blog/dea4994d6f04d9490ec7.css" as="style" />
        <link
          rel="stylesheet"
          href="/blog/dea4994d6f04d9490ec7.css"
          data-n-g=""
        />
      </Head>
      <div>
        <div id="__next">
          <div class="min-h-screen">
            <div class="border-b bg-accent-1 border-accent-2">
              <div class="container mx-auto px-5">
                <div class="py-2 text-center text-sm">
                  The source code for this blog is &nbsp;
                  <a
                    href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
                    class="underline hover:text-success duration-200 transition-colors"
                  >
                    available on GitHub
                  </a>
                  .
                </div>
              </div>
            </div>
            <main>
              <div class="container mx-auto px-5">
                <section class="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                  <h1 class="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                    Blog.
                  </h1>
                  <h4 class="text-center md:text-left text-lg mt-5 md:pl-8">
                    A statically generated blog example using
                    <a
                      href="https://nextjs.org/"
                      class="underline hover:text-success duration-200 transition-colors"
                    >
                      Next.js
                    </a>
                    and Markdown.
                  </h4>
                </section>
                <section>
                  <div class="mb-8 md:mb-16">
                    <div class="sm:mx-0">
                      <a
                        aria-label="Dynamic Routing and Static Generation"
                        href="https://next-blog-starter.vercel.app/posts/dynamic-routing"
                      >
                        <div className="main-div">
                          <Image
                            alt="Cover Image for Dynamic Routing and Static Generation"
                            src="/cover.jpg"
                            width={1240}
                            height={640}
                            decoding="async"
                            class="shadow-sm hover:shadow-md transition-shadow duration-200"
                            style={{
                              visibility: "visible",
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "border-box",
                              padding: "0px",
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                            sizes="100vw"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                    <div>
                      <h3 class="mb-4 text-4xl lg:text-6xl leading-tight">
                        <a
                          class="hover:underline"
                          href="https://next-blog-starter.vercel.app/posts/dynamic-routing"
                        >
                          Dynamic Routing and Static Generation
                        </a>
                      </h3>
                      <div class="mb-4 md:mb-0 text-lg">
                        <time datetime="2020-03-16T05:35:07.322Z">
                          March 16, 2020
                        </time>
                      </div>
                    </div>
                    <div>
                      <p class="text-lg leading-relaxed mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Praesent elementum facilisis leo vel
                        fringilla est ullamcorper eget. At imperdiet dui
                        accumsan sit amet nulla facilities morbi tempus.
                      </p>
                      <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full mr-4">
                          <Image
                            width={48}
                            height={48}
                            src="/jj.jpeg"
                            alt="JJ Kasper"
                          />
                        </div>

                        <div class="text-xl font-bold">JJ Kasper</div>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <h2 class="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                    More Stories
                  </h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    <div>
                      <div class="mb-5">
                        <div class="sm:mx-0">
                          <a
                            aria-label="Learn How to Pre-render Pages Using Static Generation with Next.js"
                            href="https://next-blog-starter.vercel.app/posts/hello-world"
                          >
                            <div
                            //     style="
                            //   display: block;
                            //   overflow: hidden;
                            //   position: relative;
                            //   box-sizing: border-box;
                            //   margin: 0;
                            // "
                            >
                              <div
                              //     style="
                              //   display: block;
                              //   box-sizing: border-box;
                              //   padding-top: 50%;
                              // "
                              ></div>
                              <img
                                alt="Cover Image for Learn How to Pre-render Pages Using Static Generation with Next.js"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async"
                                class="shadow-sm hover:shadow-md transition-shadow duration-200"
                                //     style="
                                //   visibility: hidden;
                                //   position: absolute;
                                //   top: 0;
                                //   left: 0;
                                //   bottom: 0;
                                //   right: 0;
                                //   box-sizing: border-box;
                                //   padding: 0;
                                //   border: none;
                                //   margin: auto;
                                //   display: block;
                                //   width: 0;
                                //   height: 0;
                                //   min-width: 100%;
                                //   max-width: 100%;
                                //   min-height: 100%;
                                //   max-height: 100%;
                                // "
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                      <h3 class="text-3xl mb-3 leading-snug">
                        <a
                          class="hover:underline"
                          href="https://next-blog-starter.vercel.app/posts/hello-world"
                        >
                          Learn How to Pre-render Pages Using Static Generation
                          with Next.js
                        </a>
                      </h3>
                      <div class="text-lg mb-4">
                        <time datetime="2020-03-16T05:35:07.322Z">
                          March 16, 2020
                        </time>
                      </div>
                      <p class="text-lg leading-relaxed mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Praesent elementum facilisis leo vel
                        fringilla est ullamcorper eget. At imperdiet dui
                        accumsan sit amet nulla facilities morbi tempus.
                      </p>
                      <div class="flex items-center">
                        <div>
                          <Image
                            class="w-12 h-12 rounded-full mr-4"
                            width={48}
                            height={48}
                            src="/tim.jpeg"
                            alt="JJ Kasper"
                          />
                        </div>
                        <div class="text-xl font-bold"> &nbsp;Tim Neutkens</div>
                      </div>
                    </div>
                    <div>
                      <div class="mb-5">
                        <div class="sm:mx-0">
                          <a
                            aria-label="Preview Mode for Static Generation"
                            href="https://next-blog-starter.vercel.app/posts/preview"
                          >
                            <div
                            //     style="
                            //   display: block;
                            //   overflow: hidden;
                            //   position: relative;
                            //   box-sizing: border-box;
                            //   margin: 0;
                            // "
                            >
                              <div
                              //     style="
                              //   display: block;
                              //   box-sizing: border-box;
                              //   padding-top: 50%;
                              // "
                              ></div>
                              <img
                                alt="Cover Image for Preview Mode for Static Generation"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async"
                                class="shadow-sm hover:shadow-md transition-shadow duration-200"
                                //     style="
                                //   visibility: hidden;
                                //   position: absolute;
                                //   top: 0;
                                //   left: 0;
                                //   bottom: 0;
                                //   right: 0;
                                //   box-sizing: border-box;
                                //   padding: 0;
                                //   border: none;
                                //   margin: auto;
                                //   display: block;
                                //   width: 0;
                                //   height: 0;
                                //   min-width: 100%;
                                //   max-width: 100%;
                                //   min-height: 100%;
                                //   max-height: 100%;
                                // "
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                      <h3 class="text-3xl mb-3 leading-snug">
                        <a
                          class="hover:underline"
                          href="https://next-blog-starter.vercel.app/posts/preview"
                        >
                          Preview Mode for Static Generation
                        </a>
                      </h3>
                      <div class="text-lg mb-4">
                        <time datetime="2020-03-16T05:35:07.322Z">
                          March 16, 2020
                        </time>
                      </div>
                      <p class="text-lg leading-relaxed mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Praesent elementum facilisis leo vel
                        fringilla est ullamcorper eget. At imperdiet dui
                        accumsan sit amet nulla facilities morbi tempus.
                      </p>
                      <div class="flex items-center">
                        <img
                          src="/joe.jpeg"
                          class="w-12 h-12 rounded-full mr-4"
                          alt="Joe Haddad"
                        />
                        <div class="text-xl font-bold">Joe Haddad</div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </main>
          </div>

          <footer class="bg-accent-1 border-t border-accent-2">
            <div class="container mx-auto px-5">
              <div class="py-28 flex flex-col lg:flex-row items-center">
                <h3 class="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                  Statically Generated with Next.js.
                </h3>
                <div class="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                  <a
                    href="https://nextjs.org/docs/basic-features/pages"
                    class="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                  >
                    Read Documentation
                  </a>
                  <a
                    href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
                    class="mx-3 font-bold hover:underline"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
