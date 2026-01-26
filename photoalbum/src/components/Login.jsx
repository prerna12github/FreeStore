const Login=({signIn})=>{
    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="bg-slate-800 max-w-sm rounded-xl p-6 text-center">
            <img
              className="w-full h-56 object-cover rounded"
              src="/album.png"
              alt="Album"
            />
            <h2 className="px-6 py-4 text-white text-xl mb-4">
              Personal Photo Album
            </h2>

            <button
              onClick={signIn}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              Google Sign in
            </button>
          </div>
        </div>
        </>
     
    )
};
export default Login