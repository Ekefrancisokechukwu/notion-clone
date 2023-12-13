import Image from "next/image";
import Link from "next/link";

export const ProductsDropdown = () => {
  return (
    <ul className="w-max bg-background p-1.5 shadow-md columns-2 column-so">
      <li>
        <Link
          href={"/"}
          className="p-1  rounded-lg inline-block hover:bg-gray-50 transition w-full"
        >
          <h3 className="font-medium">Wikis</h3>
          <p className="text-sm text-gray-400">Centralize your knowledge</p>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="p-1  rounded-lg inline-block hover:bg-gray-50 transition w-full"
        >
          <h3 className="font-medium">Projects</h3>
          <p className="text-sm text-gray-400"> For every team or size</p>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="p-1  rounded-lg inline-block hover:bg-gray-50 transition w-full"
        >
          <h3 className="font-medium">Docs</h3>
          <p className="text-sm text-gray-400">Simple & powerful</p>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="p-1  rounded-lg inline-block hover:bg-gray-50 transition w-full"
        >
          <h3 className="font-medium">Notion AI</h3>
          <p className="text-sm text-gray-400">Integrated AI assistant</p>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="p-1  rounded-lg inline-block hover:bg-gray-50 transition w-full"
        >
          <h3 className="font-medium">Template gallery</h3>
          <p className="text-sm text-gray-400">Setups to get you started</p>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="p-1  rounded-lg inline-block hover:bg-gray-50 transition w-full"
        >
          <h3 className="font-medium">Customer stories</h3>
          <p className="text-sm text-gray-400">See how teams use Notion</p>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="p-1  rounded-lg inline-block hover:bg-gray-50 transition w-full"
        >
          <h3 className="font-medium">Connections</h3>
          <p className="text-sm text-gray-400">Connect your tools to Notion</p>
        </Link>
      </li>
    </ul>
  );
};

export const DownloadDropdown = () => {
  return (
    <ul className="w-max bg-background p-1.5 shadow-md ">
      <li>
        <Link
          href={"/"}
          className="p-1 font-medium  rounded-lg inline-block hover:bg-gray-50 transition w-full"
        >
          ios & Andriod
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="p-1 font-medium  rounded-lg inline-block hover:bg-gray-50 transition w-full"
        >
          Mac & Windows
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="p-1 font-medium  rounded-lg inline-block hover:bg-gray-50 transition w-full"
        >
          Web Clipper
        </Link>
      </li>
    </ul>
  );
};

export const SolutionDropdown = () => {
  return (
    <div className="w-max bg-background p-1.5 shadow-md  flex items-start gap-x-3">
      <div className="border-r pr-2">
        <h4 className="text-gray-500 text-xs">BY TEAM SIZE</h4>
        <ul className="mt-1">
          <li>
            <Link
              href={"/"}
              className="flex gap-x-2 p-1 rounded-lg hover:bg-gray-50 transition w-full"
            >
              <Image
                src={"/img/team-size-enterprise.png"}
                width={40}
                height={30}
                alt="svg"
              />
              <div className="">
                <h3 className="font-medium">Enterprise</h3>
                <p className="text-sm text-gray-400">
                  Advanced features for your org
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex gap-x-2 p-1 rounded-lg hover:bg-gray-50 transition w-full"
            >
              <Image
                src={"/img/team-size-small-business.png"}
                width={40}
                height={30}
                alt="svg"
              />
              <div className="">
                <h3 className="font-medium">Small business</h3>
                <p className="text-sm text-gray-400">
                  Run your team on one tool
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex gap-x-2 p-1 rounded-lg hover:bg-gray-50 transition w-full"
            >
              <Image
                src={"/img/team-size-personal.png"}
                width={40}
                height={30}
                alt="svg"
              />
              <div className="">
                <h3 className="font-medium">Personal</h3>
                <p className="text-sm text-gray-400">Free for individuals</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h4 className="text-gray-500 text-xs">BY TEAM FUNCTION</h4>
        <ul className="mt-1">
          <li>
            <Link
              href={"/"}
              className="flex gap-x-2 py-1 px-3 rounded-lg hover:bg-gray-50 transition w-full"
            >
              <h3 className="font-medium">Design</h3>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex gap-x-2 py-1 px-3 rounded-lg hover:bg-gray-50 transition w-full"
            >
              <h3 className="font-medium">Engineering</h3>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex gap-x-2 py-1 px-3 rounded-lg hover:bg-gray-50 transition w-full"
            >
              <h3 className="font-medium">Product</h3>
            </Link>
          </li>

          <li>
            <Link
              href={"/"}
              className="flex gap-x-2 py-1 px-3 rounded-lg hover:bg-gray-50 transition w-full"
            >
              <h3 className="font-medium">Manegers</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
