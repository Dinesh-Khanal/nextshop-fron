import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-2 px-16 bg-zinc-700 text-zinc-300 flex gap-2 flex-wrap items-center justify-between">
      <div className="flex flex-col gap-1 items-center w-full sm:w-1/5">
        <p className="text-center text-sm">
          Download App for Android and IOS mobile phone
        </p>
        <Image
          src="/images/playstore.png"
          alt="playstore"
          height={318}
          width={1079}
          className="w-32"
        />
        <Image
          src="/images/Appstore.png"
          alt="Appstore"
          height={320}
          width={1078}
          className="w-32"
        />
      </div>

      <div className="w-full sm:w-1/2 text-center">
        <h1 className="text-lg sm:text-3xl text-white">
          SNEHA ONLINE SHOPPING.
        </h1>
        <p className="text-sm">High Quality is our first priority</p>

        <p className="text-sm">Copyrights 2021 &copy; Dinesh Khanal</p>
      </div>

      <div className="flex flex-col w-full sm:w-1/5 items-center text-sm">
        <h4>Follow Us</h4>
        <a href="https://www.youtube.com/user/khanaldk/videos">Youtube</a>
        <a href="https://www.facebook.com/dineshkhanal">Facebook</a>
      </div>
    </footer>
  );
}
