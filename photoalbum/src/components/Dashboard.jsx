const dashboard=()=>{
    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <div className="bg-slate-800 max-w-sm rounded-xl p-6 text-center">
                <img src="album.png" alt="album"/>
                <h2 className="px-6 py-4 text-white text-xl mb-4">Personal Photo Album</h2>
                <div className="px-4 py-2 text-white text-l mb-4"><button>Upload Photo</button></div>
                <div className="px-4 py-2 text-white text-l mb-4"><button>View Photos</button></div>
                <div className="px-4 py-2 text-white text-l mb-4"><button>Sign Out</button></div>
            </div>

        </div>
        </>
    )
};
export default dashboard