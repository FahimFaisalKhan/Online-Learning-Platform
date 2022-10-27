import React from "react";

const Blog = () => {
  return (
    <section class="container mx-auto glass lg:h-screen mt-10 rounded-lg flex flex-col items-center justify-center text-neutral-content gap-y-5">
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">♦ What is cors?</div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">Cors:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            Cross-origin resource sharing (CORS) is a browser mechanism which
            enables controlled access to resources located outside of a given
            domain. It extends and adds flexibility to the same-origin policy
            (SOP). However, it also provides potential for cross-domain attacks,
            if a website's CORS policy is poorly configured and implemented.
            CORS is not a protection against cross-origin attacks such as
            cross-site request forgery (CSRF).
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">
          ♦ Why we are using firebase?
        </div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">Firebase:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            We are using firbase to handle our authentication system . Firebase
            is a google owned organization so its very clear that their
            authentication system would be secure . Also firebase is easy to
            setup and maintain . The other alternavies of firebase would be
            AuthO, MongoDB,Okta etc.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">
          ♦ What is node , How does it work?
        </div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">Node:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive. Node.js accepts the request
            from the clients and sends the response, while working with the
            request node.js handles them with a single thread. To operate I/O
            operations or requests node.js use the concept of threads. Thread is
            a sequence of instructions that the server needs to perform. It runs
            parallel on the server to provide the information to multiple
            clients. Node.js is an event loop single-threaded language. It can
            handle concurrent requests with a single thread without blocking it
            for one request.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">
          ♦ How does private route work?
        </div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">Privateroute:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            Private route limits access of the user to the specific routes which
            are not private . Privaterote checks if the user exists/loggedin or
            not, every time when an user tries to access them if the user does
            not exist or not logged in private route simply denies them access
            to thet path.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
