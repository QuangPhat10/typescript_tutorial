import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div className="grid gap-2 m-5">
        <div className="grid grid-cols-2 gap-2 items-center">
          {/* UploadFile */}
          <form className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
            />
            <div
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="user_avatar_help"
            >
              A profile picture is useful to confirm your are logged into your
              account
            </div>
          </form>
          {/* Combobox */}
          <form className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select your country
            </label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
