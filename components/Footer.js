import Link from "next/link";
import SendEmailAddress from "./SendEmailAddress";

export default function Footer({ data }) {
  return (
    <footer className="text-white md:py-16 py-12 bg-[#373737]">
      <div className="flex flex-col items-center justify-between mx-auto simple-container">
        <div className="flex flex-col justify-between w-full space-y-8 md:items-center md:flex-row md:space-y-0 md:space-x-4">
          <Link className="" href="/">
            <img
              src={data.logoLight}
              alt="Logo"
              className="w-32 h-auto md:w-36"
            />
          </Link>
          <nav className="flex-1">
            <ul className="inline-grid gap-4 lg:pl-20 md:gap-x-12 md:gap-y-4 lg:grid-cols-3 md:grid-cols-1">
              {data.links.map(({ item }) => (
                <li className="" key={item.text}>
                  <Link
                    className="text-2xl duration-200 focus-visible:opacity-60 hover:opacity-60"
                    href={item.link}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="">
            <p className="pb-4 text-xl font-bold md:pb-4">{data.write}</p>
            <SendEmailAddress />
          </div>
        </div>
        <div className="justify-start w-full mt-12 md:flex">
          <div className="flex items-center !mr-[10.5rem] space-x-4">
            {data.socials.map(({ item }) => (
              <a
                key={item.icon}
                href={item.link}
                target="_blank"
                className="duration-200 focus-visible:opacity-60 hover:opacity-60"
                rel="noopener noreferrer"
              >
                <img src={item.icon} alt="social" className="w-7 h-7 " />
              </a>
            ))}
          </div>

          <div className="py-6 space-y-4 md:flex md:space-x-8 md:py-0 md:space-y-0">
            <a
              href={`tel:${data.phone}`}
              className="flex items-center text-lg duration-200 focus-visible:opacity-60 hover:opacity-60"
            >
              <img
                src={data.phoneIcon}
                alt="Phone"
                className="w-10 h-10 mr-3"
              />
              {data.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
