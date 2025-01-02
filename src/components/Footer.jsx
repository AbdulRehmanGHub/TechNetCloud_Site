import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const social = [
    {
      id: 1,
      name: "fb",
      icon: <FontAwesomeIcon icon={faFacebookF} />,
      link: "https://www.facebook.com/groups/180797321520415/user/100087677676688",
    },
    {
      id: 2,
      name: "wa",
      icon: <FontAwesomeIcon icon={faWhatsapp} />,
      link: "https://wa.me/+923201207871",
    },
    {
      id: 3,
      name: "yt",
      icon: <FontAwesomeIcon icon={faYoutube} />,
      link: "https://www.youtube.com/@TechNetCloud",
    },
    {
      id: 4,
      name: "li",
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      link: "https://www.linkedin.com/company/technetcloud/mycompany/",
    },
  ];

  return (
    <>
      <footer
        className="
      footer max-w-full md:px-6 md:pt-[100px] md:flex md:items-center md:justify-center
      px-2 pt-[40px] flex
      "
      >
        <div
          className="container flex justify-center items-center flex-wrap gap-4
        2xl:min-w-[1280px] 2xl:flex 2xl:justify-between 2xl:items-center 2xl:gap-4
        "
        >
          <div className="one flex flex-col gap-8 max-w-[390px] min-h-[300px] p-2 2xl:max-w-[500px]">
            <Link to={"/"}>
              <div className="logo rounded-[50%] bg-white w-12 h-12 p-2 2xl:w-16 2xl:h-16">
                <img
                  className="w-full h-full cursor-pointer"
                  src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Ffavicon.png&w=256&q=75"
                  alt="logo"
                />
              </div>
            </Link>
            <div className="text text-[#95ADB1]">
              <p className="text-[16px] leading-normal 2xl:text-[23px]">
                Transforming industries with cutting-edge technology and
                seamless integration. Driving digital transformation with
                innovative solutions and unparalleled expertise.
              </p>
            </div>

            <div className="socials flex items-center gap-4">
              {social.map(({ id, name, icon, link }) => {
                return (
                  <div
                    key={id}
                    className={`text-xl cursor-pointer 2xl:text-3xl + ${name}`}
                  >
                    <a
                      className="foot-icon hover:text-[#2c92c2]"
                      target="_blank"
                      href={link}
                    >
                      {icon}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="
          two md:flex md:flex-col md:gap-8 md:w-[220px] md:min-h-[300px] md:p-2
          flex flex-col gap-4 w-full px-2 py-2 2xl:w-[300px]
          "
          >
            <h3 className="text-xl font-semibold 2xl:text-3xl">Useful Links</h3>
            <ul className="text-[#95ADB1] flex flex-col gap-4">
              <Link to={"/about"}>
                <li className="foot-link cursor-pointer 2xl:text-xl">About</li>
              </Link>
              <Link to={"/contact"}>
                <li className="foot-link cursor-pointer 2xl:text-xl">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div
            className="three md:flex md:flex-col md:gap-8 md:w-[220px] md:min-h-[300px] md:p-2
          flex flex-col gap-4 w-full px-2 py-2 2xl:w-[300px]"
          >
            <h3 className="text-xl font-semibold 2xl:text-3xl">Services</h3>
            <ul className="text-[#95ADB1] flex flex-col gap-4">
              <Link to={"/services"}>
                <li className="foot-link cursor-pointer 2xl:text-xl">
                  Services
                </li>
              </Link>
              <Link>
                <li className="foot-link cursor-pointer 2xl:text-xl">
                  Courses
                </li>
              </Link>
              <Link>
                <li className="foot-link cursor-pointer 2xl:text-xl">
                  Internships
                </li>
              </Link>
            </ul>
          </div>
          <div
            className="four md:flex md:flex-col md:gap-8 md:w-[220px] md:min-h-[300px] md:p-2
          flex flex-col gap-4 w-full px-2 py-2 2xl:w-[300px]"
          >
            <h3 className="text-xl font-semibold 2xl:text-3xl">
              Support & Help
            </h3>
            <ul className="text-[#95ADB1] flex flex-col gap-4">
              <Link to={"/contact"}>
                <li className="foot-link cursor-pointer 2xl:text-xl">
                  Mail Us
                </li>
              </Link>
              <Link>
                <li className="foot-link cursor-pointer 2xl:text-xl">FAQs</li>
              </Link>
              <Link to={"/about"}>
                <li className="foot-link cursor-pointer 2xl:text-xl">About</li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>

      <div className="createdBy text-center py-4 2xl:text-2xl">
        <p>
          Created with{" "}
          <span className="foot-link">
            <FontAwesomeIcon icon={faHeart} />
          </span>{" "}
          by{" "}
          <a
            className="link"
            target="_blank"
            href="https://github.com/abdulrehmanghub"
          >
            Abdul Rehman
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
