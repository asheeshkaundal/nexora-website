import Link from "next/link";

export default function ThankYou() {
  return (
    <main
      className="min-h-screen py-20"
      style={{ background: "linear-gradient(180deg,#F8FAFF 0%, #F3F4F6 60%)" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg text-center p-10">
          <h1
            className="text-4xl font-extrabold mb-4"
            style={{
              background: "linear-gradient(90deg,#6D28D9,#A78BFA)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Thanks — we received your request
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Our team will review your details and get back to you shortly.
          </p>
          <Link href="/">
            <button
              className="px-6 py-2 rounded-md text-white"
              style={{
                background: "linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%)",
              }}
            >
              Return home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
