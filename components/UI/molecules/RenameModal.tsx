const RenameModal: React.FunctionComponent<any> = ({setRenameModal}) => {
  return (
    <div className="px-48 mb-8">
      <div className="rounded-xl bg-blue-100/30 backdrop-blur-md sm:rounded-lg w-full flex items-center justify-center pb-4">
        <div className="px-4 py-5 w-full">
          <h3 className="text-xl font-lg leading-6 text-gray-900">
            Rename folder
          </h3>
          {/* <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Change the email address you want associated with your account.</p>
        </div> */}
          <form className="mt-5 flex items-center justify-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="text" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="New name"
              />
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setRenameModal(false)}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RenameModal;
